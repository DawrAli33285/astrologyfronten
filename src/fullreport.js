import React, { useState } from 'react';
import { Star, Moon, Sun, Globe } from 'lucide-react';

export default function AstrologyReport() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const planetaryData = [
    { symbol: '☉', name: 'Sun', sign: 'Taurus', house: '9th House' },
    { symbol: '☽', name: 'Moon', sign: 'Capricorn', house: '5th House' },
    { symbol: '☿', name: 'Mercury', sign: 'Sagittarius', house: '4th House' },
    { symbol: '♀', name: 'Venus', sign: 'Aquarius', house: '6th House' },
    { symbol: '♂', name: 'Mars', sign: 'Aquarius', house: '6th House' },
    { symbol: '♃', name: 'Jupiter', sign: 'Taurus', house: '9th House' },
    { symbol: '♄', name: 'Saturn', sign: 'Pisces', house: '7th House' },
    { symbol: '♅', name: 'Uranus', sign: 'Scorpio', house: '3rd House' },
    { symbol: '♆', name: 'Neptune', sign: 'Sagittarius', house: '4th House' },
    { symbol: '♇', name: 'Pluto', sign: 'Virgo', house: '1st House' },
    { symbol: '☊', name: 'North Node', sign: 'Pisces', house: '7th House' },
    { symbol: '⚷', name: 'South Node', sign: 'Sagittarius', house: '7th House' },
    { symbol: 'M', name: 'Midheaven', sign: 'Aquarius', house: '6th House' }
  ];

  const aspects = [
    { from: '☉', to: '☽', type: 'Trine', orb: '2°' },
    { from: '☉', to: '♃', type: 'Conjunction', orb: '0°' },
    { from: '☽', to: '♄', type: 'Sextile', orb: '3°' },
    { from: '♀', to: '♂', type: 'Conjunction', orb: '1°' },
    { from: '☿', to: '♆', type: 'Conjunction', orb: '4°' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Stars Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Diagonal Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-600/30 to-transparent transform skew-x-12"></div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-7xl font-bold mb-4 tracking-wider">MiZ</h1>
              <h2 className="text-4xl font-light mb-2">True Sidereal</h2>
              <h3 className="text-3xl font-light mb-2">Chart Report</h3>
              <h4 className="text-2xl font-light text-purple-300">& E-Reading</h4>
            </div>
            
            <div className="flex gap-4 mt-12">
              <Star className="w-12 h-12 text-yellow-400 animate-pulse" />
              <Moon className="w-10 h-10 text-blue-300 animate-bounce" />
              <Sun className="w-11 h-11 text-orange-400 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Placements & Aspects */}
          <div className="space-y-8">
            {/* Planetary Placements */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Planetary Placements</h3>
              
              <div className="space-y-3">
                <div className="grid grid-cols-12 gap-2 text-sm font-semibold text-purple-300 pb-2 border-b border-purple-500/30">
                  <div className="col-span-4">Placements</div>
                  <div className="col-span-8">Aspects</div>
                </div>
                
                {planetaryData.map((planet, idx) => (
                  <div 
                    key={idx}
                    className="grid grid-cols-12 gap-2 items-center hover:bg-purple-500/10 p-2 rounded-lg transition-colors cursor-pointer"
                    onClick={() => setSelectedPlanet(planet)}
                  >
                    <div className="col-span-4 flex items-center gap-3">
                      <span className="text-2xl">{planet.symbol}</span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{planet.name}</span>
                        <span className="text-xs text-purple-300">{planet.sign}</span>
                      </div>
                    </div>
                    <div className="col-span-8 flex items-center gap-2">
                      <span className="text-xs text-gray-400">{planet.house}</span>
                      <div className="flex gap-1">
                        {aspects.filter(a => a.from === planet.symbol || a.to === planet.symbol).map((aspect, i) => (
                          <span key={i} className="text-xs bg-purple-600/30 px-2 py-1 rounded">
                            {aspect.type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aspects Grid */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Aspects</h3>
              
              <div className="grid grid-cols-6 gap-1">
                {planetaryData.slice(0, 6).map((planet, idx) => (
                  <React.Fragment key={idx}>
                    <div className="text-center p-2 text-xl">{planet.symbol}</div>
                  </React.Fragment>
                ))}
                
                {/* Aspect Grid Cells */}
                {[...Array(36)].map((_, idx) => {
                  const hasAspect = Math.random() > 0.7;
                  return (
                    <div 
                      key={idx}
                      className={`aspect-square border border-purple-500/20 flex items-center justify-center text-xs ${
                        hasAspect ? 'bg-purple-600/30 text-white' : 'bg-transparent text-gray-600'
                      }`}
                    >
                      {hasAspect ? ['△', '□', '⚹'][Math.floor(Math.random() * 3)] : ''}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Readings */}
          <div className="space-y-8">
            {/* Ascendant Reading */}
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">♈</div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-200">Ascendant: Who You Are Destined to Become</h3>
                  <p className="text-sm text-purple-300 mt-1">Life Influence: Very High</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Taurus Ascendant</h4>
                <p className="text-sm text-gray-200 leading-relaxed">
                  The ascendant shows what personality characteristics life is helping you develop. In Taurus "the Bull", life is helping you develop your resourceful side. To be grounded in your inner strength, inner resources, and self-sufficiency. To develop a strong sense of your own self-worth that makes you financially secure. This doesn't happen overnight, but because the Sun has been helping you develop it.
                </p>
                <p className="text-sm text-gray-200 leading-relaxed mt-3">
                  You value comfort, stability, and sensuality over self-restraint. Then resourcefulness, and ultimately generosity. If you get hung up on self-worth over values, you'll get caught up in materialism and control over what life needs. By letting intentions to develop your resourceful side just develop along the expansive route that life is helping you fulfill your life destiny graciously.
                </p>
              </div>
            </div>

            {/* Chart Ruler */}
            <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">♀</div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-200">Chart Ruler: Your Destiny</h3>
                  <p className="text-sm text-blue-300 mt-1">Life Influence: Critical</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Chart Ruler Venus in the 9th House</h4>
                <p className="text-sm text-gray-200 leading-relaxed">
                  The ruling planet shows where life is helping you develop the resourceful characteristics of your Taurus rising sign. Above. In the 9th House, life is helping you develop these Taurus characteristics of resourcefulness through expansion, optimism, and philosophy. Through being open-minded and curious about different cultures and beliefs.
                </p>
              </div>
            </div>

            {/* Interactive Chart Preview */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Birth Chart Wheel</h3>
              <div className="aspect-square bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-full border-4 border-purple-500/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-0.5 bg-purple-500/20 top-1/2 left-1/2 origin-left"
                      style={{ transform: `rotate(${i * 30}deg)` }}
                    />
                  ))}
                </div>
                <Globe className="w-24 h-24 text-purple-300 animate-spin z-10" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  {planetaryData.slice(0, 10).map((planet, idx) => {
                    const angle = (idx * 36) * (Math.PI / 180);
                    const radius = 80;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    return (
                      <div
                        key={idx}
                        className="absolute text-2xl animate-pulse"
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                          animationDelay: `${idx * 0.2}s`
                        }}
                      >
                        {planet.symbol}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg shadow-purple-500/50 transform hover:scale-105 transition-all">
            Get Your Full E-Reading
          </button>
        </div>
      </div>
    </div>
  );
}