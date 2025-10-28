import React, { useState } from 'react';
import { Upload, Download } from 'lucide-react';

export default function AdminProfilePage() {
  const [deleteChartsChecked, setDeleteChartsChecked] = useState(false);
  const [deleteAccountChecked, setDeleteAccountChecked] = useState(false);
  const [defaultLocation, setDefaultLocation] = useState('New York City, New York, United States');

  const handleImportCharts = () => {
    console.log('Import charts clicked');
  };

  const handleExportCharts = () => {
    console.log('Export charts clicked');
  };

  const handleDeleteAllCharts = () => {
    if (deleteChartsChecked) {
      console.log('Delete all charts confirmed');
    } else {
      alert('Please confirm deletion by checking the box');
    }
  };

  const handleUpdateLocation = () => {
    console.log('Update location:', defaultLocation);
  };

  const handleLogOut = () => {
    console.log('Log out clicked');
  };

  const handleUnlockFeatures = () => {
    console.log('Unlock full features clicked');
  };

  const handleDeleteAccount = () => {
    if (deleteAccountChecked) {
      console.log('Delete account confirmed');
    } else {
      alert('Please confirm irreversible deletion by checking the box');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
     
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
            IMPORT/EXPORT CHARTS
          </h2>
          
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={handleImportCharts}
              className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Upload size={16} />
              Import Charts
            </button>
            <button
              onClick={handleExportCharts}
              className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Download size={16} />
              Export Charts
            </button>
          </div>

          <div className="flex flex-col items-center">
            <button
              onClick={handleDeleteAllCharts}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors mb-3"
            >
              Delete All Charts
            </button>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={deleteChartsChecked}
                onChange={(e) => setDeleteChartsChecked(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span>I confirm deletion of all charts in my account</span>
            </label>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
            ACCOUNT SETTINGS
          </h2>

          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold mb-3">
              M
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Muhammad Ali</h3>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              Update Name/Photo
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <label className="text-gray-700">Default Location:</label>
            <input
              type="text"
              value={defaultLocation}
              onChange={(e) => setDefaultLocation(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleUpdateLocation}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Update
            </button>
          </div>

          <div className="flex justify-center mb-6">
            <button
              onClick={handleLogOut}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Log Out
            </button>
          </div>

          <div className="text-center mb-3">
            <p className="text-gray-700 mb-3">Subscription status: None</p>
            <button
              onClick={handleUnlockFeatures}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Unlock Full Features
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="flex flex-col items-center">
              <button
                onClick={handleDeleteAccount}
                className="px-6 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition-colors mb-3"
              >
                Delete Account
              </button>
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={deleteAccountChecked}
                  onChange={(e) => setDeleteAccountChecked(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span>I confirm irreversible deletion of my account and charts</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}