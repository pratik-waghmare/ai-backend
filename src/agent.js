import { AGENT_PROMPT } from "./constants/prompt";
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const callAgent = async (code) => {
    const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: AGENT_PROMPT,
      },{
        role: "user",
        content: code,
      },
    ],
    model: "openai/gpt-oss-20b",
  });

  console.log(JSON.stringify(completion.choices));
  return completion;
}

