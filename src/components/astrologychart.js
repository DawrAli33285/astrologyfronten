import React, { useState } from 'react';

const AstrologyChart = () => {
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

  const planets = [
    { name: 'Sun', symbol: '☉', degree: 48, color: '#FFD700' },
    { name: 'Moon', symbol: '☽', degree: 275, color: '#C0C0C0' },
    { name: 'Mercury', symbol: '☿', degree: 52, color: '#A0A0A0' },
    { name: 'Venus', symbol: '♀', degree: 198, color: '#FF69B4' },
    { name: 'Mars', symbol: '♂', degree: 278, color: '#FF4500' },
    { name: 'Jupiter', symbol: '♃', degree: 72, color: '#FF8C00' },
    { name: 'Saturn', symbol: '♄', degree: 28, color: '#8B4513' },
    { name: 'Uranus', symbol: '♅', degree: 230, color: '#00CED1' },
    { name: 'Neptune', symbol: '♆', degree: 245, color: '#4169E1' },
    { name: 'Pluto', symbol: '♇', degree: 220, color: '#8B008B' }
  ];

  const houses = [0, 25, 55, 85, 118, 148, 180, 205, 235, 265, 298, 328];

  const size = 600;
  const center = size / 2;
  const outerRadius = 280;
  const innerRadius = 180;
  const houseRadius = 160;
  const planetRadius = 220;

  
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


  const aspects = [
    { from: 48, to: 198, type: 'trine', color: '#3498DB' },
    { from: 48, to: 275, type: 'square', color: '#E74C3C' },
    { from: 275, to: 198, type: 'sextile', color: '#52C41A' }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="md:p-8 p-4 w-full max-w-2xl">
        <h1 className="text-[26px] md:text-[30px] font-light text-center mb-16">Birth Chart</h1>
        
        <div className="w-full aspect-square max-w-full">
          <svg viewBox={`0 0 ${size} ${size}`} className="drop-shadow-lg w-full h-full">
            {zodiacSigns.map((sign, idx) => {
              const nextSign = zodiacSigns[(idx + 1) % 12];
              return (
                <g key={sign.name}>
                  <path
                    d={getArcPath(sign.start, nextSign.start, innerRadius, outerRadius)}
                    fill={sign.color}
                    stroke="white"
                    strokeWidth="1"
                    opacity="0.8"
                  />
           
                  <text
                    x={getPosition(sign.start + 15, (outerRadius + innerRadius) / 2).x}
                    y={getPosition(sign.start + 15, (outerRadius + innerRadius) / 2).y}
                    fontSize="28"
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
              const length = isMain ? 15 : 8;
              const start = getPosition(deg, outerRadius);
              const end = getPosition(deg, outerRadius - length);
              return (
                <line
                  key={deg}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke={isMain ? "#333" : "#666"}
                  strokeWidth={isMain ? "2" : "1"}
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
              stroke="#9B59B6"
              strokeWidth="3"
            />

        
            {houses.map((house, idx) => {
              const inner = getPosition(house, 0);
              const outer = getPosition(house, houseRadius);
              return (
                <g key={idx}>
                  <line
                    x1={inner.x}
                    y1={inner.y}
                    x2={outer.x}
                    y2={outer.y}
                    stroke="#9B59B6"
                    strokeWidth="2"
                  />
            
                  <text
                    x={getPosition(house + 12, houseRadius - 20).x}
                    y={getPosition(house + 12, houseRadius - 20).y}
                    fontSize="14"
                    fontWeight="bold"
                    fill="#9B59B6"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {idx + 1}
                  </text>
                </g>
              );
            })}

     
            {aspects.map((aspect, idx) => {
              const from = getPosition(aspect.from, 60);
              const to = getPosition(aspect.to, 60);
              return (
                <line
                  key={idx}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={aspect.color}
                  strokeWidth="1.5"
                  opacity="0.6"
                  strokeDasharray={aspect.type === 'trine' ? '0' : '5,5'}
                />
              );
            })}

        
            {planets.map((planet) => {
              const pos = getPosition(planet.degree, planetRadius);
              const labelPos = getPosition(planet.degree, planetRadius + 30);
              return (
                <g key={planet.name}>
             
                  <line
                    x1={center}
                    y1={center}
                    x2={getPosition(planet.degree, innerRadius).x}
                    y2={getPosition(planet.degree, innerRadius).y}
                    stroke="#ccc"
                    strokeWidth="1"
                    opacity="0.5"
                  />
               
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="16"
                    fill="white"
                    stroke={planet.color}
                    strokeWidth="2"
                  />
                  <text
                    x={pos.x}
                    y={pos.y}
                    fontSize="18"
                    fill={planet.color}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontWeight="bold"
                  >
                    {planet.symbol}
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
                    {Math.floor(planet.degree % 30)}°
                  </text>
                </g>
              );
            })}

         
            <line x1={center} y1={center - 10} x2={center} y2={center + 10} stroke="#9B59B6" strokeWidth="2" />
            <line x1={center - 10} y1={center} x2={center + 10} y2={center} stroke="#9B59B6" strokeWidth="2" />
          </svg>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-bold text-indigo-900 mb-2">Planets</h3>
            <div className="space-y-1">
              {planets.slice(0, 5).map(p => (
                <div key={p.name} className="flex items-center gap-2">
                  <span style={{ color: p.color }} className="text-lg font-bold">{p.symbol}</span>
                  <span className="text-gray-700">{p.name}</span>
                  <span className="text-gray-500 text-xs">{Math.floor(p.degree)}°</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-indigo-900 mb-2">Outer Planets</h3>
            <div className="space-y-1">
              {planets.slice(5).map(p => (
                <div key={p.name} className="flex items-center gap-2">
                  <span style={{ color: p.color }} className="text-lg font-bold">{p.symbol}</span>
                  <span className="text-gray-700">{p.name}</span>
                  <span className="text-gray-500 text-xs">{Math.floor(p.degree)}°</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologyChart;