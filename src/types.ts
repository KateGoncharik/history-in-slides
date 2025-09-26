export interface HistoricalEvent {
  year: number;
  description?: string;
}
export interface Category {
  name: string;
  events: HistoricalEvent[];
}
