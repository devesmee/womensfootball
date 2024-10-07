import { Country } from './Country';
import { League } from './League';
import { Season, SeasonJSON } from './Season';

export interface LeagueDetailsJSON {
  league: League;
  seasons: SeasonJSON[];
  country: Country;
}

export class LeagueDetails {
  readonly league: League;
  readonly seasons: Season[] = [];
  readonly country: Country;

  constructor(readonly json: LeagueDetailsJSON) {
    this.league = json.league;
    this.country = json.country;
    const seasonsJSON = json.seasons;

    for (const seasonJSON of seasonsJSON) {
      this.seasons.push(new Season(seasonJSON));
    }
    this.seasons = this.#_sortedSeasons();
  }

  #_sortedSeasons(): Season[] {
    return this.seasons.sort((a, b) => {
      return b.year - a.year;
    });
  }
}
