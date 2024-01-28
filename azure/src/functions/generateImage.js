const { app } = require("@azure/functions");
const openai = require("../../lib/openai");
const axios = require("axios");
const generateSASToken = require("../../lib/generateSASToken");

const { BlobServiceClient } = require("@azure/storage-blob");

const accountName = process.env.accountName;

const containerName = "images";

app.http("generateImage", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request) => {
    const { prompt } = await request.json();

    // debugging logs
    console.log("Prompt: ", prompt);

    const response = await openai.createImage({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    image_url = response.data.data[0].url;

    // Download the image and return it as an arraybuffer
    const res = await axios.get(image_url, { responseType: "arraybuffer" });

    const arrayBuffer = res.data;

    // Create a SAS token for the blob
    sasToken = await generateSASToken();

    // Create a blob service client
    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net?${sasToken}`
    );

    const containerClient = blobServiceClient.getContainerClient(containerName);

    // generate current timestamp
    const timestamp = new Date().getTime();
    // set max filename length to 100 in order to avoid errors when downloading the image
    const maxFilenameLength = 300;
    const fileExtension = ".png";
    const truncatedPrompt = prompt.substring(
      0,
      maxFilenameLength - timestamp.toString().length - fileExtension.length - 1
    );
    const file_name = `${truncatedPrompt}_${timestamp}${fileExtension}`;

    const blockBlobClient = containerClient.getBlockBlobClient(file_name);

    try {
      await blockBlobClient.uploadData(arrayBuffer);
      console.log("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error.message);
    }

    return { body: "Successfully Uploaded Image" };
  },
});
