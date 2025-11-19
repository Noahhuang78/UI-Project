import { useState } from "react";
import { mockUser } from "../../data/events";
import ClubData from "../../assets/ClubData.json";
import EventData from "../../assets/EventData.json";
import InternshipData from "../../assets/EventData.json";
import NewsData from "../../assets/NewsData.json";

import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey });
const context = `${JSON.stringify(ClubData)} \n ${JSON.stringify(EventData)} \n ${JSON.stringify(InternshipData)} \n${JSON.stringify(NewsData)}\n`
async function gemini(content) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `You are a campus hub assistant answering student's queries. Please guide students with queries about events, clubs, internships and news. Here are the events, clubs, internships and news in campus: ${context}
    Answer the students' Query:\n
    ${content}`,
  });
  console.log(response.text);
  return response.text;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `Hi ${mockUser.name}! I’ll show you event updates here.`,
    },
  ]);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  async function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };

    setMessages((prev) => [...prev, userMsg, { from: "bot", text: "..." }]);
    const userInput = input;
    setInput("");

    try {
      // const res = await fetch("http://localhost:3001/api/chat", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     message: userInput,
      //     interests: mockUser.interests,
      //   }),
      // });

      // if (!res.ok) {
      //   throw new Error(`Server returned ${res.status}`);
      // }
      // const data = await res.json(); // { reply, recommendedEventIds }
      const data = await gemini(userInput);

      setMessages((prev) => [
        ...prev.filter((m) => m.text !== "..."),
        { from: "bot", text: data },
      ]);
    } catch (err) {
      console.error("Chat API error:", err);
      setMessages((prev) => [
        ...prev.filter((m) => m.text !== "Thinking..."),
        { from: "bot", text: "Sorry, I had a problem talking to the server." },
      ]);
    }
  }

  return (
    <>
      {/* Floating chat icon */}
      <button className="chatbot-fab" onClick={toggleOpen}>
        💬
      </button>

      {/* Popup chat panel */}
      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <span>Campus Assistant</span>
            <button onClick={toggleOpen}>✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.from === "bot"
                    ? "chatbot-msg chatbot-msg-bot"
                    : "chatbot-msg chatbot-msg-user"
                }
              >
                {m.text}
              </div>
            ))}
          </div>

          <form className="chatbot-input-row" onSubmit={handleSend}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about events..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
