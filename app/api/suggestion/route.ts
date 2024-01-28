export async function GET(request: Request) {
  const response = await fetch(
    // This is the URL of the local Azure Function for development. CHANGE TO DEPLOYED URL
    // "http://127.0.0.1:7071/api/getChatGPTSuggestion",

    // This is the URL of the deployed Azure Function.
    "https://chasegpt-ai-image-generator.azurewebsites.net/api/getchatgptsuggestion",
    {
      cache: "no-store",
    }
  );
  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}
