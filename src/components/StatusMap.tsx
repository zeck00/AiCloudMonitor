import React from 'react';
import { Globe2 } from 'lucide-react';
import { ServerLocation } from '../types';

interface StatusMapProps {
  serverLocations: ServerLocation[];
}

export const StatusMap: React.FC<StatusMapProps> = ({ serverLocations }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-100">Global Server Status</h2>
        <Globe2 className="text-blue-400 w-5 h-5" />
      </div>
      <div className="relative h-[300px] bg-gray-800 rounded-lg overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-blue-500/10" />
        
        {serverLocations.map((location) => (
          <div
            key={location.id}
            className="absolute w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{
              left: `${((location.lng + 180) * 100) / 360}%`,
              top: `${((location.lat + 90) * 100) / 180}%`,
            }}
          >
            <div
              className={`w-full h-full rounded-full ${
                location.status === 'operational' ? 'bg-green-500' : 'bg-red-500'
              } animate-pulse`}
            />
            <div className="hidden group-hover:block absolute z-10 p-3 bg-gray-800 rounded-lg shadow-xl -translate-y-full -translate-x-1/2 -mt-2 w-48">
              <p className="text-sm font-medium text-gray-100">{location.name}</p>
              <p className="text-xs text-gray-400 mt-1">Server ID: {location.id}</p>
              <p className="text-xs text-gray-400">Usage: {location.usage}%</p>
              <div className="mt-2 w-full bg-gray-700 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: `${location.usage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};