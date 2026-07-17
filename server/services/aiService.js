const OpenAI = require("openai");
const getSchema = require("./schemaService");

require("dotenv").config();

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

async function generateSQL(question) {
  const schema = await getSchema();

  const prompt = `
You are an expert PostgreSQL SQL assistant.

Database Schema:

${schema}

Rules:
1. Return ONLY SQL.
2. Only SELECT queries.
3. No explanation.
4. No markdown.
5. Don't use tables or columns not in the schema.
6. PostgreSQL syntax only.

Question:
${question}
`;

  const response = await client.chat.completions.create({
    model: "poolside/laguna-xs-2.1:free",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0].message.content.trim();
}

module.exports = generateSQL;