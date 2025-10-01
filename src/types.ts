export interface HistoricalEvent {
  id: number;
  year: number;
  description: string;
}
export interface Category {
  id: number;
  name: string;
  events: HistoricalEvent[];
}
