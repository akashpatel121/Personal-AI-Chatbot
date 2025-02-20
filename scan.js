require("dotenv").config();  

const { GoogleAIFileManager } = require("@google/generative-ai/server");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const mediaPath = "/home/akash-patel/Personal-AI-Chatbot/mediaPath"; 

const fileManager = new GoogleAIFileManager(process.env.API_KEY);

async function run() {
  const uploadResult = await fileManager.uploadFile(
    `${mediaPath}/image3.jpeg`,
    {
      mimeType: "image1/jpg",
      displayName: "Image drawing",
    }
  );

 
  console.log(
    `Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`
  );

  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent([
    "Tell me the name of image in one word",
    {
      fileData: {
        fileUri: uploadResult.file.uri,
        mimeType: uploadResult.file.mimeType,
      },
    },
  ]);
  console.log(result.response.text());
}

run().catch(console.error);
