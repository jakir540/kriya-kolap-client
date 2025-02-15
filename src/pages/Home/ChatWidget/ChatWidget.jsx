import { useState } from "react";
import { IoChatbubbleEllipses, IoClose } from "react-icons/io5";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Thanks for your message!" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 bg-[#00a854]  text-white rounded-full shadow-lg hover:bg-[#00a854e8] "
        >
          <IoChatbubbleEllipses size={24} />
        </button>
      )}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-lg flex flex-col overflow-hidden">
          <div className="bg-[#00a854]  text-white flex justify-between items-center p-3">
            <span>Chat Support</span>
            <button onClick={() => setIsOpen(false)}>
              <IoClose size={20} />
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-200 self-end"
                    : "bg-gray-200 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex items-center">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="ml-2 p-2 bg-[#00a854]  text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
