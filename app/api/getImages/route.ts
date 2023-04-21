export async function GET(request: Request) {
  // Check the current environment
  const isDevEnv = process.env.NODE_ENV === "development";

  //   Debug logging
  //   console.log("isDevEnv:", isDevEnv);

  // Set the API endpoint based on the environment
  // Update the Azure Function URL
  const apiUrl = isDevEnv
    ? "http://127.0.0.1:7071/api/getImages"
    : "https://chasegpt-ai-image-generator.azurewebsites.net/api/getimages";

  // connect to our Microsoft Azure Function Endpoint
  const response = await fetch(apiUrl, { cache: "no-store" });

  const blob = await response.blob();
  const textData = await blob.text();

  const data = JSON.parse(textData);

  return new Response(JSON.stringify(data), { status: 200 });
}
