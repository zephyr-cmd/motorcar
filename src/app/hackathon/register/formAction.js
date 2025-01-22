// formAction.js
"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
let { ServerURI } = process.env;

const memberSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid/empty email address"),
  college: z
    .string()
    .transform((val) => (val.trim() === "" ? undefined : val)) // Convert empty string to undefined
    .refine((val) => val === undefined || val.length >= 2, {
      message: "College must be at least 2 characters",
    }) // Apply conditional validation
    .optional(),
  contactNumber: z
    .string()
    .transform((val) => (val.trim() === "" ? undefined : val)) // Convert empty string to undefined
    .refine((val) => val === undefined || /^\d{10}$/.test(val), {
      message: "Invalid Moblie number",
    }) // Apply conditional validation
    .optional(),
  city: z
    .string()
    .transform((val) => (val.trim() === "" ? undefined : val)) // Convert empty string to undefined
    .refine((val) => val === undefined || val.length >= 3, {
      message: "City must be at least 3 characters",
    }) // Apply conditional validation
    .optional(),
  state: z
    .string()
    .transform((val) => (val.trim() === "" ? undefined : val)) // Convert empty string to undefined
    .refine((val) => val === undefined || val.length >= 2, {
      message: "State must be at least 2 characters",
    }) // Apply conditional validation
    .optional(),
  spoc: z.boolean(),
});

const formSchema = z.object({
  teamName: z.string().min(3, "Team name must be at least 3 characters"),
  members: z
    .array(memberSchema)
    .min(1, "Team must have at least 1 Member")
    .max(4, "Team can have maximum 4 members"),
});

export async function hackTeamAction(prevState, formData) {
  console.log("L-51S, FormData---->", formData);
  console.log("L-52S, PrevState---->", prevState);

  const rawFormData = {
    teamName: formData.get("teamName"),
    members: [],
  };

  // Extract member data from form
  const spocIndex = parseInt(formData.get("spoc"), 10); // Get the SPOC index from formData
  let memberCount = 0;

  while (formData.get(`member${memberCount}.name`)) {
    const member = {
      name: formData.get(`member${memberCount}.name`),
      email: formData.get(`member${memberCount}.email`),
      college: formData.get(`member${memberCount}.college`),
      contactNumber: formData.get(`member${memberCount}.contactNumber`),
      city: formData.get(`member${memberCount}.city`),
      state: formData.get(`member${memberCount}.state`),
      spoc: memberCount === spocIndex, // Assign SPOC based on the index
    };

    rawFormData.members.push(member);
    memberCount++;
  }

  try {
    // Validate form data
    const validatedData = formSchema.parse(rawFormData);
    console.log("L-81S, validateFields: ", validatedData);

    // Check for single SPOC
    const hasSpoc = validatedData.members.some((member) => member.spoc);
    if (!hasSpoc) {
      return {
        message: "One member must be designated as SPOC",
      };
    }
    // console.log("L-90S, validateFields: ", hasSpoc);

    // Check for unique emails
    const emails = new Set();
    for (const member of validatedData.members) {
      if (emails.has(member.email)) {
        return {
          errors: { email: "Duplicate email addresses are not allowed" },
        };
      }
      emails.add(member.email);
    }

    // Verify team name availability
    const teamNameCheck = await fetch(
      `${ServerURI}/api/v1/hackathon/fetch-team/${encodeURIComponent(
        validatedData.teamName
      )}`
    );
    const { exists } = await teamNameCheck.json();

    if (exists) {
      return {
        errors: { teamName: "Team name is already taken" },
      };
    }

    // Submit registration
    const response = await fetch(`${ServerURI}/api/v1/hackathon/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedData),
    });
    const apiResponse = await response.json();
    // console.log("L-121, exists------>", apiResponse);

    if (
      apiResponse?.status == 200 ||
      apiResponse?.status == 201 ||
      apiResponse?.status == 400 ||
      apiResponse?.status == 409 ||
      apiResponse?.status == 500
    ) {
      revalidatePath("/");
      return {
        status: apiResponse?.status,
        message: `${apiResponse?.message}`,
        // errors: `${apiResponse?.message}`,
      };
    } else {
      return { message: `something went wrong !` };
    }

    // Redirect on success
    revalidatePath("/");
    redirect("/");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        errors: error.flatten().fieldErrors,
      };
    }

    return {
      errors: {
        submit: error.message || "Something went wrong",
      },
    };
  }
}
