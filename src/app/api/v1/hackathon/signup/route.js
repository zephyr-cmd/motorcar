import { NextResponse } from "next/server";
import { DBConnect } from "@/lib/Database/db";
import TeamSignUp from "@/lib/Database/Model/hackathon/teamSignUp";

export async function POST(request) {
  try {
    // Connect to database
    await DBConnect();

    const body = await request.json();
    const { name, email, contactNumber } = body;
    // console.log("L-12, this is SignUp from Hackathon ------>", name, email);

    // Check for existing registration
    const existingTeam = await TeamSignUp.findOne({ email });
    if (existingTeam) {
      return NextResponse.json({
        status: 409,
        message: "Email already registered",
      });
    }

    // Create new team
    const team = await TeamSignUp.create({
      name,
      email,
      contactNumber,
    });

    // You might want to send a verification email here
    // await sendVerificationEmail(team.email, team.verificationToken);

    return NextResponse.json({
      status: 201,
      message:
        "Registration successful! The Ada Hacks Team will contact you shortly.",
      data: {
        name: team.name,
        email: team.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);

    // Handle mongoose validation errors
    if (error.name === "ValidationError") {
      const errors = {};
      for (let field in error.errors) {
        errors[field] = error.errors[field].message;
      }
      return NextResponse.json({
        status: 400,
        message: "Validation error",
        errors,
      });
    }

    // Handle other errors
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
    });
  }
}
