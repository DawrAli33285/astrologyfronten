import React, { useState } from 'react';

const AdminSettings = () => {
  const [wheelSettings, setWheelSettings] = useState({
   
    sun: { natal: true, progressed: true },
    moon: { natal: true, progressed: true },
    mercury: { natal: true, progressed: true },
    venus: { natal: true, progressed: true },
    mars: { natal: true, progressed: true },
    
    jupiter: { natal: true, progressed: true },
    saturn: { natal: true, progressed: true },
    uranus: { natal: true, progressed: true },
    neptune: { natal: true, progressed: true },
    pluto: { natal: true, progressed: true },
  
    chiron: { natal: true, progressed: false },
    northNode: { natal: true, progressed: false },
    southNode: { natal: true, progressed: false },
    ascendant: { natal: true, progressed: true },
    mc: { natal: true, progressed: false },
  
    ds: { natal: false, progressed: false },
    ic: { natal: false, progressed: false },
    lilith: { natal: true, progressed: false },
    pof: { natal: false, progressed: false },
    vertex: { natal: false, progressed: false },

    ceres: { natal: false, progressed: false },
    pallas: { natal: false, progressed: false },
    eris: { natal: false, progressed: false },
    
    planetDegrees: true,
    ascendantStyle: 'normal',
  });

  const [aspects, setAspects] = useState({
    conjunction: { enabled: true, orb: '10°' },
    opposition: { enabled: true, orb: '10°' },
    square: { enabled: true, orb: '8°' },
    trine: { enabled: true, orb: '8°' },
    sextile: { enabled: true, orb: '6°' },
    quincunx: { enabled: true, orb: '3°' },
    semisextile: { enabled: true, orb: '3°' },
    sesquisquare: { enabled: true, orb: '3°' },
  });

  const [systems, setSystems] = useState({
    zodiac: 'tropical',
    house: 'placidus',
    coordinate: 'geocentric',
  });

  const [graphSettings, setGraphSettings] = useState({
  
    sun: { natal: true, progressed: true, transit: false },
    moon: { natal: true, progressed: true, transit: false },
    mercury: { natal: true, progressed: true, transit: false },
   
    venus: { natal: true, progressed: true, transit: false },
    mars: { natal: true, progressed: true, transit: false },
    jupiter: { natal: true, progressed: true, transit: false },
   
    saturn: { natal: true, progressed: true, transit: true },
    uranus: { natal: false, progressed: false, transit: true },
    neptune: { natal: true, progressed: true, transit: true },
    
    pluto: { natal: false, progressed: false, transit: true },
    chiron: { natal: false, progressed: false, transit: true },
    northNode: { natal: false, progressed: false, transit: true },
 
    ascendant: { natal: true, progressed: false, transit: false },
    mc: { natal: true, progressed: false, transit: false },
  });

  const [graphAspects, setGraphAspects] = useState({
    conjunction: true,
    opposition: true,
    square: true,
    trine: true,
    sextile: true,
    quincunx: true,
    semisextile: true,
    sesquisquare: true,
  });

  const [graphTypes, setGraphTypes] = useState({
    progressedToNatal: true,
    transitingToNatal: true,
    progressedToProgressed: true,
    transitingToTransiting: true,
    stations: true,
    houseIngresses: true,
  });

  const [settingsName, setSettingsName] = useState('Default Settings');

  return (
    <div className="max-w-5xl mx-auto bg-gray-50 p-8 rounded-lg">
 
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-center mb-6">WHEEL SETTINGS</h2>
        
        <h3 className="text-center font-semibold mb-4 border-b border-gray-300 pb-2">
          Planet Symbol/Aspects
        </h3>

    
        <div className="space-y-3 mb-6">
    
          <div className="flex items-center justify-center gap-4">
            {[
              { key: 'sun', symbol: '☉', color: 'text-yellow-500' },
              { key: 'moon', symbol: '☽', color: 'text-blue-600' },
              { key: 'mercury', symbol: '☿', color: 'text-gray-600' },
              { key: 'venus', symbol: '♀', color: 'text-green-600' },
              { key: 'mars', symbol: '♂', color: 'text-red-600' },
            ].map(planet => (
              <div key={planet.key} className="flex items-center gap-2">
                <span className={`text-2xl ${planet.color}`}>{planet.symbol}</span>
                <input type="checkbox" checked={wheelSettings[planet.key].natal} className="w-4 h-4" />
                <input type="checkbox" checked={wheelSettings[planet.key].progressed} className="w-4 h-4" />
              </div>
            ))}
          </div>

      
          <div className="flex items-center justify-center gap-4">
            {[
              { key: 'jupiter', symbol: '♃', color: 'text-orange-500' },
              { key: 'saturn', symbol: '♄', color: 'text-gray-700' },
              { key: 'uranus', symbol: '♅', color: 'text-cyan-600' },
              { key: 'neptune', symbol: '♆', color: 'text-blue-500' },
              { key: 'pluto', symbol: '♇', color: 'text-purple-700' },
            ].map(planet => (
              <div key={planet.key} className="flex items-center gap-2">
                <span className={`text-2xl ${planet.color}`}>{planet.symbol}</span>
                <input type="checkbox" checked={wheelSettings[planet.key].natal} className="w-4 h-4" />
                <input type="checkbox" checked={wheelSettings[planet.key].progressed} className="w-4 h-4" />
              </div>
            ))}
          </div>


          <div className="flex items-center justify-center gap-4">
            {[
              { key: 'chiron', symbol: '⚷', natal: true, progressed: false },
              { key: 'northNode', symbol: '☊', natal: true, progressed: false },
              { key: 'southNode', symbol: '☋', natal: true, progressed: false },
              { key: 'ascendant', symbol: 'AS', natal: true, progressed: true },
              { key: 'mc', symbol: 'MC', natal: true, progressed: false },
            ].map(planet => (
              <div key={planet.key} className="flex items-center gap-2">
                <span className="text-xl font-semibold">{planet.symbol}</span>
                <input type="checkbox" checked={wheelSettings[planet.key].natal} className="w-4 h-4" />
                <input type="checkbox" checked={wheelSettings[planet.key].progressed} className="w-4 h-4" />
              </div>
            ))}
          </div>

   
          <div className="flex items-center justify-center gap-4">
            {[
              { key: 'ds', symbol: 'DS', natal: false, progressed: false },
              { key: 'ic', symbol: 'IC', natal: false, progressed: false },
              { key: 'lilith', symbol: '⚸', natal: true, progressed: false },
              { key: 'pof', symbol: '⊕', natal: false, progressed: false },
              { key: 'vertex', symbol: '⊗', natal: false, progressed: false },
            ].map(planet => (
              <div key={planet.key} className="flex items-center gap-2">
                <span className="text-xl font-semibold">{planet.symbol}</span>
                <input type="checkbox" checked={wheelSettings[planet.key].natal} className="w-4 h-4" />
                <input type="checkbox" checked={wheelSettings[planet.key].progressed} className="w-4 h-4" />
              </div>
            ))}
          </div>


          <div className="flex items-center justify-center gap-4">
            {[
              { key: 'ceres', symbol: '⚳', natal: false, progressed: false },
              { key: 'pallas', symbol: '⚴', natal: false, progressed: false },
              { key: 'eris', symbol: '⯰', natal: false, progressed: false },
            ].map(planet => (
              <div key={planet.key} className="flex items-center gap-2">
                <span className="text-xl font-semibold">{planet.symbol}</span>
                <input type="checkbox" checked={wheelSettings[planet.key].natal} className="w-4 h-4" />
                <input type="checkbox" checked={wheelSettings[planet.key].progressed} className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>

 
        <div className="flex items-center justify-center gap-2 mb-6">
          <input type="checkbox" checked={wheelSettings.planetDegrees} className="w-4 h-4" />
          <span className="text-sm">Planet Degrees</span>
        </div>

      
        <div className="flex items-center justify-center gap-4 mb-6">
          <label className="font-medium">Ascendant:</label>
          <select 
            value={systems.ascendantStyle}
            className="border border-gray-300 rounded px-3 py-1"
          >
            <option value="normal">Normal</option>
            <option value="whole">Whole</option>
          </select>
        </div>

    
        <h3 className="text-center font-semibold mb-4 border-b border-gray-300 pb-2">
          Aspects
        </h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-center gap-6">
            {[
              { key: 'conjunction', symbol: '☌', orb: '10°' },
              { key: 'opposition', symbol: '☍', orb: '10°' },
              { key: 'square', symbol: '□', orb: '8°' },
              { key: 'trine', symbol: '△', orb: '8°' },
            ].map(aspect => (
              <div key={aspect.key} className="flex items-center gap-2">
                <span className="text-2xl">{aspect.symbol}</span>
                <input type="checkbox" checked={aspects[aspect.key].enabled} className="w-4 h-4" />
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option>{aspect.orb}</option>
                </select>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6">
            {[
              { key: 'sextile', symbol: '✶', orb: '6°' },
              { key: 'quincunx', symbol: '⚻', orb: '3°' },
              { key: 'semisextile', symbol: '⚺', orb: '3°' },
              { key: 'sesquisquare', symbol: '⚼', orb: '3°' },
            ].map(aspect => (
              <div key={aspect.key} className="flex items-center gap-2">
                <span className="text-2xl">{aspect.symbol}</span>
                <input type="checkbox" checked={aspects[aspect.key].enabled} className="w-4 h-4" />
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option>{aspect.orb}</option>
                </select>
              </div>
            ))}
          </div>
        </div>

      
        <h3 className="text-center font-semibold mb-4 border-b border-gray-300 pb-2">
          Systems
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-center gap-4">
            <label className="font-medium w-32 text-right">Zodiac:</label>
            <select 
              value={systems.zodiac}
              className="border border-gray-300 rounded px-3 py-1 w-48"
            >
              <option value="tropical">Tropical</option>
              <option value="sidereal">Sidereal</option>
            </select>
          </div>

          <div className="flex items-center justify-center gap-4">
            <label className="font-medium w-32 text-right">House:</label>
            <select 
              value={systems.house}
              className="border border-gray-300 rounded px-3 py-1 w-48"
            >
              <option value="placidus">Placidus</option>
              <option value="koch">Koch</option>
              <option value="equal">Equal</option>
              <option value="whole">Whole Sign</option>
            </select>
          </div>

          <div className="flex items-center justify-center gap-4">
            <label className="font-medium w-32 text-right">Coordinate:</label>
            <select 
              value={systems.coordinate}
              className="border border-gray-300 rounded px-3 py-1 w-48"
            >
              <option value="geocentric">Geocentric</option>
              <option value="heliocentric">Heliocentric</option>
            </select>
          </div>
        </div>
      </div>


      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-center mb-6">GRAPH SETTINGS</h2>
        
        <h3 className="text-center font-semibold mb-4 border-b border-gray-300 pb-2">
          Natal/Progressed/Transit
        </h3>

        <div className="space-y-3 mb-6">
       
          <div className="flex items-center justify-center gap-8">
            {[
              { key: 'sun', symbol: '☉', color: 'text-yellow-500' },
              { key: 'moon', symbol: '☽', color: 'text-blue-600' },
              { key: 'mercury', symbol: '☿', color: 'text-gray-600' },
            ].map(planet => (
              <div key={planet.key} className="flex items-center gap-2">
                <span className={`text-2xl ${planet.color}`}>{planet.symbol}</span>
                <input type="checkbox" checked={graphSettings[planet.key].natal} className="w-4 h-4" />
                <input type="checkbox" checked={graphSettings[planet.key].progressed} className="w-4 h-4" />
                <input type="checkbox" checked={graphSettings[planet.key].transit} className="w-4 h-4" />
              </div>
            ))}
          </div>

     
          <div className="flex items-center justify-center gap-8">
            {[
              { key: 'venus', symbol: '♀', color: 'text-green-600' },
              { key: 'mars', symbol: '♂', color: 'text-red-600' },
              { key: 'jupiter', symbol: '♃', color: 'text-orange-500' },
            ].map(planet => (
              <div key={planet.key} className="flex items-center gap-2">
                <span className={`text-2xl ${planet.color}`}>{planet.symbol}</span>
                <input type="checkbox" checked={graphSettings[planet.key].natal} className="w-4 h-4" />
                <input type="checkbox" checked={graphSettings[planet.key].progressed} className="w-4 h-4" />
                <input type="checkbox" checked={graphSettings[planet.key].transit} className="w-4 h-4" />
              </div>
            ))}
          </div>

     
          <div className="flex items-center justify-center gap-8">
            {[
              { key: 'saturn', symbol: '♄', color: 'text-gray-700' },
              { key: 'uranus', symbol: '♅', color: 'text-cyan-600' },
              { key: 'neptune', symbol: '♆', color: 'text-blue-500' },
            ].map(planet => (
              <div key={planet.key} className="flex items-center gap-2">
                <span className={`text-2xl ${planet.color}`}>{planet.symbol}</span>
                <input type="checkbox" checked={graphSettings[planet.key].natal} className="w-4 h-4" />
                <input type="checkbox" checked={graphSettings[planet.key].progressed} className="w-4 h-4" />
                <input type="checkbox" checked={graphSettings[planet.key].transit} className="w-4 h-4" />
              </div>
            ))}
          </div>

      
          <div className="flex items-center justify-center gap-8">
            {[
              { key: 'pluto', symbol: '♇', color: 'text-purple-700' },
              { key: 'chiron', symbol: '⚷', color: 'text-gray-600' },
              { key: 'northNode', symbol: '☊', color: 'text-gray-600' },
            ].map(planet => (
              <div key={planet.key} className="flex items-center gap-2">
                <span className={`text-2xl ${planet.color}`}>{planet.symbol}</span>
                <input type="checkbox" checked={graphSettings[planet.key].natal} className="w-4 h-4" />
                <input type="checkbox" checked={graphSettings[planet.key].progressed} className="w-4 h-4" />
                <input type="checkbox" checked={graphSettings[planet.key].transit} className="w-4 h-4" />
              </div>
            ))}
          </div>

     
          <div className="flex items-center justify-center gap-8">
            {[
              { key: 'ascendant', symbol: 'AS' },
              { key: 'mc', symbol: 'MC' },
            ].map(planet => (
              <div key={planet.key} className="flex items-center gap-2">
                <span className="text-xl font-semibold">{planet.symbol}</span>
                <input type="checkbox" checked={graphSettings[planet.key].natal} className="w-4 h-4" />
                <input type="checkbox" checked={graphSettings[planet.key].progressed} className="w-4 h-4" />
                <input type="checkbox" checked={graphSettings[planet.key].transit} className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-center font-semibold mb-4 border-b border-gray-300 pb-2">
          Aspects
        </h3>

        <div className="flex items-center justify-center gap-6 mb-6">
          {[
            { key: 'conjunction', symbol: '☌' },
            { key: 'opposition', symbol: '☍' },
            { key: 'square', symbol: '□' },
            { key: 'trine', symbol: '△' },
            { key: 'sextile', symbol: '✶' },
            { key: 'quincunx', symbol: '⚻' },
            { key: 'semisextile', symbol: '⚺' },
            { key: 'sesquisquare', symbol: '⚼' },
          ].map(aspect => (
            <div key={aspect.key} className="flex items-center gap-2">
              <span className="text-2xl">{aspect.symbol}</span>
              <input type="checkbox" checked={graphAspects[aspect.key]} className="w-4 h-4" />
            </div>
          ))}
        </div>

      
        <h3 className="text-center font-semibold mb-4 border-b border-gray-300 pb-2">
          Types
        </h3>

        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={graphTypes.progressedToNatal} className="w-4 h-4" />
            <span className="text-sm">Progressed to Natal</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={graphTypes.transitingToNatal} className="w-4 h-4" />
            <span className="text-sm">Transiting to Natal</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={graphTypes.progressedToProgressed} className="w-4 h-4" />
            <span className="text-sm">Progressed to Progressed</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={graphTypes.transitingToTransiting} className="w-4 h-4" />
            <span className="text-sm">Transiting to Transiting</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={graphTypes.stations} className="w-4 h-4" />
            <span className="text-sm">Stations</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={graphTypes.houseIngresses} className="w-4 h-4" />
            <span className="text-sm">House Ingresses</span>
          </div>
        </div>
      </div>

    
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-6">SAVE/LOAD SETTINGS</h2>
        
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex items-center gap-4">
            <label className="font-medium whitespace-nowrap">Settings Name:</label>
            <input 
              type="text"
              value={settingsName}
              onChange={(e) => setSettingsName(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button className="w-full bg-blue-100 hover:bg-blue-200 text-gray-700 font-medium py-3 rounded transition-colors">
            Save Settings ⌘
          </button>

          <button className="w-full bg-blue-100 hover:bg-blue-200 text-gray-700 font-medium py-3 rounded transition-colors">
            Apply Without Saving
          </button>

          <button className="w-full bg-blue-100 hover:bg-blue-200 text-gray-700 font-medium py-3 rounded transition-colors">
            Apply Default Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;