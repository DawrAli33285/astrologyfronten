import React from 'react';

export default function TrueSkyLanding() {
  return (
    <div className="min-h-screen bg-white">
    
      <header className="py-6 px-4 text-center border-b border-gray-200">
        <h2 className="text-sm tracking-widest text-gray-600 uppercase">
          Online Astrology Software
        </h2>
      </header>


      <section className="py-12 px-4 text-center">
        <h1 className="text-[30px] md:text-5xl font-bold text-gray-900 mb-2">
          TRUE SKY
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          ONLINE ASTROLOGY SOFTWARE
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded font-medium transition">
          LOGIN WITH GOOGLE
        </button>

    
        <div className="flex justify-center gap-6 my-8 text-xs text-gray-600">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mb-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span>SYNASTRY</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mb-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>COMPOSITE</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mb-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <span>CHART</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mb-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span>DOCS</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mb-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span>SETTINGS</span>
          </div>
        </div>

        
        <div className="max-w-xl mx-auto my-8">
          <img 
            src="https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=600&h=600&fit=crop" 
            alt="Astrology Chart"
            className="w-full rounded-full shadow-lg"
          />
        </div>
      </section>

 
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-[30px] md:text-4xl font-bold text-center mb-12">
          Accessible anywhere, anytime, on any device.
        </h2>
        <div className="max-w-6xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop" 
            alt="Multiple device view"
            className="w-full rounded-lg shadow-xl"
          />
        </div>
        <p className="text-center text-lg text-gray-700 mt-8">
          No astrology knowledge needed. Info, graphs, and reports all in one click.
        </p>
      </section>

 
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=800&h=500&fit=crop" 
            alt="Chart with information"
            className="w-full rounded-lg shadow-xl mb-8"
          />
          <p className="text-center text-lg text-gray-700 mb-8">
            Full chart configuration at your fingertips...
          </p>
        </div>
      </section>

     
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-[30px] md:text-4xl font-bold text-center mb-16">
          FEATURES
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <FeatureItem text="All Charts Calculated with One Click" highlight="One Click" />
            <FeatureItem text="Save up to 5K Charts Accessible Anywhere" highlight="5K Charts" />
            <FeatureItem text="Access on Any Device with an Internet Connection" highlight="Any Device" />
            <FeatureItem text="One Account for all your Devices" highlight="all your Devices" />
            <FeatureItem text="One-click Info, Graphs, and Reports" highlight="Info, Graphs, and Reports" />
            <FeatureItem text="Print, Download, and Share Quickly and Easily" highlight="Print, Download, and Share" />
          </div>
          
          <div className="space-y-4">
            <FeatureItem text="Natal, Progressed, Transit, and Return" highlight="Natal, Progressed, Transit, and Return" />
            <FeatureItem text="Highly Visual Progression and Transit Graph" highlight="Progression and Transit Graph" />
            <FeatureItem text="Synastry and Combined for Compatibility" highlight="Synastry and Combined" />
            <FeatureItem text="Easily Upload all your Existing Charts" highlight="Existing Charts" />
            <FeatureItem text="Built-in Chat for Sharing and Support" highlight="Built-in Chat" />
            <FeatureItem text="Advanced Settings: Sidereal, Asteroids, and more..." highlight="Advanced Settings" />
          </div>
        </div>

      
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">FREE TIER OR</h3>
          <h3 className="text-3xl font-bold mb-6">$15/MONTH</h3>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded font-medium transition">
            LOGIN WITH GOOGLE
          </button>
        </div>

       
        <div className="max-w-4xl mx-auto">
          <table className="w-full bg-white rounded-lg shadow overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Feature</th>
                <th className="px-6 py-4 text-center font-semibold">Free</th>
                <th className="px-6 py-4 text-center font-semibold bg-indigo-50">$15/mo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <TableRow feature="All charts with one click" free={true} paid={true} />
              <TableRow feature="Access on any device" free={true} paid={true} />
              <TableRow feature="Advanced settings (sidereal, asteroids...)" free={true} paid={true} />
              <TableRow feature="Natal, Progressed, Transit, Return" free={true} paid={true} />
              <TableRow feature="Synastry & Combined" free={true} paid={true} />
              <TableRow feature="One-click planet info" free={true} paid={true} />
              <TableRow feature="Print and share charts" free={true} paid={true} />
              <TableRow feature="Save up to 5K charts" free={false} paid={true} />
              <TableRow feature="Save advanced settings" free={false} paid={true} />
              <TableRow feature="One-click chart reports" free={false} paid={true} />
              <TableRow feature="Progression & Transit graph" free={false} paid={true} />
              <TableRow feature="Import & Export charts" free={false} paid={true} />
              <TableRow feature="Community chat" free={false} paid={true} />
            </tbody>
          </table>
        </div>
      </section>

 
      <section className="py-16 px-4 text-center">
        <h2 className="text-[30px] md:text-4xl font-bold mb-8">
          Astrology for everyone, anywhere
        </h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded font-medium transition">
          LOGIN WITH GOOGLE
        </button>
      </section>


      <footer className="py-8 px-4 text-center border-t border-gray-200">
        <p className="text-gray-600">
          HAVE QUESTIONS ABOUT TRUE SKY?{' '}
          <a href="#contact" className="text-indigo-600 hover:text-indigo-700 font-medium">
            CONTACT US
          </a>
        </p>
      </footer>
    </div>
  );
}

function FeatureItem({ text, highlight }) {
  const parts = text.split(highlight);
  return (
    <p className="text-gray-700">
      {parts[0]}
      <span className="font-bold">{highlight}</span>
      {parts[1]}
    </p>
  );
}

function TableRow({ feature, free, paid }) {
  return (
    <tr>
      <td className="px-6 py-4 text-gray-700">{feature}</td>
      <td className="px-6 py-4 text-center">
        {free && (
          <svg className="w-5 h-5 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </td>
      <td className="px-6 py-4 text-center bg-indigo-50">
        {paid && (
          <svg className="w-5 h-5 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </td>
    </tr>
  );
}