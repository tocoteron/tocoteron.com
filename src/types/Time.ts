export interface Date {
  year: number;
  month: number;
  day: number;
}

export interface Period {
  since?: Date;
  until?: Date;
}
