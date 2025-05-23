import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input) return;
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          type: "user",
        }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, data.message]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I couldn't respond. Try again!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2 text-green-700">Ask SIMPRE_2025 About Flowers</h2>
      <div className="h-40 overflow-y-auto mb-2 border p-2 rounded">
        {messages.map((msg, index) => (
          <p key={index} className={msg.role === "user" ? "text-right text-blue-600" : "text-left text-green-800"}>
            {msg.content}
          </p>
        ))}
        {loading && <p className="text-gray-500">Thinking...</p>}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="flex-grow p-2 border rounded"
          placeholder="Ask about flowers..."
          disabled={loading}
        />
        <button
          onClick={handleSend}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;