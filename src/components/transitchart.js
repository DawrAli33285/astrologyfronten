import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TransitChart = () => {
  const [animateType, setAnimateType] = useState('Animate');
  const [showDropdown, setShowDropdown] = useState(false);
  
  const [formData, setFormData] = useState({
    day: '28',
    month: 'October',
    year: '2025',
    hour: '13',
    minute: '10',
    location: 'New York City, New York'
  });

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
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

  const natalPlanets = [
    { symbol: '☉', degree: 210, color: '#FFD700' },
    { symbol: '☽', degree: 30, color: '#C0C0C0' },
    { symbol: '♀', degree: 220, color: '#00FF00' },
    { symbol: '♂', degree: 225, color: '#FF0000' },
  ];

  const progressedPlanets = [
    { symbol: '☉', degree: 215, color: '#FFD700' },
    { symbol: '☽', degree: 280, color: '#C0C0C0' },
    { symbol: '♀', degree: 230, color: '#00FF00' },
  ];

  const transitPlanets = [
    { symbol: '☉', degree: 35, color: '#FFD700' },
    { symbol: '♀', degree: 40, color: '#00FF00' },
    { symbol: '☽', degree: 55, color: '#C0C0C0' },
    { symbol: '♅', degree: 50, color: '#00CED1' },
  ];

  const aspects = [
    { from: 210, to: 35, color: '#FF0000' },
    { from: 30, to: 280, color: '#0000FF' },
    { from: 220, to: 40, color: '#00FF00' },
  ];

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
  };

  const handleCalculate = () => {
    console.log('Calculate clicked');
  };

  const handleView = () => {
    console.log('View clicked');
  };

  const handleViewReport = () => {
    console.log('View Report clicked');
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50">
      <div className="relative w-full max-w-3xl mx-auto mb-6" style={{ aspectRatio: '1/1' }}>
        <svg viewBox="0 0 800 800" className="w-full h-full">
          {zodiacSigns.map((sign) => {
            const startAngle = sign.start - 90;
            const endAngle = startAngle + 30;
            const path = describeArc(400, 400, 390, startAngle, endAngle);
            
            return (
              <g key={sign.name}>
                <path
                  d={path}
                  fill={sign.color}
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text
                  x={400 + Math.cos((startAngle + 15) * Math.PI / 180) * 375}
                  y={400 + Math.sin((startAngle + 15) * Math.PI / 180) * 375}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="20"
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
              const isLongTick = degree % 5 === 0;
              const x1 = 400 + Math.cos(angle * Math.PI / 180) * 360;
              const y1 = 400 + Math.sin(angle * Math.PI / 180) * 360;
              const x2 = 400 + Math.cos(angle * Math.PI / 180) * (isLongTick ? 350 : 357);
              const y2 = 400 + Math.sin(angle * Math.PI / 180) * (isLongTick ? 350 : 357);
              
              return (
                <line
                  key={degree}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#333"
                  strokeWidth={isLongTick ? "1.5" : "0.5"}
                />
              );
            }
            return null;
          })}

          <circle cx="400" cy="400" r="350" fill="none" stroke="#333" strokeWidth="2" />

          {zodiacSigns.map((sign) => {
            const startAngle = sign.start - 90;
            const endAngle = startAngle + 30;
            const path = describeArc(400, 400, 350, startAngle, endAngle, 300);
            
            return (
              <g key={`prog-${sign.name}`}>
                <path
                  d={path}
                  fill={sign.color}
                  stroke="#fff"
                  strokeWidth="2"
                  opacity="0.8"
                />
                <text
                  x={400 + Math.cos((startAngle + 15) * Math.PI / 180) * 325}
                  y={400 + Math.sin((startAngle + 15) * Math.PI / 180) * 325}
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
              const isLongTick = degree % 5 === 0;
              const x1 = 400 + Math.cos(angle * Math.PI / 180) * 300;
              const y1 = 400 + Math.sin(angle * Math.PI / 180) * 300;
              const x2 = 400 + Math.cos(angle * Math.PI / 180) * (isLongTick ? 290 : 297);
              const y2 = 400 + Math.sin(angle * Math.PI / 180) * (isLongTick ? 290 : 297);
              
              return (
                <line
                  key={`prog-${degree}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#333"
                  strokeWidth={isLongTick ? "1.5" : "0.5"}
                />
              );
            }
            return null;
          })}

          <circle cx="400" cy="400" r="290" fill="none" stroke="#333" strokeWidth="2" />

          {zodiacSigns.map((sign) => {
            const startAngle = sign.start - 90;
            const endAngle = startAngle + 30;
            const path = describeArc(400, 400, 290, startAngle, endAngle, 240);
            
            return (
              <g key={`sec-${sign.name}`}>
                <path
                  d={path}
                  fill={sign.color}
                  stroke="#fff"
                  strokeWidth="2"
                  opacity="0.7"
                />
                <text
                  x={400 + Math.cos((startAngle + 15) * Math.PI / 180) * 265}
                  y={400 + Math.sin((startAngle + 15) * Math.PI / 180) * 265}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16"
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
              const isLongTick = degree % 5 === 0;
              const x1 = 400 + Math.cos(angle * Math.PI / 180) * 240;
              const y1 = 400 + Math.sin(angle * Math.PI / 180) * 240;
              const x2 = 400 + Math.cos(angle * Math.PI / 180) * (isLongTick ? 230 : 237);
              const y2 = 400 + Math.sin(angle * Math.PI / 180) * (isLongTick ? 230 : 237);
              
              return (
                <line
                  key={`sec-${degree}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#333"
                  strokeWidth={isLongTick ? "1.5" : "0.5"}
                />
              );
            }
            return null;
          })}

          <circle cx="400" cy="400" r="230" fill="none" stroke="#333" strokeWidth="2" />

          {zodiacSigns.map((sign) => {
            const startAngle = sign.start - 90;
            const endAngle = startAngle + 30;
            const path = describeArc(400, 400, 230, startAngle, endAngle, 180);
            
            return (
              <g key={`natal-ring-${sign.name}`}>
                <path
                  d={path}
                  fill={sign.color}
                  stroke="#fff"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </g>
            );
          })}

          {Array.from({ length: 360 }).map((_, degree) => {
            if (degree % 1 === 0) {
              const angle = degree - 90;
              const isLongTick = degree % 5 === 0;
              const x1 = 400 + Math.cos(angle * Math.PI / 180) * 180;
              const y1 = 400 + Math.sin(angle * Math.PI / 180) * 180;
              const x2 = 400 + Math.cos(angle * Math.PI / 180) * (isLongTick ? 170 : 177);
              const y2 = 400 + Math.sin(angle * Math.PI / 180) * (isLongTick ? 170 : 177);
              
              return (
                <line
                  key={`natal-${degree}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#333"
                  strokeWidth={isLongTick ? "1.5" : "0.5"}
                />
              );
            }
            return null;
          })}

          <circle cx="400" cy="400" r="170" fill="white" stroke="#333" strokeWidth="2" />

          {Array.from({ length: 12 }).map((_, index) => {
            const angle = (index * 30) - 90;
            const x1 = 400 + Math.cos(angle * Math.PI / 180) * 390;
            const y1 = 400 + Math.sin(angle * Math.PI / 180) * 390;
            const x2 = 400 + Math.cos(angle * Math.PI / 180) * 170;
            const y2 = 400 + Math.sin(angle * Math.PI / 180) * 170;

            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#666"
                strokeWidth="1.5"
              />
            );
          })}

          {aspects.map((aspect, index) => {
            const angle1 = aspect.from - 90;
            const angle2 = aspect.to - 90;
            const x1 = 400 + Math.cos(angle1 * Math.PI / 180) * 165;
            const y1 = 400 + Math.sin(angle1 * Math.PI / 180) * 165;
            const x2 = 400 + Math.cos(angle2 * Math.PI / 180) * 165;
            const y2 = 400 + Math.sin(angle2 * Math.PI / 180) * 165;

            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={aspect.color}
                strokeWidth="1.5"
                opacity="0.5"
              />
            );
          })}

          {natalPlanets.map((planet, index) => {
            const angle = planet.degree - 90;
            const radius = 140;
            const x = 400 + Math.cos(angle * Math.PI / 180) * radius;
            const y = 400 + Math.sin(angle * Math.PI / 180) * radius;

            return (
              <g key={`natal-${index}`}>
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="18"
                  fill={planet.color}
                  fontWeight="bold"
                >
                  {planet.symbol}
                </text>
              </g>
            );
          })}

          {progressedPlanets.map((planet, index) => {
            const angle = planet.degree - 90;
            const radius = 210;
            const x = 400 + Math.cos(angle * Math.PI / 180) * radius;
            const y = 400 + Math.sin(angle * Math.PI / 180) * radius;

            return (
              <g key={`progressed-${index}`}>
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16"
                  fill={planet.color}
                  fontWeight="bold"
                >
                  {planet.symbol}
                </text>
              </g>
            );
          })}

          {transitPlanets.map((planet, index) => {
            const angle = planet.degree - 90;
            const radius = 335;
            const x = 400 + Math.cos(angle * Math.PI / 180) * radius;
            const y = 400 + Math.sin(angle * Math.PI / 180) * radius;

            return (
              <g key={`transit-${index}`}>
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="16"
                  fill={planet.color}
                  fontWeight="bold"
                >
                  {planet.symbol}
                </text>
              </g>
            );
          })}

          <g>
            <line x1="400" y1="400" x2="570" y2="400" stroke="#000" strokeWidth="3" />
            <text x="555" y="390" fontSize="16" fontWeight="bold">AS</text>
          </g>

          <g>
            <line x1="400" y1="400" x2="400" y2="230" stroke="#000" strokeWidth="3" />
            <text x="385" y="245" fontSize="16" fontWeight="bold">MC</text>
          </g>
        </svg>
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={handlePrevious}
          className="p-2 border border-gray-300 rounded hover:bg-gray-100 bg-white"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 bg-white flex items-center gap-2"
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
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 bg-white"
        >
          Now
        </button>

        <button
          onClick={handleNext}
          className="p-2 border border-gray-300 rounded hover:bg-gray-100 bg-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">PROGRESSED & TRANSIT WHEELS</h2>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="w-48 text-right font-medium">Date (dd-month-yyyy):</label>
            <div className="flex-1 flex gap-2">
              <input
                type="text"
                value={formData.day}
                onChange={(e) => handleFormChange('day', e.target.value)}
                className="w-16 border border-gray-300 rounded px-3 py-2 text-center"
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
              />
              <span>:</span>
              <input
                type="text"
                value={formData.minute}
                onChange={(e) => handleFormChange('minute', e.target.value)}
                className="w-16 border border-gray-300 rounded px-3 py-2 text-center"
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
              onClick={handleViewReport}
              className="w-full bg-purple-100 hover:bg-purple-200 text-gray-800 font-medium py-3 rounded transition-colors"
            >
              View Report ⌘
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function describeArc(x, y, radius, startAngle, endAngle, innerRad = null) {
  const outerRadius = radius;
  const innerRadius = innerRad || (radius - 30);

  const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
  const endOuter = polarToCartesian(x, y, outerRadius, startAngle);
  const startInner = polarToCartesian(x, y, innerRadius, endAngle);
  const endInner = polarToCartesian(x, y, innerRadius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M", startOuter.x, startOuter.y,
    "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
    "L", endInner.x, endInner.y,
    "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
    "Z"
  ].join(" ");
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = angleInDegrees * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

export default TransitChart;