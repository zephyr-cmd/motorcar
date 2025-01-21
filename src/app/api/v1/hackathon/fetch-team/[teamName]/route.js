import { DBConnect } from "@/lib/Database/db";
import { NextResponse } from "next/server";
import HackathonTeamDB from "@/lib/Database/Model/hackathon/team";

export async function GET(request, context) {
  try {
    await DBConnect();
    // Extract the teamName from query parameters
    let { teamName } = context.params;
    // console.log("L-1, checking the user already exist or not :", teamName);

    if (!teamName) {
      return NextResponse.json({
        status: 400,
        message: "Team name is required",
        data: { exists: false },
      });
    }
    // Convert teamName to lowercase
    teamName = teamName.toLowerCase();

    // Check if the team exists
    const teamExists = await HackathonTeamDB.exists({ teamName });
    // console.log("L-24, checking the user already exist or not:", teamExists);

    return NextResponse.json({
      status: 200,
      message: "Team existence check completed",
      data: { exists: !!teamExists }, // Convert to boolean
    });
  } catch (error) {
    console.error("Error checking team existence:", error.message);

    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
      error: error.message,
      data: { exists: false },
    });
  }
}
