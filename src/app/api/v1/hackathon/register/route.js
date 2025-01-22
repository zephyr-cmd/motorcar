import { DBConnect } from "@/lib/Database/db";
import hackathonTeamDB from "@/lib/Database/Model/hackathon/hackathonTeamDB";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Connect to the database
    await DBConnect();

    // Parse the incoming request body
    const body = await request.json();
    let { teamName, members } = body;

    // Validate and normalize teamName
    if (!teamName) {
      return NextResponse.json({
        status: 400,
        message: "Team name is required",
      });
    }

    // Convert teamName to lowercase
    teamName = teamName.toLowerCase();

    // Check if the team name already exists
    const teamExists = await hackathonTeamDB.exists({ teamName });
    if (teamExists) {
      return NextResponse.json({
        status: 400,
        message: "Team name already exists. Please choose another name.",
      });
    }

    // Validate members array
    if (!Array.isArray(members) || members.length === 0) {
      return NextResponse.json({
        status: 400,
        message: "Members array is required and cannot be empty",
      });
    }

    if (members.length > 4) {
      return NextResponse.json({
        status: 400,
        message: "A team can have a maximum of 4 members",
      });
    }

    // Ensure there is exactly one SPOC
    const spocCount = members.filter((member) => member.spoc).length;
    if (spocCount !== 1) {
      return NextResponse.json({
        status: 400,
        message: "A team must have exactly one member set as the SPOC",
      });
    }

    // Set default countryCode if not provided
    const updatedMembers = members.map((member) => ({
      ...member,
      countryCode: member.countryCode || "+92",
    }));

    // Create a new team
    const newTeam = await hackathonTeamDB.create({
      teamName,
      members: updatedMembers,
    });

    // console.log("L-70, newTeam : ", newTeam);

    return NextResponse.json({
      status: 201,
      message: "Team created successfully",
      data: newTeam,
    });
  } catch (error) {
    console.error("L-78B, Error creating team:", error.message);

    if (error.code === 11000) {
      // Duplicate key error
      const errorMessage = error.message;
      const match = errorMessage.match(
        /index: (.+?) dup key: { (.+?): "(.+?)" }/
      );

      if (match) {
        const indexName = match[1]; // e.g., "members.email_1"
        const field = match[2]; // e.g., "members.email"
        const value = match[3]; // e.g., "steve@example.com"

        return NextResponse.json({
          status: 500,
          message: `The ${indexName} "${value}" is already in use. Please use a different one.`,
        });
      }
    }

    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
      error: error.message,
    });
  }
}
