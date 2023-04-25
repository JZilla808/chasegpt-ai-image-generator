export async function GET(request: Request) {
  // localhostUrl="http://127.0.0.1:7071/api/getImages"

  const response = await fetch(
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
