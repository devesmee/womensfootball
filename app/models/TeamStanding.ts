import { Team } from './Team';
import { TeamStandingDetails } from './TeamStandingDetails';

export interface TeamStanding {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  all: TeamStandingDetails;
}
