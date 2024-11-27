import { ServerLocation, LogEntry, Notification, ResourceUsage } from '../types';

export const generateMockServerLocations = (): ServerLocation[] => [
  { id: 'us1', name: 'US East', lat: 40.7128, lng: -74.0060, status: 'operational', usage: Math.floor(Math.random() * 100) },
  { id: 'eu1', name: 'Europe', lat: 51.5074, lng: -0.1278, status: Math.random() > 0.7 ? 'issue' : 'operational', usage: Math.floor(Math.random() * 100) },
  { id: 'ap1', name: 'Asia Pacific', lat: 35.6762, lng: 139.6503, status: 'operational', usage: Math.floor(Math.random() * 100) },
];

export const generateMockLogs = (): LogEntry[] => {
  const events = [
    'File Uploaded: project_backup.zip',
    'Threat Detected: Suspicious IP blocked',
    'Backup Completed: Database snapshot',
    'System Update: Security patches applied',
    'User Authentication Failed',
    'New Instance Launched',
  ];

  return Array.from({ length: 4 }, (_, i) => ({
    id: (i + 1).toString(),
    timestamp: new Date(Date.now() - i * 60000).toISOString().replace('T', ' ').slice(0, 19),
    event: events[Math.floor(Math.random() * events.length)],
    type: ['info', 'warning', 'error'][Math.floor(Math.random() * 3)] as 'info' | 'warning' | 'error',
  }));
};

export const generateMockNotifications = (): Notification[] => [
  {
    id: '1',
    title: 'Security Alert',
    message: 'Phishing attempt blocked from IP 192.168.1.100',
    timestamp: '2 minutes ago',
    type: 'warning',
  },
  {
    id: '2',
    title: 'System Alert',
    message: 'Anomaly detected in Server A - High CPU Usage',
    timestamp: '5 minutes ago',
    type: 'error',
  },
  {
    id: '3',
    title: 'Security Update',
    message: 'Firewall rules updated successfully',
    timestamp: '10 minutes ago',
    type: 'success',
  },
];

export const generateMockResourceUsage = (): ResourceUsage => ({
  cpu: Math.floor(Math.random() * 100),
  memory: Math.floor(Math.random() * 100),
  network: Math.floor(Math.random() * 100),
  timestamp: new Date().toISOString(),
});