import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json(); // res now contains the JSON body
  const prompt = res.prompt;

  const isDevEnv = process.env.NODE_ENV === "development";

  //   Debug logging
  //   console.log("isDevEnv:", isDevEnv);

  // Set the API endpoint based on the environment
  // TODO: Update the Azure Function URL
  const apiUrl = isDevEnv
    ? "http://127.0.0.1:7071/api/generateImage"
    : "https://chasegpt-ai-image-generator.azurewebsites.net/api/generateimage";

  //   Connect to our Microsoft Azure Function Endpoint
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const textData = await response.text();

  return NextResponse.json(textData);
}
