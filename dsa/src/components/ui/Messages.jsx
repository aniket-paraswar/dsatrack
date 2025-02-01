import React, { useState } from "react";
import { FaPaperPlane, FaUserCircle, FaSearch } from "react-icons/fa";

const dummyChats = [
  { id: 1, name: "John Doe", lastMessage: "Hey! How's it going?", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Sarah Smith", lastMessage: "Let's catch up soon!", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "Mark Brown", lastMessage: "Did you finish the project?", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Emily White", lastMessage: "I'll send the files shortly.", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
];

const dummyMessages = [
  { id: 1, text: "Hey! How are you?", sender: "user" },
  { id: 2, text: "I'm good! What about you?", sender: "other" },
  { id: 3, text: "Just working on a project.", sender: "user" },
];

const Messages = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState(dummyChats[0]);

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: "user" }]);
      setNewMessage("");
      setTimeout(() => {
        setMessages((prev) => [...prev, { id: prev.length + 1, text: "Got it! 👍", sender: "other" }]);
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Chat List */}
      <div className="w-1/3 md:w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Chats</h2>
        <div className="flex items-center mb-3 p-2 bg-gray-200 rounded-lg">
          <FaSearch className="text-gray-500 mr-2" />
          <input type="text" placeholder="Search..." className="bg-transparent outline-none w-full" />
        </div>
        <div className="space-y-4">
          {dummyChats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition ${selectedChat.id === chat.id ? "bg-purple-200" : "hover:bg-gray-200"}`}
              onClick={() => setSelectedChat(chat)}
            >
              <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h3 className="text-md font-semibold">{chat.name}</h3>
                <p className="text-sm text-gray-500">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Section */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-purple-600 text-white p-4 flex items-center shadow-md">
          <img src={selectedChat.avatar} alt={selectedChat.name} className="w-10 h-10 rounded-full mr-3" />
          <h2 className="text-lg font-semibold">{selectedChat.name}</h2>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`p-3 max-w-xs rounded-lg text-white ${
                  msg.sender === "user" ? "bg-purple-500" : "bg-gray-500"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-3 bg-white shadow-md flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="ml-2 bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition" onClick={sendMessage}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
