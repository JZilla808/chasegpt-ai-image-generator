export async function GET(request: Request) {
  // Check the current environment
  const isDevEnv = process.env.NODE_ENV === "development";

  //   Debug logging
  // console.log("isDevEnv:", isDevEnv);

  // Set the API endpoint based on the environment
  // Update the Azure Function URL
  // const apiUrl = isDevEnv
  //   ? "http://127.0.0.1:7071/api/getChatGPTSuggestion"
  //   : "https://chasegpt-ai-image-generator.azurewebsites.net/api/getchatgptsuggestion";

  // TODO: change the API URL after debugging
  const apiUrl =
    "https://chasegpt-ai-image-generator.azurewebsites.net/api/getchatgptsuggestion";

  // connect to our Microsoft Azure Function Endpoint
  const response = await fetch(apiUrl, { cache: "no-store" });
  const textData = await response.text();

  //   Debug logging
  // console.log("textData:", textData);
  console.log("Response status:", response.status);
  console.log("Response headers:", response.headers);
  console.log("Text data:", textData);

  // return new Response(JSON.stringify(textData.trim()), { status: 200 });

  // TODO: compare my code with sonny's and remove the code below after debugging
  // Append the environment information to the textData
  const environmentInfo = `Environment: ${
    isDevEnv ? "development" : "production"
  }, API URL: ${apiUrl}`;
  const modifiedTextData = `${textData}\n${environmentInfo}`;

  return new Response(JSON.stringify(modifiedTextData.trim()), { status: 200 });
}
