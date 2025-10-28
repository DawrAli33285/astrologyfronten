import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SynastryWheel = () => {
  const [person1Data, setPerson1Data] = useState({
    name: 'Muhammad Ali',
    day: '28',
    month: 'February',
    year: '1995',
    hour: '13',
    minute: '03',
    location: 'Pakistan'
  });

  const [person2Data, setPerson2Data] = useState({
    name: 'Person 2',
    day: '15',
    month: 'June',
    year: '1992',
    hour: '10',
    minute: '30',
    location: 'Pakistan'
  });

  const [animateType, setAnimateType] = useState('Animate');
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

 
  const planetSymbols = {
    Sun: { symbol: '☉', color: '#FFD700' },
    Moon: { symbol: '☽', color: '#C0C0C0' },
    Mercury: { symbol: '☿', color: '#808080' },
    Venus: { symbol: '♀', color: '#00FF00' },
    Mars: { symbol: '♂', color: '#FF0000' },
    Jupiter: { symbol: '♃', color: '#FFA500' },
    Saturn: { symbol: '♄', color: '#4B0082' },
    Uranus: { symbol: '♅', color: '#00CED1' },
    Neptune: { symbol: '♆', color: '#1E90FF' },
    Pluto: { symbol: '♇', color: '#8B008B' }
  };


  const person1Planets = [
    { name: 'Sun', degree: 338, house: 10 },
    { name: 'Moon', degree: 350, house: 11 },
    { name: 'Mercury', degree: 320, house: 9 },
    { name: 'Venus', degree: 355, house: 11 },
    { name: 'Mars', degree: 2, house: 11 },
    { name: 'Jupiter', degree: 45, house: 1 },
    { name: 'Saturn', degree: 315, house: 9 },
    { name: 'Uranus', degree: 305, house: 9 },
    { name: 'Neptune', degree: 300, house: 9 },
    { name: 'Pluto', degree: 235, house: 6 }
  ];

 
  const person2Planets = [
    { name: 'Mars', degree: 2, house: 11 },
    { name: 'Chiron', degree: 225, house: 6 },
    { name: 'Saturn', degree: 230, house: 6 },
    { name: 'Pluto', degree: 235, house: 6 },
    { name: 'Neptune', degree: 240, house: 6 }
  ];

 
  const zodiacSigns = [
    { name: 'Aries', symbol: '♈', start: 0, color: '#FF6B6B' },
    { name: 'Taurus', symbol: '♉', start: 30, color: '#FF8C42' },
    { name: 'Gemini', symbol: '♊', start: 60, color: '#FFD93D' },
    { name: 'Cancer', symbol: '♋', start: 90, color: '#A8E6CF' },
    { name: 'Leo', symbol: '♌', start: 120, color: '#6BCB77' },
    { name: 'Virgo', symbol: '♍', start: 150, color: '#4D96FF' },
    { name: 'Libra', symbol: '♎', start: 180, color: '#6A67CE' },
    { name: 'Scorpio', symbol: '♏', start: 210, color: '#9B59B6' },
    { name: 'Sagittarius', symbol: '♐', start: 240, color: '#E91E63' },
    { name: 'Capricorn', symbol: '♑', start: 270, color: '#FF6B9D' },
    { name: 'Aquarius', symbol: '♒', start: 300, color: '#C8B6FF' },
    { name: 'Pisces', symbol: '♓', start: 330, color: '#BB8FCE' }
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleCalculate = () => {
    console.log('Calculate synastry with:', person1Data, person2Data);

  };

  const handleSwap = () => {
    const temp = person1Data;
    setPerson1Data(person2Data);
    setPerson2Data(temp);
  };

  const handleFormChange = (person, field, value) => {
    if (person === 1) {
      setPerson1Data(prev => ({ ...prev, [field]: value }));
    } else {
      setPerson2Data(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-">

      <div className="relative w-full max-w-2xl mx-auto mb-6" style={{ aspectRatio: '1/1' }}>
        <svg viewBox="0 0 600 600" className="w-full h-full">
 
          {zodiacSigns.map((sign) => {
            const startAngle = sign.start - 90;
            const endAngle = startAngle + 30;
            const path = describeArc(300, 300, 290, startAngle, endAngle);
            
            return (
              <g key={sign.name}>
                <path
                  d={path}
                  fill={sign.color}
                  stroke="#fff"
                  strokeWidth="1"
                />
                <text
                  x={300 + Math.cos((startAngle + 15) * Math.PI / 180) * 295}
                  y={300 + Math.sin((startAngle + 15) * Math.PI / 180) * 295}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="18"
                  fontWeight="bold"
                  fill="#333"
                >
                  {sign.symbol}
                </text>
              </g>
            );
          })}


          {Array.from({ length: 360 }).map((_, degree) => {
            if (degree % 1 === 0) {
              const angle = degree - 90;
              const isMajor = degree % 5 === 0;
              const isZodiacBoundary = degree % 30 === 0;
              const x1 = 300 + Math.cos(angle * Math.PI / 180) * 270;
              const y1 = 300 + Math.sin(angle * Math.PI / 180) * 270;
              const x2 = 300 + Math.cos(angle * Math.PI / 180) * (isZodiacBoundary ? 260 : isMajor ? 265 : 268);
              const y2 = 300 + Math.sin(angle * Math.PI / 180) * (isZodiacBoundary ? 260 : isMajor ? 265 : 268);
              
              return (
                <line
                  key={degree}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#333"
                  strokeWidth={isZodiacBoundary ? "2" : isMajor ? "1" : "0.5"}
                />
              );
            }
            return null;
          })}

        
          <circle cx="300" cy="300" r="258" fill="white" stroke="#ccc" strokeWidth="1" />
          
        
          {Array.from({ length: 360 }).map((_, degree) => {
            if (degree % 1 === 0) {
              const angle = degree - 90;
              const isMajor = degree % 5 === 0;
              const isZodiacBoundary = degree % 30 === 0;
              const x1 = 300 + Math.cos(angle * Math.PI / 180) * 258;
              const y1 = 300 + Math.sin(angle * Math.PI / 180) * 258;
              const x2 = 300 + Math.cos(angle * Math.PI / 180) * (isZodiacBoundary ? 235 : isMajor ? 250 : 254);
              const y2 = 300 + Math.sin(angle * Math.PI / 180) * (isZodiacBoundary ? 235 : isMajor ? 250 : 254);
              
              return (
                <line
                  key={`middle-${degree}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#666"
                  strokeWidth={isZodiacBoundary ? "2" : isMajor ? "1" : "0.5"}
                />
              );
            }
            return null;
          })}

      
          {person2Planets.map((planet, index) => {
            const angle = planet.degree - 90;
            const radius = 247;
            const x = 300 + Math.cos(angle * Math.PI / 180) * radius;
            const y = 300 + Math.sin(angle * Math.PI / 180) * radius;
            const planetInfo = planetSymbols[planet.name] || { symbol: '?', color: '#000' };

            return (
              <g key={`p2-${planet.name}-${index}`}>
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16"
                  fill={planetInfo.color}
                  fontWeight="bold"
                >
                  {planetInfo.symbol}
                </text>
                <text
                  x={x + 10}
                  y={y - 8}
                  textAnchor="start"
                  dominantBaseline="middle"
                  fontSize="10"
                  fill="#FF0000"
                  fontWeight="bold"
                >
                  R
                </text>
              </g>
            );
          })}

       
          <circle cx="300" cy="300" r="230" fill="white" stroke="#ccc" strokeWidth="2" />


          {Array.from({ length: 12 }).map((_, index) => {
            const angle = (index * 30) - 90;
            const x1 = 300 + Math.cos(angle * Math.PI / 180) * 230;
            const y1 = 300 + Math.sin(angle * Math.PI / 180) * 230;
            const x2 = 300 + Math.cos(angle * Math.PI / 180) * 80;
            const y2 = 300 + Math.sin(angle * Math.PI / 180) * 80;

            return (
              <line
                key={`house-${index}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#999"
                strokeWidth="1"
              />
            );
          })}

          {zodiacSigns.map((sign, index) => {
            const angle = (sign.start + 15) - 90;
            const radius = 155;
            const x = 300 + Math.cos(angle * Math.PI / 180) * radius;
            const y = 300 + Math.sin(angle * Math.PI / 180) * radius;

          
            const startAngle = sign.start - 90;
            const endAngle = startAngle + 30;
            const housePath = describeArc(300, 300, 230, startAngle, endAngle, 80);

            return (
              <g key={`house-segment-${index}`}>
                <path
                  d={housePath}
                  fill={sign.color}
                  fillOpacity="0.3"
                  stroke="none"
                />
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16"
                  fill="#333"
                  fontWeight="bold"
                >
                  {index + 1}
                </text>
              </g>
            );
          })}

          {person1Planets.map((planet, index) => {
            const angle = planet.degree - 90;
            const radius = 205;
            const x = 300 + Math.cos(angle * Math.PI / 180) * radius;
            const y = 300 + Math.sin(angle * Math.PI / 180) * radius;
            const planetInfo = planetSymbols[planet.name] || { symbol: '?', color: '#000' };

            return (
              <text
                key={`p1-${planet.name}`}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fill={planetInfo.color}
                fontWeight="bold"
              >
                {planetInfo.symbol}
              </text>
            );
          })}

          <circle cx="300" cy="300" r="75" fill="white" stroke="#ccc" strokeWidth="2" />

          <line x1="300" y1="300" x2="525" y2="300" stroke="#000" strokeWidth="3" />
          <text x="475" y="285" fontSize="20" fontWeight="bold">AS</text>

          <line x1="300" y1="300" x2="300" y2="75" stroke="#000" strokeWidth="3" />
          <text x="275" y="95" fontSize="20" fontWeight="bold">MC</text>
        </svg>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={handleSwap}
          className="px-8 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 text-gray-700 font-medium"
        >
          Swap
        </button>
      </div>

     
      <div className="bg-white rounded-lg  lg:p-6 lg:max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">SYNASTRY WHEEL</h2>

        <div className="space-y-6">
         
          <div className="space-y-4 pb-6 border-b border-gray-200">
            <h3 className="font-semibold text-lg">Person 1</h3>
            
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <label className="w-48 md:text-right font-medium">Name:</label>
              <input
                type="text"
                value={person1Data.name}
                onChange={(e) => handleFormChange(1, 'name', e.target.value)}
                className="flex-1 border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div className="flex items-center gap-4 flex-col md:flex-row">
              <label className="w-48 md:text-right font-medium">Date (dd-month-yyyy):</label>
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value={person1Data.day}
                  onChange={(e) => handleFormChange(1, 'day', e.target.value)}
                  className="w-16 border border-gray-300 rounded px-3 py-2 text-center"
                />
                <select
                  value={person1Data.month}
                  onChange={(e) => handleFormChange(1, 'month', e.target.value)}
                  className="flex-1 border border-gray-300 rounded px-3 py-2"
                >
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <input
                  type="text"
                  value={person1Data.year}
                  onChange={(e) => handleFormChange(1, 'year', e.target.value)}
                  className="w-20 border border-gray-300 rounded px-3 py-2 text-center"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 flex-col md:flex-row">
              <label className="w-48 md:text-right font-medium">Time (hh-mm):</label>
              <div className="flex-1 flex items-center gap-2">
                <input
                  type="text"
                  value={person1Data.hour}
                  onChange={(e) => handleFormChange(1, 'hour', e.target.value)}
                  className="w-16 border border-gray-300 rounded px-3 py-2 text-center"
                />
                <span>:</span>
                <input
                  type="text"
                  value={person1Data.minute}
                  onChange={(e) => handleFormChange(1, 'minute', e.target.value)}
                  className="w-16 border border-gray-300 rounded px-3 py-2 text-center"
                />
                <span className="text-sm text-gray-600">(24-hour clock)</span>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-col md:flex-row">
              <label className="w-48 md:text-right font-medium">Location (city, region, country):</label>
              <input
                type="text"
                value={person1Data.location}
                onChange={(e) => handleFormChange(1, 'location', e.target.value)}
                className="flex-1 border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

        
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Person 2</h3>
            
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <label className="w-48 md:text-right font-medium">Name:</label>
              <input
                type="text"
                value={person2Data.name}
                onChange={(e) => handleFormChange(2, 'name', e.target.value)}
                className="flex-1 border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div className="flex items-center gap-4 flex-col md:flex-row">
              <label className="w-48 md:text-right font-medium">Date (dd-month-yyyy):</label>
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value={person2Data.day}
                  onChange={(e) => handleFormChange(2, 'day', e.target.value)}
                  className="w-16 border border-gray-300 rounded px-3 py-2 text-center"
                />
                <select
                  value={person2Data.month}
                  onChange={(e) => handleFormChange(2, 'month', e.target.value)}
                  className="flex-1 border border-gray-300 rounded px-3 py-2"
                >
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <input
                  type="text"
                  value={person2Data.year}
                  onChange={(e) => handleFormChange(2, 'year', e.target.value)}
                  className="w-20 border border-gray-300 rounded px-3 py-2 text-center"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 flex-col md:flex-row">
              <label className="w-48 md:text-right font-medium">Time (hh-mm):</label>
              <div className="flex-1 flex items-center gap-2">
                <input
                  type="text"
                  value={person2Data.hour}
                  onChange={(e) => handleFormChange(2, 'hour', e.target.value)}
                  className="w-16 border border-gray-300 rounded px-3 py-2 text-center"
                />
                <span>:</span>
                <input
                  type="text"
                  value={person2Data.minute}
                  onChange={(e) => handleFormChange(2, 'minute', e.target.value)}
                  className="w-16 border border-gray-300 rounded px-3 py-2 text-center"
                />
                <span className="text-sm text-gray-600">(24-hour clock)</span>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-col md:flex-row">
              <label className="w-48 md:text-right font-medium">Location (city, region, country):</label>
              <input
                type="text"
                value={person2Data.location}
                onChange={(e) => handleFormChange(2, 'location', e.target.value)}
                className="flex-1 border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

        
          <div className="space-y-3 pt-4">
            <button
              onClick={handleCalculate}
              className="w-full bg-purple-100 hover:bg-purple-200 text-gray-800 font-medium py-3 rounded transition-colors"
            >
              Calculate
            </button>

            <button
              className="w-full bg-purple-100 hover:bg-purple-200 text-gray-800 font-medium py-3 rounded transition-colors"
            >
              View
            </button>

            <button
              className="w-full bg-purple-100 hover:bg-purple-200 text-gray-800 font-medium py-3 rounded transition-colors"
            >
              Save 🔒
            </button>

           
            <div className="border border-gray-300 rounded h-32 bg-white"></div>

        
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full border border-gray-300 rounded px-3 py-2"
            />

            <button
              className="w-full bg-purple-100 hover:bg-purple-200 text-gray-800 font-medium py-3 rounded transition-colors"
            >
              View Report 🔒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function describeArc(x, y, radius, startAngle, endAngle, innerRadius = null) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  if (innerRadius !== null) {
    const startInner = polarToCartesian(x, y, innerRadius, endAngle);
    const endInner = polarToCartesian(x, y, innerRadius, startAngle);

    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "L", endInner.x, endInner.y,
      "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
      "Z"
    ].join(" ");
  }

  const outerRadius = radius;
  const innerRadiusCalc = radius - 20;

  const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
  const endOuter = polarToCartesian(x, y, outerRadius, startAngle);
  const startInner = polarToCartesian(x, y, innerRadiusCalc, endAngle);
  const endInner = polarToCartesian(x, y, innerRadiusCalc, startAngle);

  return [
    "M", startOuter.x, startOuter.y,
    "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
    "L", endInner.x, endInner.y,
    "A", innerRadiusCalc, innerRadiusCalc, 0, largeArcFlag, 1, startInner.x, startInner.y,
    "Z"
  ].join(" ");
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = angleInDegrees * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

export default SynastryWheel;