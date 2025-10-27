import React from 'react';

const AstrologyPlacements = () => {

  const placements = [
    { symbol: '♈', name: 'Ascendant', sign: 'Pisces', signColor: 'text-blue-400', house: null },
    { symbol: '☉', name: 'Sun', sign: 'Sagittarius', signColor: 'text-purple-500', house: '9th House' },
    { symbol: '☽', name: 'Moon', sign: 'Aquarius', signColor: 'text-pink-500', house: '11th House' },
    { symbol: '☿', name: 'Mercury', sign: 'Sagittarius', signColor: 'text-purple-500', house: '10th House' },
    { symbol: '♀', name: 'Venus', sign: 'Capricorn', signColor: 'text-purple-600', house: '10th House' },
    { symbol: '♂', name: 'Mars', sign: 'Sagittarius', signColor: 'text-purple-500', house: '10th House' },
    { symbol: '♃', name: 'Jupiter', sign: 'Sagittarius', signColor: 'text-purple-500', house: '9th House' },
    { symbol: '♄', name: 'Saturn', sign: 'Aquarius', signColor: 'text-pink-500', house: '12th House' },
    { symbol: '♅', name: 'Uranus', sign: 'Sagittarius', signColor: 'text-purple-500', house: '10th House' },
    { symbol: '♆', name: 'Neptune', sign: 'Sagittarius', signColor: 'text-purple-500', house: '10th House' },
    { symbol: '♇', name: 'Pluto', sign: 'Scorpio', signColor: 'text-cyan-400', house: '8th House' },
    { symbol: '⚷', name: 'Chiron', sign: 'Virgo', signColor: 'text-teal-400', house: '7th House' },
    { symbol: '☊', name: 'North Node', sign: 'Virgo', signColor: 'text-teal-400', house: '7th House' },
    { symbol: '☋', name: 'South Node', sign: 'Pisces', signColor: 'text-blue-400', house: '1st House' },
    { symbol: 'MC', name: 'Midheaven', sign: 'Sagittarius', signColor: 'text-purple-500', house: '9th House' },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-[26px] md:text-[30px] font-light text-center mb-16">
          TESTPROFIL'S PLACEMENTS
        </h1>

        <div className="space-y-2">
          {placements.map((placement, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-lg p-4 border border-gray-200"
            >
              <div className="md:flex md:items-center">
                <div className="flex items-center gap-4 md:flex-1">
                  <span className="text-2xl w-8 text-center text-gray-700">
                    {placement.symbol}
                  </span>
                  <span className="text-gray-800 font-medium md:w-28">
                    {placement.name}
                  </span>
                  <span className={`font-bold text-lg ${placement.signColor} hidden md:inline`}>
                    {placement.sign}
                  </span>
                </div>
                <div className="md:hidden mt-2 ml-12">
                  <div className={`font-bold text-lg ${placement.signColor}`}>
                    {placement.sign}
                  </div>
                  {placement.house && (
                    <div className="text-gray-600 text-sm mt-1">
                      {placement.house}
                    </div>
                  )}
                </div>
                {placement.house && (
                  <span className="text-gray-600 text-sm hidden md:inline">
                    {placement.house}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AstrologyPlacements;