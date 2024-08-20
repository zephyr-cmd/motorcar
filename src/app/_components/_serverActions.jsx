"use server";

// import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";
import { z } from "zod";
let { ServerURI } = process.env;

export async function createCTA(prevState, formData) {
  // console.log("L-8, FormData---->", formData);
  // console.log("L-9, PrevState---->", prevState);

  const schema = z.object({
    firstName: z
      .string()
      .min(4, { message: "Must be 4 or more characters long" }),
    lastName: z
      .string()
      .min(4, { message: "Must be 4 or more characters long" }),
    email: z
      .string()
      .optional()
      .refine(
        (value) => value === "" || z.string().email().safeParse(value).success,
        {
          message: "Please use a valid email address",
        }
      ),
    industry: z
      .string()
      .min(5, { message: "Must be 5 or more characters long" }),
    message: z.string().optional(),
  });
  const validatedFields = schema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    industry: formData.get("industry"),
    message: formData.get("message"),
  });
  // console.log("L-40 validateFields: ", validatedFields.success);
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please Provide Correct Details",
    };
  }
  const newObjData = validatedFields.data;
  // console.log("L-49, data requested----------->", newObjData);
  try {
    const apiResponse = await fetch(`${ServerURI}/api/v1/services/contact-us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(newObjData),
    });
    // await axios.post(
    //   `${ServerURI}/api/v1/appointment`,
    //   newObjData
    // );
    console.log("L-63, apiResponse-------->", apiResponse.status);
    if (apiResponse.status == 200) {
      // revalidatePath("/");
      // redirect("/");
      return { message: `Successfully Booked`, status: true };
    } else {
      return { message: `something went wrong !` };
    }
  } catch (e) {
    console.log("L-72, ", e);
    return { message: "Failed to create Booking" };
  }
}
