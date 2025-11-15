// src/components/chatbot/ChatBot.jsx
import { useState } from "react";
import { mockUser } from "../../data/events";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: `Hi ${mockUser.name}! I’ll show you event updates here.` }
  ]);

  function toggleOpen() {
    setIsOpen(prev => !prev);
  }

  async function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;
  
    const userMsg = { from: "user", text: input };
  
    setMessages(prev => [...prev, userMsg, { from: "bot", text: "Thinking..." }]);
    const userInput = input;
    setInput("");
  
    try {
      const res = await fetch("http://localhost:3001/api/chat", {   // ⬅ change here
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userInput,
          interests: mockUser.interests
        })
      });
  
      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }
  
      const data = await res.json(); // { reply, recommendedEventIds }
  
      setMessages(prev => [
        ...prev.filter(m => m.text !== "Thinking..."),
        { from: "bot", text: data.reply }
      ]);
    } catch (err) {
      console.error("Chat API error:", err);
      setMessages(prev => [
        ...prev.filter(m => m.text !== "Thinking..."),
        { from: "bot", text: "Sorry, I had a problem talking to the server." }
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
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about events..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
