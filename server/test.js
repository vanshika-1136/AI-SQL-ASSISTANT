const OpenAI = require("openai");
require("dotenv").config();

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

async function main() {
  try {
    const response = await client.chat.completions.create({
      model: "poolside/laguna-xs-2.1:free",
      // model: "qwen/qwen3-coder:free",
      messages: [
        {
          role: "user",
          content: "Say Hello!",
        },
      ],
    });

    console.log(response.choices[0].message.content);
  } catch (err) {
    console.error(err);
  }
}

main();