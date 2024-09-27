import { Goals } from './Goals';

export interface TeamStandingDetails {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}
