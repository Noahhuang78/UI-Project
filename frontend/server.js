// server.js (backend skeleton, no AI yet)
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import { events } from "./src/data/events.js";


const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/ping", (req, res) => { 
    res.json({message: "pong"});
}); 

app.post("/api/chat", async (req, res) => {
    // 👈 destructure the SAME keys that the frontend sends
    const { message, interests = [] } = req.body || {};

    const prompt = `
        You are a helpful school-portal assistant.

        Here is the full list of available events in JSON:
        ${JSON.stringify(events, null, 2)}

        User interests: ${interests.join(", ")}
        User message: "${message}"

        From the events list above, choose 2–3 events that best match
        the user's interests and message. 

        Important:
        - Only recommend events from the given list.
        - Use the exact event titles from the JSON.
        - In your answer, mention the event title and date.

        Write a short, friendly answer.
        `;
  
    try {
      // talk to local Ollama model
      const ollamaRes = await fetch("4http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3:8b",
          prompt: prompt,
          stream: false
        })
      });
  
      const data = await ollamaRes.json();
  
      // Ollama /api/generate returns { response: "..." }
      const replyText = data.response || "No response from model.";
  
      res.json({
        reply: replyText,
        recommendedEventIds: []
      });
    } catch (err) {
      console.error("Ollama error:", err);
      res.status(500).json({ reply: "AI error occurred." });
    }
  });
  
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend listening on http://localhost:${PORT}`);
});