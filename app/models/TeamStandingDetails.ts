import { TeamGoals } from './TeamGoals';

export interface TeamStandingDetails {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: TeamGoals;
}
