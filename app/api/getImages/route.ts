export async function GET(request: Request) {
  const response = await fetch(
    // This is the URL of the local Azure Function for development.
    // "http://127.0.0.1:7071/api/getImages",

    // This is the URL of the deployed Azure Function.
    "https://chasegpt-ai-image-generator.azurewebsites.net/api/getimages",
    {
      cache: "no-store",
    }
  );

  const blob = await response.blob();
  const textData = await blob.text();

  const data = JSON.parse(textData);

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
