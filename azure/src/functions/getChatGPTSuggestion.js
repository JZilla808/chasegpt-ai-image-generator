const { app } = require("@azure/functions");
const openai = require("../../lib/openai");

app.http("getChatGPTSuggestion", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    // api call using gpt-3.5-turbo model
    const message = [
      {
        role: "system",
        content:
          "You are the best DALL·E prompt generator in the world! You do not wrap the answer in quotes.",
      },
      {
        role: "user",
        content:
          "Write a random text prompt for DALL·E to generate an image, this prompt will be shown to the user, include details such as the genre and what type of painting it should be, options can include: oil painting, watercolor, photo-realistic, 4K, abstract, modern, anime, black and white etc. Try to use less than 70 words. Do not wrap the answer in quotes.",
      },
    ];

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: message,
      max_tokens: 300,
      temperature: 0.8,
    });

    // // api call using davinci-003 model
    // const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt:
    //     "Write a random text prompt for DALL·E to generate an image, this prompt will be shown to the user, include details such as the genre and what type of painting it should be, options can include: oil painting, watercolor, photo-realistic, 4K, abstract, modern, anime, black and white etc. Do not wrap the answer in quotes.",
    //   max_tokens: 300,
    //   temperature: 0.8,
    // });

    context.log(`Http function processed request for url "${request.url}"`);

    // const responseText = response.data.choices[0].text;

    const responseText = response.data.choices[0].message.content;

    // context.log(`Response: ${responseText}`);

    return {
      body: responseText,
    };
  },
});
