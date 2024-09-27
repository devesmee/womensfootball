import { Country } from './Country';
import { League } from './League';
import { Season } from './Season';

export interface LeagueDetails {
  league: League;
  seasons: Season[];
  country: Country;
}
