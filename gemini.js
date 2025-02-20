require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

let request = "I want my Aadhar card";
const prompt = `What is one word for  "${request}"`;

async function generateContent() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

generateContent().catch(console.error);

