"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
const { ServerURI } = process.env;

// Simplified schema for the basic form
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  contactNumber: z
    .string()
    .trim()
    .transform((val) => (val === "" ? undefined : val))
    .refine((val) => val === undefined || /^\+?[\d\s-]{10,}$/.test(val), {
      message: "Invalid mobile number",
    })
    .optional(),
});

export async function hackTeamAction(prevState, formData) {
  // console.log("L-22S, FormData---->", formData);
  // console.log("L-23S, PrevState---->", prevState);
  try {
    // Extract data from form
    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      contactNumber: formData.get("contactNumber"),
    };

    // Validate form data
    const validatedData = formSchema.parse(rawFormData);
    console.log("L-34, validatedData-------------->", rawFormData);

    // Submit registration
    const response = await fetch(`${ServerURI}/api/v1/hackathon/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedData),
    });

    const apiResponse = await response.json();

    // Handle API response
    if ([200, 201, 400, 409, 500].includes(apiResponse?.status)) {
      revalidatePath("/");
      return {
        status: apiResponse.status,
        message: apiResponse.message,
      };
    }

    return {
      message: "Something went wrong!",
      status: 500,
    };
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      const errorMap = {};
      error.errors.forEach((err) => {
        errorMap[err.path[0]] = err.message;
      });

      return {
        errors: errorMap,
        status: 400,
      };
    }

    // Handle other errors
    return {
      errors: {
        submit: error.message || "Something went wrong",
      },
      status: 500,
    };
  }
}
