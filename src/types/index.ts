export interface ServerLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: 'operational' | 'issue';
  usage: number;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  event: string;
  type: 'info' | 'warning' | 'error';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'warning' | 'error' | 'success';
}

export interface ResourceUsage {
  cpu: number;
  memory: number;
  network: number;
  timestamp: string;
}