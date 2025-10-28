import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AdminChart = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [animateType, setAnimateType] = useState('Animate');
  const [showDropdown, setShowDropdown] = useState(false);
  
  const [formData, setFormData] = useState({
    name: 'Today',
    day: '28',
    month: 'October',
    year: '2025',
    hour: '13',
    minute: '10',
    location: 'New York City, New York, United States'
  });
  
  const [searchQuery, setSearchQuery] = useState('');

  const planets = [
    { symbol: '☉', name: 'Sun', degree: 45, sign: 'Taurus', house: 2, color: '#FFD700', natal: true, progressed: true },
    { symbol: '☽', name: 'Moon', degree: 120, sign: 'Leo', house: 5, color: '#C0C0C0', natal: true, progressed: true },
    { symbol: '☿', name: 'Mercury', degree: 35, sign: 'Taurus', house: 2, color: '#808080', natal: true, progressed: true },
    { symbol: '♀', name: 'Venus', degree: 180, sign: 'Libra', house: 9, color: '#00FF00', natal: true, progressed: true },
    { symbol: '♂', name: 'Mars', degree: 270, sign: 'Capricorn', house: 12, color: '#FF0000', natal: true, progressed: true },
    { symbol: '♃', name: 'Jupiter', degree: 150, sign: 'Virgo', house: 7, color: '#FFA500', natal: true, progressed: true },
    { symbol: '♄', name: 'Saturn', degree: 300, sign: 'Aquarius', house: 1, color: '#4B0082', natal: true, progressed: true },
    { symbol: '♅', name: 'Uranus', degree: 90, sign: 'Cancer', house: 4, color: '#00CED1', natal: false, progressed: false },
    { symbol: '♆', name: 'Neptune', degree: 210, sign: 'Scorpio', house: 10, color: '#1E90FF', natal: true, progressed: true },
    { symbol: '♇', name: 'Pluto', degree: 240, sign: 'Sagittarius', house: 11, color: '#8B008B', natal: false, progressed: false },
  ];

  const aspects = [
    { from: 45, to: 180, color: '#FF0000', type: 'square' },
    { from: 120, to: 270, color: '#0000FF', type: 'trine' },
    { from: 45, to: 120, color: '#00FF00', type: 'sextile' },
    { from: 180, to: 300, color: '#800080', type: 'opposition' },
  ];

  const zodiacSigns = [
    { name: 'Aries', symbol: '♈', start: 0, color: '#FF6B6B' },
    { name: 'Taurus', symbol: '♉', start: 30, color: '#4ECDC4' },
    { name: 'Gemini', symbol: '♊', start: 60, color: '#FFE66D' },
    { name: 'Cancer', symbol: '♋', start: 90, color: '#95E1D3' },
    { name: 'Leo', symbol: '♌', start: 120, color: '#F38181' },
    { name: 'Virgo', symbol: '♍', start: 150, color: '#AA96DA' },
    { name: 'Libra', symbol: '♎', start: 180, color: '#FCBAD3' },
    { name: 'Scorpio', symbol: '♏', start: 210, color: '#A8D8EA' },
    { name: 'Sagittarius', symbol: '♐', start: 240, color: '#FFD93D' },
    { name: 'Capricorn', symbol: '♑', start: 270, color: '#6BCB77' },
    { name: 'Aquarius', symbol: '♒', start: 300, color: '#4D96FF' },
    { name: 'Pisces', symbol: '♓', start: 330, color: '#C8B6FF' },
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  const closeModal = () => {
    setSelectedPlanet(null);
  };

  const handlePrevious = () => {
    if (animateType === 'Year') {
      setFormData(prev => ({ ...prev, year: String(parseInt(prev.year) - 1) }));
    } else if (animateType === 'Month') {
      const currentIndex = months.indexOf(formData.month);
      const newIndex = currentIndex === 0 ? 11 : currentIndex - 1;
      setFormData(prev => ({ ...prev, month: months[newIndex] }));
    } else if (animateType === 'Day') {
      setFormData(prev => ({ ...prev, day: String(Math.max(1, parseInt(prev.day) - 1)) }));
    } else if (animateType === 'Hour') {
      setFormData(prev => ({ ...prev, hour: String((parseInt(prev.hour) - 1 + 24) % 24) }));
    } else if (animateType === 'Minute') {
      setFormData(prev => ({ ...prev, minute: String((parseInt(prev.minute) - 1 + 60) % 60).padStart(2, '0') }));
    }
  };

  const handleNext = () => {
    if (animateType === 'Year') {
      setFormData(prev => ({ ...prev, year: String(parseInt(prev.year) + 1) }));
    } else if (animateType === 'Month') {
      const currentIndex = months.indexOf(formData.month);
      const newIndex = currentIndex === 11 ? 0 : currentIndex + 1;
      setFormData(prev => ({ ...prev, month: months[newIndex] }));
    } else if (animateType === 'Day') {
      setFormData(prev => ({ ...prev, day: String(Math.min(31, parseInt(prev.day) + 1)) }));
    } else if (animateType === 'Hour') {
      setFormData(prev => ({ ...prev, hour: String((parseInt(prev.hour) + 1) % 24) }));
    } else if (animateType === 'Minute') {
      setFormData(prev => ({ ...prev, minute: String((parseInt(prev.minute) + 1) % 60).padStart(2, '0') }));
    }
  };

  const handleNow = () => {
    console.log('Now clicked');
  };

  const handleAnimateChange = (type) => {
    setAnimateType(type);
    setShowDropdown(false);
    console.log('Animate type:', type);
  };

  const handleCalculate = () => {
    console.log('Calculate clicked with data:', formData);
  };

  const handleView = () => {
    console.log('View clicked');
  };

  const handleSave = () => {
    console.log('Save clicked');
  };

  const handleViewReport = () => {
    console.log('View Report clicked');
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50">
  
      <div className="relative w-full max-w-2xl mx-auto mb-6" style={{ aspectRatio: '1/1' }}>
        <svg viewBox="0 0 600 600" className="w-full h-full">
          {zodiacSigns.map((sign, index) => {
            const startAngle = sign.start - 90;
            const endAngle = startAngle + 30;
            const path = describeArc(300, 300, 280, startAngle, endAngle);
            
            return (
              <g key={sign.name}>
                <path
                  d={path}
                  fill={sign.color}
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text
                  x={300 + Math.cos((startAngle + 15) * Math.PI / 180) * 290}
                  y={300 + Math.sin((startAngle + 15) * Math.PI / 180) * 290}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="20"
                  fontWeight="bold"
                >
                  {sign.symbol}
                </text>
              </g>
            );
          })}

          <circle cx="300" cy="300" r="260" fill="white" stroke="#ccc" strokeWidth="1" />
          {Array.from({ length: 360 }).map((_, degree) => {
            if (degree % 5 === 0) {
              const angle = degree - 90;
              const x1 = 300 + Math.cos(angle * Math.PI / 180) * 255;
              const y1 = 300 + Math.sin(angle * Math.PI / 180) * 255;
              const x2 = 300 + Math.cos(angle * Math.PI / 180) * (degree % 30 === 0 ? 245 : 250);
              const y2 = 300 + Math.sin(angle * Math.PI / 180) * (degree % 30 === 0 ? 245 : 250);
              
              return (
                <line
                  key={degree}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#666"
                  strokeWidth={degree % 30 === 0 ? "2" : "1"}
                />
              );
            }
            return null;
          })}

          <circle cx="300" cy="300" r="240" fill="white" stroke="#ccc" strokeWidth="2" />

          {aspects.map((aspect, index) => {
            const angle1 = aspect.from - 90;
            const angle2 = aspect.to - 90;
            const x1 = 300 + Math.cos(angle1 * Math.PI / 180) * 200;
            const y1 = 300 + Math.sin(angle1 * Math.PI / 180) * 200;
            const x2 = 300 + Math.cos(angle2 * Math.PI / 180) * 200;
            const y2 = 300 + Math.sin(angle2 * Math.PI / 180) * 200;

            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={aspect.color}
                strokeWidth="1"
                opacity="0.5"
              />
            );
          })}

          {Array.from({ length: 12 }).map((_, index) => {
            const angle = (index * 30) - 90;
            const x1 = 300 + Math.cos(angle * Math.PI / 180) * 240;
            const y1 = 300 + Math.sin(angle * Math.PI / 180) * 240;
            const x2 = 300 + Math.cos(angle * Math.PI / 180) * 100;
            const y2 = 300 + Math.sin(angle * Math.PI / 180) * 100;

            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#999"
                strokeWidth="1"
              />
            );
          })}

          {Array.from({ length: 12 }).map((_, index) => {
            const angle = (index * 30 + 15) - 90;
            const x = 300 + Math.cos(angle * Math.PI / 180) * 220;
            const y = 300 + Math.sin(angle * Math.PI / 180) * 220;

            return (
              <text
                key={index}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="14"
                fill="#666"
              >
                {index + 1}
              </text>
            );
          })}

          {planets.filter(p => p.natal || p.progressed).map((planet, index) => {
            const angle = planet.degree - 90;
            const radius = planet.natal ? 150 : 170;
            const x = 300 + Math.cos(angle * Math.PI / 180) * radius;
            const y = 300 + Math.sin(angle * Math.PI / 180) * radius;

            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="15"
                  fill="white"
                  stroke={planet.color}
                  strokeWidth="2"
                  className="cursor-pointer hover:opacity-80"
                  onClick={() => handlePlanetClick(planet)}
                />
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="18"
                  fill={planet.color}
                  className="cursor-pointer"
                  onClick={() => handlePlanetClick(planet)}
                >
                  {planet.symbol}
                </text>
              </g>
            );
          })}

          <g>
            <line x1="300" y1="300" x2="540" y2="300" stroke="#000" strokeWidth="3" />
            <text x="510" y="290" fontSize="16" fontWeight="bold">AS</text>
            <text x="505" y="310" fontSize="12">18° ♎ 45'</text>
          </g>

          <g>
            <line x1="300" y1="300" x2="300" y2="60" stroke="#000" strokeWidth="3" />
            <text x="285" y="75" fontSize="16" fontWeight="bold">MC</text>
            <text x="275" y="90" fontSize="12">13° ♋ 32'</text>
          </g>
        </svg>
      </div>

   
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={handlePrevious}
          className="p-2 border border-gray-300 rounded hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 flex items-center gap-2"
          >
            {animateType}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showDropdown && (
            <div className="absolute top-full mt-1 left-0 bg-white border border-gray-300 rounded shadow-lg z-10 w-full">
              <button
                onClick={() => handleAnimateChange('Animate')}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Animate
              </button>
              <button
                onClick={() => handleAnimateChange('Year')}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Year
              </button>
              <button
                onClick={() => handleAnimateChange('Month')}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Month
              </button>
              <button
                onClick={() => handleAnimateChange('Day')}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Day
              </button>
              <button
                onClick={() => handleAnimateChange('Hour')}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Hour
              </button>
              <button
                onClick={() => handleAnimateChange('Minute')}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Minute
              </button>
            </div>
          )}
        </div>

        <button
          onClick={handleNow}
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
        >
          Now
        </button>

        <button
          onClick={handleNext}
          className="p-2 border border-gray-300 rounded hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>

 
      <div className="bg-white rounded-lg shadow-sm p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">MAIN WHEEL</h2>

        <div className="space-y-4">
       
          <div className="flex items-center gap-4">
            <label className="w-48 text-right font-medium">Name:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleFormChange('name', e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>

     
          <div className="flex items-center gap-4">
            <label className="w-48 text-right font-medium">Date (dd-month-yyyy):</label>
            <div className="flex-1 flex gap-2">
              <input
                type="text"
                value={formData.day}
                onChange={(e) => handleFormChange('day', e.target.value)}
                className="w-16 border border-gray-300 rounded px-3 py-2 text-center"
                placeholder="28"
              />
              <select
                value={formData.month}
                onChange={(e) => handleFormChange('month', e.target.value)}
                className="flex-1 border border-gray-300 rounded px-3 py-2"
              >
                {months.map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <input
                type="text"
                value={formData.year}
                onChange={(e) => handleFormChange('year', e.target.value)}
                className="w-20 border border-gray-300 rounded px-3 py-2 text-center"
                placeholder="2025"
              />
            </div>
          </div>

        
          <div className="flex items-center gap-4">
            <label className="w-48 text-right font-medium">Time (hh-mm):</label>
            <div className="flex-1 flex items-center gap-2">
              <input
                type="text"
                value={formData.hour}
                onChange={(e) => handleFormChange('hour', e.target.value)}
                className="w-16 border border-gray-300 rounded px-3 py-2 text-center"
                placeholder="13"
              />
              <span>:</span>
              <input
                type="text"
                value={formData.minute}
                onChange={(e) => handleFormChange('minute', e.target.value)}
                className="w-16 border border-gray-300 rounded px-3 py-2 text-center"
                placeholder="10"
              />
              <span className="text-sm text-gray-600">(24-hour clock)</span>
            </div>
          </div>

      
          <div className="flex items-center gap-4">
            <label className="w-48 text-right font-medium">Location (city, region, country):</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleFormChange('location', e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-2"
              placeholder="New York City, New York, United States"
            />
          </div>

         
          <div className="flex justify-center pt-2">
            <button
              onClick={handleCalculate}
              className="w-full bg-purple-100 hover:bg-purple-200 text-gray-800 font-medium py-3 rounded transition-colors"
            >
              Calculate
            </button>
          </div>

    
          <div className="flex justify-center">
            <button
              onClick={handleView}
              className="w-full bg-purple-100 hover:bg-purple-200 text-gray-800 font-medium py-3 rounded transition-colors"
            >
              View
            </button>
          </div>

      
          <div className="flex justify-center">
            <button
              onClick={handleSave}
              className="w-full bg-purple-100 hover:bg-purple-200 text-gray-800 font-medium py-3 rounded transition-colors"
            >
              Save ⌘
            </button>
          </div>

     
          <div className="border border-gray-300 rounded h-32 bg-white"></div>

       
          <div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

    
          <div className="flex justify-center">
            <button
              onClick={handleViewReport}
              className="w-full bg-purple-100 hover:bg-purple-200 text-gray-800 font-medium py-3 rounded transition-colors"
            >
              View Report ⌘
            </button>
          </div>
        </div>
      </div>

  
      {selectedPlanet && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl" style={{ color: selectedPlanet.color }}>
                {selectedPlanet.symbol}
              </span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{selectedPlanet.name}</h3>
                <p className="text-lg mb-4">
                  {selectedPlanet.degree}° {selectedPlanet.sign} {Math.floor(selectedPlanet.degree % 30)}'
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  {selectedPlanet.name} in {selectedPlanet.sign}:
                </h4>
                <p className="text-gray-700">
                  Your {selectedPlanet.name} in {selectedPlanet.sign} makes you romantic, charming, and partnership-oriented. You value harmony and balance in relationships. Your love is graceful and diplomatic.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">
                  {selectedPlanet.name} in House {selectedPlanet.house}:
                </h4>
                <p className="text-gray-700">
                  {selectedPlanet.name} in your {selectedPlanet.house}th house draws you to adventure, foreign cultures, and philosophical exploration. You're attracted to people and ideas that expand your worldview. Travel, learning, and freedom enhance your relationships and sense of beauty.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const outerRadius = radius;
  const innerRadius = radius - 30;

  const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
  const endOuter = polarToCartesian(x, y, outerRadius, startAngle);
  const startInner = polarToCartesian(x, y, innerRadius, endAngle);
  const endInner = polarToCartesian(x, y, innerRadius, startAngle);

  return [
    "M", startOuter.x, startOuter.y,
    "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
    "L", endInner.x, endInner.y,
    "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
    "Z"
  ].join(" ");
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

export default AdminChart;