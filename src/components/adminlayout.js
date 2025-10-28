import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const navItems = [
    { path: '/admin/main', label: 'MAIN', icon: '○' },
    { path: '/admin/transit', label: 'TRANSIT', icon: '◉' },
    { path: '/admin/graph', label: 'GRAPH', icon: '☰' },
    { path: '/admin/return', label: 'RETURN', icon: '↻' },
    { path: '/admin/settings', label: 'SETTINGS', icon: '⚙' },
  ];

  const bottomNavItems = [
    { path: '/admin/synastry', label: 'SYNASTRY', icon: '♡' },
    { path: '/admin/composite', label: 'COMPOSITE', icon: '◐' },
    { path: '/admin/chat', label: 'CHAT', icon: '⚉' },
    { path: '/admin/docs', label: 'DOCS', icon: '?' },
    { path: '/admin/account', label: 'ACCOUNT', icon: '👤' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <header className="bg-white shadow-md">
        <div className="px-10 py-5">
          <nav className="flex justify-center items-center gap-16">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `flex flex-col items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors ${
                    isActive ? 'text-gray-900' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className={`text-4xl ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                      {item.icon}
                    </div>
                    <div className={`text-xs tracking-wider ${isActive ? 'font-bold' : 'font-medium'}`}>
                      {item.label}
                    </div>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          
          <nav className="flex justify-center items-center gap-16 mt-5">
            {bottomNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `flex flex-col items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors ${
                    isActive ? 'text-gray-900' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className={`text-4xl ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                      {item.icon}
                    </div>
                    <div className={`text-xs tracking-wider ${isActive ? 'font-bold' : 'font-medium'}`}>
                      {item.label}
                    </div>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      
      <main className="p-10 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;