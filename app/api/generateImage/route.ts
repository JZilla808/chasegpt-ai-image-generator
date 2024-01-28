import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json(); // res now contains body
  const prompt = res.prompt;

  const response = await fetch(
    // TODO: This is the URL of the local Azure Function for development. CHANGE TO DEPLOYED URL
    "http://127.0.0.1:7071/api/generateImage",

    // This is the URL of the deployed Azure Function.
    // "https://chasegpt-ai-image-generator.azurewebsites.net/api/generateimage",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    }
  );

  const textData = await response.text();

  return NextResponse.json(textData);
}
