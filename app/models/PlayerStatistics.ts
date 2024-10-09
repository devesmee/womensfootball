import { PlayerGoals } from "./PlayerGoals";
import { Team } from "./Team";

export interface PlayerStatistics {
    team: Team;
    goals: PlayerGoals;
}