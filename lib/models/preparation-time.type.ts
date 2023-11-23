export enum UNITS {
  HOURS = "HOURS",
  MINUTES = "MINUTES",
}

export interface PreparationTime {
  time: number;
  unit: UNITS;
}
