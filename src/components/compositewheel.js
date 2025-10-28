import React, { useState } from 'react';

const CompositeChartWheel = () => {
  const [chartData] = useState({
    person1: {
      name: "Person 1",
      birth_info: {
        date: "2025-08-05",
        time: "14:12",
        location: { latitude: 33.591337, longitude: 73.051906 },
        timezone: "PKT"
      }
    },
    person2: {
      name: "Person 2", 
      birth_info: {
        date: "2025-08-05",
        time: "14:12",
        location: { latitude: 33.591337, longitude: 73.051906 },
        timezone: "PKT"
      }
    },
    composite: {
      ascendant: { sign: 'Scorpio', degree: '4.53', longitude: 234.53 },
      planets: {
        Sun: { sign: 'Gemini', degree: '18.32', longitude: 78.32 },
        Moon: { sign: 'Scorpio', degree: '24.18', longitude: 234.18 },
        Mercury: { sign: 'Taurus', degree: '5.67', longitude: 35.67 },
        Venus: { sign: 'Libra', degree: '6.24', longitude: 186.24 },
        Mars: { sign: 'Capricorn', degree: '24.89', longitude: 294.89 },
        Jupiter: { sign: 'Gemini', degree: '23.45', longitude: 83.45 },
        Saturn: { sign: 'Aries', degree: '29.12', longitude: 29.12 },
        Uranus: { sign: 'Sagittarius', degree: '17.56', longitude: 257.56 },
        Neptune: { sign: 'Sagittarius', degree: '25.78', longitude: 265.78 },
        Pluto: { sign: 'Scorpio', degree: '17.34', longitude: 227.34 }
      },
      houses: [
        { house: 1, sign: 'Scorpio', degree: '4.53' },
        { house: 2, sign: 'Sagittarius', degree: '4.53' },
        { house: 3, sign: 'Capricorn', degree: '4.53' },
        { house: 4, sign: 'Aquarius', degree: '4.53' },
        { house: 5, sign: 'Pisces', degree: '4.53' },
        { house: 6, sign: 'Aries', degree: '4.53' },
        { house: 7, sign: 'Taurus', degree: '4.53' },
        { house: 8, sign: 'Gemini', degree: '4.53' },
        { house: 9, sign: 'Cancer', degree: '4.53' },
        { house: 10, sign: 'Leo', degree: '4.53' },
        { house: 11, sign: 'Virgo', degree: '4.53' },
        { house: 12, sign: 'Libra', degree: '4.53' }
      ]
    }
  });

  const zodiacSigns = [
    { name: 'Aries', symbol: '♈', color: '#E74C3C', start: 0 },
    { name: 'Taurus', symbol: '♉', color: '#E67E22', start: 30 },
    { name: 'Gemini', symbol: '♊', color: '#F39C12', start: 60 },
    { name: 'Cancer', symbol: '♋', color: '#F4D03F', start: 90 },
    { name: 'Leo', symbol: '♌', color: '#52C41A', start: 120 },
    { name: 'Virgo', symbol: '♍', color: '#17A589', start: 150 },
    { name: 'Libra', symbol: '♎', color: '#1ABC9C', start: 180 },
    { name: 'Scorpio', symbol: '♏', color: '#3498DB', start: 210 },
    { name: 'Sagittarius', symbol: '♐', color: '#9B59B6', start: 240 },
    { name: 'Capricorn', symbol: '♑', color: '#8E44AD', start: 270 },
    { name: 'Aquarius', symbol: '♒', color: '#C4569A', start: 300 },
    { name: 'Pisces', symbol: '♓', color: '#AD1457', start: 330 }
  ];

  const planetSymbols = {
    Sun: '☉',
    Moon: '☽',
    Mercury: '☿',
    Venus: '♀',
    Mars: '♂',
    Jupiter: '♃',
    Saturn: '♄',
    Uranus: '♅',
    Neptune: '♆',
    Pluto: '♇'
  };

  const planetColors = {
    Sun: '#FFD700',
    Moon: '#C0C0C0',
    Mercury: '#A0A0A0',
    Venus: '#FF69B4',
    Mars: '#FF4500',
    Jupiter: '#FF8C00',
    Saturn: '#8B4513',
    Uranus: '#00CED1',
    Neptune: '#4169E1',
    Pluto: '#8B008B'
  };

  const size = 700;
  const center = size / 2;
  const outerRadius = 330;
  const innerRadius = 210;
  const houseRadius = 190;
  const planetRadius = 260;

  const degToRad = (deg) => ((deg - 90) * Math.PI) / 180;

  const getPosition = (degree, radius) => {
    const rad = degToRad(degree);
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad)
    };
  };

  const getArcPath = (startDeg, endDeg, innerR, outerR) => {
    const start1 = getPosition(startDeg, outerR);
    const end1 = getPosition(endDeg, outerR);
    const start2 = getPosition(startDeg, innerR);
    const end2 = getPosition(endDeg, innerR);
    
    const largeArc = endDeg - startDeg > 180 ? 1 : 0;
    
    return `
      M ${start1.x} ${start1.y}
      A ${outerR} ${outerR} 0 ${largeArc} 1 ${end1.x} ${end1.y}
      L ${end2.x} ${end2.y}
      A ${innerR} ${innerR} 0 ${largeArc} 0 ${start2.x} ${start2.y}
      Z
    `;
  };

  const generatePDF = () => {
 
    const printContent = document.getElementById('chart-content');
    const printWindow = window.open('', '', 'width=800,height=800');
    
    printWindow.document.write(`
      <html>
        <head>
          <title>Composite Chart - ${new Date().toLocaleDateString()}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .info {
              margin: 10px 0;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Composite Chart</h1>
            <div class="info">
              <strong>Person 1:</strong> ${chartData.person1.birth_info.date} ${chartData.person1.birth_info.time} (${chartData.person1.birth_info.timezone})
            </div>
            <div class="info">
              <strong>Person 2:</strong> ${chartData.person2.birth_info.date} ${chartData.person2.birth_info.time} (${chartData.person2.birth_info.timezone})
            </div>
            <div class="info">Generated: ${new Date().toLocaleString()}</div>
          </div>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4">
      <div className="">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-light text-gray-800 mb-2">Composite Chart</h1>
          <p className="text-gray-600">Relationship Astrology Wheel</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6 text-sm">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-semibold text-indigo-900 mb-2">Person 1</h3>
            <p className="text-gray-700">{chartData.person1.birth_info.date} {chartData.person1.birth_info.time}</p>
            <p className="text-gray-600 text-xs">{chartData.person1.birth_info.timezone}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">Person 2</h3>
            <p className="text-gray-700">{chartData.person2.birth_info.date} {chartData.person2.birth_info.time}</p>
            <p className="text-gray-600 text-xs">{chartData.person2.birth_info.timezone}</p>
          </div>
        </div>

        <div id="chart-content" className="w-full aspect-square max-w-full mb-6">
          <svg viewBox={`0 0 ${size} ${size}`} className="drop-shadow-lg w-full h-full">
            {/* Zodiac Signs Ring */}
            {zodiacSigns.map((sign, idx) => {
              const nextSign = zodiacSigns[(idx + 1) % 12];
              return (
                <g key={sign.name}>
                  <path
                    d={getArcPath(sign.start, nextSign.start, innerRadius, outerRadius)}
                    fill={sign.color}
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.85"
                  />
                  <text
                    x={getPosition(sign.start + 15, (outerRadius + innerRadius) / 2).x}
                    y={getPosition(sign.start + 15, (outerRadius + innerRadius) / 2).y}
                    fontSize="32"
                    fontWeight="bold"
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {sign.symbol}
                  </text>
                </g>
              );
            })}

   
            {Array.from({ length: 360 }, (_, i) => i).filter(i => i % 5 === 0).map(deg => {
              const isMain = deg % 30 === 0;
              const length = isMain ? 18 : 10;
              const start = getPosition(deg, outerRadius);
              const end = getPosition(deg, outerRadius - length);
              return (
                <line
                  key={deg}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke={isMain ? "#333" : "#999"}
                  strokeWidth={isMain ? "2.5" : "1"}
                />
              );
            })}

         
            <circle
              cx={center}
              cy={center}
              r={innerRadius}
              fill="white"
              stroke="#333"
              strokeWidth="2"
            />

         
            <circle
              cx={center}
              cy={center}
              r={houseRadius}
              fill="none"
              stroke="#8E44AD"
              strokeWidth="3"
            />

            
            {chartData.composite.houses.map((house, idx) => {
              const houseDegree = parseFloat(chartData.composite.ascendant.longitude) + (idx * 30);
              const inner = getPosition(houseDegree, 0);
              const outer = getPosition(houseDegree, houseRadius);
              return (
                <g key={idx}>
                  <line
                    x1={inner.x}
                    y1={inner.y}
                    x2={outer.x}
                    y2={outer.y}
                    stroke="#8E44AD"
                    strokeWidth="2"
                  />
                  <text
                    x={getPosition(houseDegree + 15, houseRadius - 25).x}
                    y={getPosition(houseDegree + 15, houseRadius - 25).y}
                    fontSize="16"
                    fontWeight="bold"
                    fill="#8E44AD"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {house.house}
                  </text>
                </g>
              );
            })}

       
            {Object.entries(chartData.composite.planets).map(([planetName, planetData]) => {
              const pos = getPosition(parseFloat(planetData.longitude), planetRadius);
              const labelPos = getPosition(parseFloat(planetData.longitude), planetRadius + 35);
              
              return (
                <g key={planetName}>
                  <line
                    x1={center}
                    y1={center}
                    x2={getPosition(parseFloat(planetData.longitude), innerRadius).x}
                    y2={getPosition(parseFloat(planetData.longitude), innerRadius).y}
                    stroke="#ddd"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="18"
                    fill="white"
                    stroke={planetColors[planetName]}
                    strokeWidth="2.5"
                  />
                  <text
                    x={pos.x}
                    y={pos.y}
                    fontSize="20"
                    fill={planetColors[planetName]}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontWeight="bold"
                  >
                    {planetSymbols[planetName]}
                  </text>
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    fontSize="11"
                    fill="#333"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontWeight="600"
                  >
                    {Math.floor(parseFloat(planetData.degree))}°
                  </text>
                </g>
              );
            })}

       
            <g>
              <text
                x={getPosition(parseFloat(chartData.composite.ascendant.longitude), houseRadius - 60).x}
                y={getPosition(parseFloat(chartData.composite.ascendant.longitude), houseRadius - 60).y}
                fontSize="18"
                fill="#8E44AD"
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight="bold"
              >
                AS
              </text>
              <text
                x={getPosition(parseFloat(chartData.composite.ascendant.longitude), houseRadius - 80).x}
                y={getPosition(parseFloat(chartData.composite.ascendant.longitude), houseRadius - 80).y}
                fontSize="12"
                fill="#666"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {Math.floor(parseFloat(chartData.composite.ascendant.degree))}° ♏ {Math.floor((parseFloat(chartData.composite.ascendant.degree) % 1) * 60)}'
              </text>
            </g>

    
            <g>
              <text
                x={getPosition(parseFloat(chartData.composite.ascendant.longitude) + 90, outerRadius - 40).x}
                y={getPosition(parseFloat(chartData.composite.ascendant.longitude) + 90, outerRadius - 40).y}
                fontSize="18"
                fill="#8E44AD"
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight="bold"
              >
                MC
              </text>
            </g>

      
            <line x1={center} y1={center - 12} x2={center} y2={center + 12} stroke="#8E44AD" strokeWidth="2.5" />
            <line x1={center - 12} y1={center} x2={center + 12} y2={center} stroke="#8E44AD" strokeWidth="2.5" />
          </svg>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-6">
          {Object.entries(chartData.composite.planets).map(([name, data]) => (
            <div key={name} className="flex items-center gap-2 bg-gray-50 p-2 rounded">
              <span style={{ color: planetColors[name] }} className="text-2xl font-bold">
                {planetSymbols[name]}
              </span>
              <div>
                <span className="text-gray-800 font-medium">{name}</span>
                <div className="text-gray-600 text-xs">
                  {Math.floor(parseFloat(data.degree))}° {data.sign}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={generatePDF}
            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View Report (PDF)
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Zodiac: Tropical | House System: Placidus | Coordinates: Geocentric</p>
          <p className="mt-1">Generated: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CompositeChartWheel;