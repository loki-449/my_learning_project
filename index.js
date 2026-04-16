import OpenAI from "openai";
import 'dotenv/config';

// 初始化连接 DeepSeek
const openai = new OpenAI({
  apiKey: process.env.ANTHROPIC_API_KEY, // 这里读取你 .env 里的 key
  baseURL: "https://api.deepseek.com",    // DeepSeek 的官方地址
});

async function main() {
  console.log("🚀 Agent 正在启动，准备咨询 DeepSeek...");

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "你好，请自我介绍一下，并确认你现在是否在通过 DeepSeek API 提供服务。" }],
      model: "deepseek-chat",
    });

    console.log("\n🤖 Agent 回复：\n");
    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("❌ 出错了：", error.message);
  }
}

main();