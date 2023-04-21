export async function GET(request: Request) {
  // Check the current environment
  const isDevEnv = process.env.NODE_ENV === "development";

  //   Debug logging
  //   console.log("isDevEnv:", isDevEnv);

  // Set the API endpoint based on the environment
  // TODO: Update the Azure Function URL
  const apiUrl = isDevEnv
    ? "http://127.0.0.1:7071/api/getChatGPTSuggestion"
    : "https://chasegpt-ai-image-generator.azurewebsites.net/api/getchatgptsuggestion";

  // connect to our Microsoft Azure Function Endpoint
  const response = await fetch(apiUrl, { cache: "no-store" });
  const textData = await response.text();

  //   Debug logging
  //   console.log("textData:", textData);

  return new Response(JSON.stringify(textData.trim()), { status: 200 });
}
