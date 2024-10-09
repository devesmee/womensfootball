import { Player } from './Player';
import { PlayerStatistics } from './PlayerStatistics';

export interface Topscorer {
  player: Player;
  statistics: PlayerStatistics[];
}
