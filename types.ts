export interface Tier {
  name: string;
  range: string;
  bonus: string;
  description: string;
  icon: 'crown' | 'briefcase' | 'users' | 'user';
  color: string;
}

export interface DistributionItem {
  name: string;
  value: number;
  description: string;
}