import React, { useState, useCallback } from 'react';
import { StatusMap } from './components/StatusMap';
import { ActivityLog } from './components/ActivityLog';
import UsageChart from './components/UsageChart';
import { NotificationPanel } from './components/NotificationPanel';
import { RefreshCw } from 'lucide-react';
import { useInterval } from './hooks/useInterval';
import { 
  generateMockServerLocations, 
  generateMockLogs, 
  generateMockNotifications,
  generateMockResourceUsage 
} from './utils/mockData';
import type { ServerLocation, LogEntry, Notification, ResourceUsage } from './types';

function App() {
  const [serverLocations, setServerLocations] = useState<ServerLocation[]>(generateMockServerLocations());
  const [logs, setLogs] = useState<LogEntry[]>(generateMockLogs());
  const [notifications, setNotifications] = useState<Notification[]>(generateMockNotifications());
  const [resourceUsage, setResourceUsage] = useState<ResourceUsage>(generateMockResourceUsage());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const updateData = useCallback(() => {
    setServerLocations(generateMockServerLocations());
    setLogs(generateMockLogs());
    setResourceUsage(generateMockResourceUsage());
  }, []);

  useInterval(updateData, 5000); // Update every 5 seconds

  const handleRefresh = () => {
    setIsRefreshing(true);
    updateData();
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const handleRemoveNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Cloud Monitor
            </h1>
            <p className="text-gray-400 text-sm">Real-time cloud infrastructure monitoring</p>
          </div>
          <button 
            onClick={handleRefresh}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg border border-blue-500/20 transition-colors"
            disabled={isRefreshing}
          >
            <RefreshCw className={`w-4 h-4 text-blue-400 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className="text-blue-400">Refresh</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <StatusMap serverLocations={serverLocations} />
            <UsageChart usage={resourceUsage} />
          </div>
          <div className="space-y-6">
            <NotificationPanel 
              notifications={notifications}
              onRemoveNotification={handleRemoveNotification}
            />
            <ActivityLog logs={logs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;