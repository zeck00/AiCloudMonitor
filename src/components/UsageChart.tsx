import React from 'react';
import { LineChart, BarChart } from 'lucide-react';
import { ResourceUsage } from '../types';

interface UsageChartProps {
  usage: ResourceUsage;
}

const UsageChart: React.FC<UsageChartProps> = ({ usage }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-100">Resource Usage</h2>
        <div className="flex space-x-2">
          <LineChart className="text-blue-400 w-5 h-5" />
          <BarChart className="text-blue-400 w-5 h-5" />
        </div>
      </div>
      <div className="h-[200px] relative">
        <div className="absolute bottom-0 left-0 w-full h-[60%] opacity-75 bg-gradient-to-t from-blue-500/0 to-blue-500/20" 
             style={{ height: `${usage.cpu}%` }} />
        <div className="absolute bottom-0 left-0 w-full h-[40%] opacity-75 bg-gradient-to-t from-green-500/0 to-green-500/20"
             style={{ height: `${usage.memory}%` }} />
        <div className="absolute bottom-0 left-0 w-full h-[30%] opacity-75 bg-gradient-to-t from-purple-500/0 to-purple-500/20"
             style={{ height: `${usage.network}%` }} />
        
        <div className="absolute top-0 right-0 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-xs text-gray-400">CPU: {usage.cpu}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-gray-400">Memory: {usage.memory}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="text-xs text-gray-400">Network: {usage.network}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageChart;