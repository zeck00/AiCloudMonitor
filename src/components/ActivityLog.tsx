import React from 'react';
import { Activity } from 'lucide-react';
import { LogEntry } from '../types';

interface ActivityLogProps {
  logs: LogEntry[];
}

export const ActivityLog: React.FC<ActivityLogProps> = ({ logs }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-100">System Activity</h2>
        <Activity className="text-blue-400 w-5 h-5" />
      </div>
      <div className="space-y-3">
        {logs.map((log) => (
          <div
            key={log.id}
            className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:bg-gray-800/80 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400">{log.timestamp}</p>
                <p className="text-sm text-gray-100 mt-1">{log.event}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  log.type === 'info'
                    ? 'bg-blue-500/20 text-blue-400'
                    : log.type === 'warning'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {log.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};