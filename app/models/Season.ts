export interface SeasonJSON {
  year: number;
  start: string;
  end: string;
}
export class Season {
  readonly year: number;
  readonly start: string;
  readonly end: string;
  readonly seasonYears: string;

  constructor(readonly json: SeasonJSON) {
    this.year = json.year;
    this.start = json.start;
    this.end = json.end;
    this.seasonYears = this.#_getSeasonYears(json.start, json.end);
  }

  #_getSeasonYears(start: string, end: string): string {
    const startDate = new Date(start);
    const endDate = new Date(end);

    // If season starts and ends in the same year, only return that year
    // Otherwise return start and end year
    if (startDate.getFullYear() == endDate.getFullYear()) {
      return `${this.year}`;
    } else {
      return `${startDate.getFullYear()} - ${endDate.getFullYear()}`;
    }
  }
}
