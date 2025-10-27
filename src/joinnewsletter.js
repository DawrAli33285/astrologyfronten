import React, { useState } from 'react';

export default function JoinNewsletterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for joining MTZ Insiders!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
      
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-3xl font-bold">MTZ</div>
              <div className="text-sm">Insiders</div>
            </div>
          </div>
        </div>

  
        <div className="text-center mb-8">
          <h1 className="text-[26px] md:text-[30px] font-bold text-gray-800 mb-6 leading-tight">
            Join the MTZ Insiders community to<br className="hidden sm:block" />
            stay up to date with true sidereal<br className="hidden sm:block" />
            astrology.
          </h1>

          <p className="text-gray-600 mb-4">
            Astrology updates, the latest trends, web discounts,<br className="hidden sm:block" />
            community events, and more.
          </p>

          <p className="text-gray-600 mb-2">
            Delivered to your email every Sunday.
          </p>
          <p className="text-gray-600">
            Absolutely free.
          </p>
        </div>


        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <label htmlFor="firstName" className="block text-left text-gray-700 mb-2">
              First Name (or nickname)<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-left text-gray-700 mb-2">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <p className="text-sm text-gray-600 text-center mb-6">
            Please check your email to confirm your subscription.
          </p>

          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded transition-colors"
            >
              JOIN MTZ INSIDERS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}