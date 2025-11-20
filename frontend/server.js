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
    You are a helpful school-portal assistant for a student events platform.
    
    Here is the full list of available events in JSON:
    ${JSON.stringify(events, null, 2)}
    
    User interests: ${interests.join(", ") || "None"}
    User message: "${message}"
    
    /**
    INSTRUCTIONS – READ CAREFULLY
    1. You must ONLY use events from the JSON above.
    2. Use the exact "title" and "date" fields from the JSON when you mention an event.
    3. First, decide what the user is asking for:
    
      - CASE A: GENERAL BROWSE
        Examples:
          "what upcoming events are there?"
          "any events for tech and music?"
        → In this case:
          - Recommend 2–3 upcoming events.
          - Prefer events that match the user's interests.
          - Answer in 2–4 short bullet points.
          - For each event, include:
              • Title
              • Date
              • 1 short sentence describing why it might interest them.
    
      - CASE B: ASKING ABOUT ONE SPECIFIC EVENT
        Examples:
          "Tell me more about Hackathon 2025"
          "What is Music Night: Open Mic about?"
        → In this case:
          - Identify the matching event from the JSON by title.
          - Focus ONLY on this event (do NOT recommend others unless explicitly asked).
          - Give a short, friendly paragraph with:
              • What the event is about
              • Who it is for
              • Date (and time if available in the JSON)
              • Location if available
              • Why this might be interesting for a student with the given interests.
          - If you cannot find that exact event title in the JSON, say you can't find it and
            suggest 1–2 similar events instead.
    
      - CASE C: OTHER QUESTIONS (e.g. logistics about a known event)
        Examples:
          "What time does Hackathon 2025 start?"
          "Where is Music Night: Open Mic happening?"
        → In this case:
          - Find the event by title in the JSON.
          - Answer the specific question using only fields from the JSON.
          - If the JSON does not contain the requested detail, say so honestly and give any
            related information that IS available.
    
    4. STYLE:
        - Be concise and friendly.
        - Do NOT invent events or details that are not in the JSON.
        - Do NOT mention internal JSON field names in your reply.
    **/
    `;
    
    try {
      // talk to local Ollama model
      const ollamaRes = await fetch("http://localhost:11434/api/generate", {
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