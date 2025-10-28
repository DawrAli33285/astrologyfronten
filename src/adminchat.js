import React, { useState } from 'react';

const AdminChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: 'True Sky',
      avatar: '🌈',
      timestamp: 'thursday 22:33',
      content: '@No Teaching At All: the angles are correct. Please use the ticks, not the symbols to determine placements. In composite the mc can be on the bottom of the chart because it is overlaid over the first chart. Other points like asteroids and Mean positions are scheduled for a future update.'
    },
    {
      id: 2,
      user: 'True Sky',
      avatar: '🌈',
      timestamp: 'friday 14:37',
      content: "Hey everyone! We're looking for chat moderators that can engage with the community via chat and answer questions someone might have about the software.\n\nIf you are familiar with the software and its capabilities please reply back. As a moderator your account with have the moderator badge, be able to delete messages, and give software support"
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [currentUser] = useState({
    name: 'Muhammad Ali',
    avatar: 'M',
    color: 'bg-purple-600'
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const now = new Date();
      const timestamp = now.toLocaleString('en-US', { 
        weekday: 'long', 
        hour: '2-digit', 
        minute: '2-digit' 
      }).toLowerCase();
      
      setMessages([...messages, {
        id: messages.length + 1,
        user: currentUser.name,
        avatar: currentUser.avatar,
        timestamp: timestamp,
        content: newMessage,
        isCurrentUser: true
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm h-[calc(100vh-200px)] flex flex-col">
 
      <div className="border-b border-gray-200 p-4">
        <div className="flex gap-4 items-center">
          <button className="text-blue-600 hover:text-blue-700 font-medium">#hello</button>
          <button className="text-gray-600 hover:text-gray-700 font-medium">#help</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message) => (
          <div key={message.id} className="flex gap-3">
      
            <div className={`${message.isCurrentUser ? currentUser.color : 'bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400'} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
              {message.avatar}
            </div>
            
          
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900">{message.user}</span>
                {!message.isCurrentUser && (
                  <span className="w-4 h-4 text-purple-600">✓</span>
                )}
                <span className="text-xs text-gray-500">{message.timestamp}</span>
              </div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {message.content}
              </p>
            </div>

      
            {message.id === 1 && (
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>

      
      <div className="px-6 pb-2 flex justify-end">
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>


      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSendMessage} className="flex items-center gap-3">

          <div className={`${currentUser.color} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
            {currentUser.avatar}
          </div>
          
          <span className="font-semibold text-gray-900 text-sm">{currentUser.name}</span>

          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <button
            type="submit"
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg px-4 py-2 font-medium transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminChat;