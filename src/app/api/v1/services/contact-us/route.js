import { DBConnect } from "@/lib/Database/db";
import { NextResponse } from "next/server";
import contactDB from "@/lib/Database/Model/contactDB";

export async function GET(request) {
  await DBConnect();
  const res = await contactDB.find();
  return NextResponse.json(
    { docLength: res.length, data: res },
    { stauts: 200 }
  );
}

export async function POST(request) {
  await DBConnect();
  let { firstName, lastName, email, industry, message } = await request.json();
  // console.log("L-17, email ::", email);
  if (!email) {
    return NextResponse.json({ data: {} }, { status: 400 });
  }
  const response = await contactDB.findOneAndUpdate(
    { email: email },
    { $set: { isSubscribed: true, firstName, lastName, industry, message } },
    { new: true, upsert: true }
  );
  if (!response) {
    return NextResponse.json({ data: {} }, { status: 400 });
  }
  // console.log("L-29, response from server : ", response);
  return NextResponse.json({ data: response }, { status: 200 });
}

export async function DELETE(request) {
  await DBConnect();
  const { email } = await request.json();
  const response = await contactDB.findOneAndUpdate(
    { email },
    { $set: { isSubscribed: false } }
  );
  if (!response) {
    return NextResponse.json(
      { data: {}, message: "something went wrong!" },
      { status: 400 }
    );
  }
  return NextResponse.json(
    {
      message: "You have successfully unsubscribed",
      data: {},
    },
    { status: 200 }
  );
}
