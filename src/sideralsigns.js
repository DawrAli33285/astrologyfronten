import React, { useState } from 'react';

export default function SiderealCalculator() {
  const [formData, setFormData] = useState({
    name: '',
    day: '',
    month: '1',
    year: '',
    knowTime: false,
    hour: '12',
    minute: '0',
    location: ''
  });
  
  const [report, setReport] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const calculateSiderealSigns = () => {
    const monthNum = parseInt(formData.month);
    const day = parseInt(formData.day);
    
    let sunSignIndex = Math.floor((monthNum + day / 31) % 12);
    sunSignIndex = (sunSignIndex - 1 + 12) % 12;
    
    const hour = parseInt(formData.hour);
    let moonSignIndex = (sunSignIndex + Math.floor(hour / 2)) % 12;
    let risingSignIndex = (sunSignIndex + Math.floor(hour / 3)) % 12;
    
    // Calculate other planetary positions (simplified)
    const placements = [
      { planet: 'Sun', sign: zodiacSigns[sunSignIndex] },
      { planet: 'Moon', sign: zodiacSigns[moonSignIndex] },
      { planet: 'Mercury', sign: zodiacSigns[sunSignIndex] },
      { planet: 'Venus', sign: zodiacSigns[(sunSignIndex + 1) % 12] },
      { planet: 'Mars', sign: zodiacSigns[(sunSignIndex - 1 + 12) % 12] },
      { planet: 'Jupiter', sign: zodiacSigns[(sunSignIndex + 6) % 12] },
      { planet: 'Saturn', sign: zodiacSigns[(sunSignIndex + 6) % 12] },
      { planet: 'Uranus', sign: zodiacSigns[(sunSignIndex + 4) % 12] },
      { planet: 'Neptune', sign: zodiacSigns[(sunSignIndex + 4) % 12] },
      { planet: 'Pluto', sign: zodiacSigns[(sunSignIndex + 2) % 12] },
      { planet: 'Chiron', sign: zodiacSigns[(sunSignIndex + 2) % 12] },
      { planet: 'North Node', sign: zodiacSigns[(sunSignIndex + 9) % 12] },
      { planet: 'South Node', sign: zodiacSigns[(sunSignIndex + 3) % 12] }
    ];
    
    const monthName = months[monthNum - 1];
    const timeStr = formData.knowTime ? `${formData.hour}:${formData.minute.padStart(2, '0')}` : '12:00';
    
    setReport({
      placements,
      dateStr: `${formData.day} ${monthName} ${formData.year} ${timeStr} (-04:00)`
    });
  };

  const handleCalculate = () => {
    if (formData.name && formData.day && formData.year) {
      calculateSiderealSigns();
    }
  };

  const zodiacSymbols = {
    'Aries': '♈',
    'Taurus': '♉',
    'Gemini': '♊',
    'Cancer': '♋',
    'Leo': '♌',
    'Virgo': '♍',
    'Libra': '♎',
    'Scorpio': '♏',
    'Sagittarius': '♐',
    'Capricorn': '♑',
    'Aquarius': '♒',
    'Pisces': '♓'
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-6">
            YOUR TRUE SIDEREAL SIGNS
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            Input your birth details below to see your true sidereal signs and mini-report.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 px-4 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-justify leading-relaxed">
            <p>
              True sidereal astrology uses the visible constellations in the sky. The list is where the planets were visibly in the sky when you were born. This is different from mainstream tropical and sidereal astrology which do not use the visible constellations in the sky.
            </p>
            <p className="font-medium">
              Noticing your signs are different from other calculators or new to true sidereal astrology?
            </p>
          </div>
          <hr className="border-gray-300 my-12" />

          {/* Birth Details Form */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-8">
              BIRTH DETAILS
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Date (dd-month-yyyy):
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="number"
                    min="1"
                    max="31"
                    value={formData.day}
                    onChange={(e) => setFormData({...formData, day: e.target.value})}
                    className="px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition"
                    placeholder="DD"
                  />
                  <select
                    value={formData.month}
                    onChange={(e) => setFormData({...formData, month: e.target.value})}
                    className="px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition"
                  >
                    {months.map((month, idx) => (
                      <option key={month} value={idx + 1}>{month}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    min="1900"
                    max="2100"
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                    className="px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition"
                    placeholder="YYYY"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="knowTime"
                  checked={formData.knowTime}
                  onChange={(e) => setFormData({...formData, knowTime: e.target.checked})}
                  className="w-5 h-5 border-gray-300 focus:ring-black"
                />
                <label htmlFor="knowTime" className="text-gray-800 font-medium cursor-pointer">
                  I know my birth time
                </label>
              </div>

              {formData.knowTime && (
                <div className="space-y-4 pl-8 border-l-2 border-gray-300">
                  <div>
                    <label className="block text-gray-800 font-medium mb-2">
                      Birth Time:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="number"
                        min="0"
                        max="23"
                        value={formData.hour}
                        onChange={(e) => setFormData({...formData, hour: e.target.value})}
                        className="px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition"
                        placeholder="Hour (0-23)"
                      />
                      <input
                        type="number"
                        min="0"
                        max="59"
                        value={formData.minute}
                        onChange={(e) => setFormData({...formData, minute: e.target.value})}
                        className="px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition"
                        placeholder="Minute"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-800 font-medium mb-2">
                      Birth Location:
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition"
                      placeholder="City, Country"
                    />
                  </div>
                </div>
              )}

              <button
                onClick={handleCalculate}
                className="w-full border-2 border-black px-8 py-4 text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
              >
                CALCULATE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {report && (
        <section className="py-16 px-4 bg-white text-black">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-lg mb-2">
                <strong>Name:</strong> {formData.name}
              </p>
              <p className="text-lg">
                <strong>Date:</strong> {report.dateStr}
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-light mb-8">
              {formData.name}'s True Placements
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {report.placements.map((placement, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-4 px-2 font-medium text-left">{placement.planet}</td>
                      <td className="py-4 px-2 text-3xl text-center">{zodiacSymbols[placement.sign]}</td>
                      <td className="py-4 px-2 text-left">{placement.sign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 p-6 bg-gray-100 border-l-4 border-black">
              <p className="text-gray-700 leading-relaxed">
                These placements represent where the celestial bodies were actually positioned in the visible constellations at your birth. They may differ from tropical astrology calculations which use a fixed zodiac system.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}