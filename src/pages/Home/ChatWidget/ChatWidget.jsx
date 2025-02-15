import { useState, useRef, useEffect } from "react";
import { IoChatbubbleEllipses, IoClose, IoSend } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi there! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: "user", text: input }];
      setMessages(newMessages);
      setInput("");

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "🤖 Thanks for your message! I'll get back to you soon.",
          },
        ]);
      }, 1200);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="p-4 bg-gradient-to-r from-[#00a854] to-[#00c3a3] text-white rounded-full shadow-xl hover:shadow-2xl transition-all"
        >
          <IoChatbubbleEllipses size={28} />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-80 h-96 bg-white shadow-2xl rounded-lg flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#00a854] to-[#00c3a3] text-white flex justify-between items-center p-4 font-medium">
              <span>💬 Live Chat</span>
              <button onClick={() => setIsOpen(false)}>
                <IoClose size={22} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-300">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-gray-200 text-gray-800 self-start"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input Box */}
            <div className="p-3 border-t flex items-center bg-gray-50">
              <input
                type="text"
                className="flex-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#00a854]"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleSend}
                className="ml-2 p-2 bg-[#00a854] text-white rounded-lg hover:bg-[#009144] transition-all"
              >
                <IoSend size={20} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
