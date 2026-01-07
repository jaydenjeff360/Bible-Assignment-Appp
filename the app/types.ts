
export enum View {
  DASHBOARD = 'DASHBOARD',
  USERS = 'USERS',
  COURSES = 'COURSES',
  REPORTS = 'REPORTS',
  SETTINGS = 'SETTINGS',
  LOGIN = 'LOGIN'
}

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  progress: number;
  status: 'Active' | 'Paused' | 'Inactive';
  lastActive: string;
  avatar?: string;
}

export interface KPI {
  label: string;
  value: string;
  change: string;
  icon: string;
  trend: 'up' | 'down' | 'neutral';
}

export interface MessagePart {
  text: string;
  isBold?: boolean;
  isItalic?: boolean;
}
