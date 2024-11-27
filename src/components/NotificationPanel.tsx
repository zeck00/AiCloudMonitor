import React from 'react';
import { Bell, X } from 'lucide-react';
import { Notification } from '../types';

interface NotificationPanelProps {
  notifications: Notification[];
  onRemoveNotification: (id: string) => void;
}

export const NotificationPanel: React.FC<NotificationPanelProps> = ({ 
  notifications, 
  onRemoveNotification 
}) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-100">Notifications</h2>
        <Bell className="text-blue-400 w-5 h-5" />
      </div>
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border ${
              notification.type === 'warning'
                ? 'bg-yellow-500/10 border-yellow-500/20'
                : notification.type === 'error'
                ? 'bg-red-500/10 border-red-500/20'
                : 'bg-green-500/10 border-green-500/20'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-100">{notification.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-2">{notification.timestamp}</p>
              </div>
              <button
                onClick={() => onRemoveNotification(notification.id)}
                className="text-gray-400 hover:text-gray-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};