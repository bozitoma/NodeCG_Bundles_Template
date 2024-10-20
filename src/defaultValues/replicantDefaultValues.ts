import { ReplicantMap } from '../types/replicant';
import { playerDefaultValues } from './scoreboard';

// Replicantsの初期値を定義
export const replicantDefaultValues: ReplicantMap = {
  // Sample
  yugiohCardRedPlayer: [
    {
      name_jp: '',
    },
  ],
  yugiohCardBluePlayer: [
    {
      name_jp: '',
    },
  ],
  Round: '',
  BestOf: '',
  Player: {
    Red: playerDefaultValues,
    Blue: playerDefaultValues,
  },
  Life: {
    Red: 8000,
    Blue: 8000
  },
  Phase: 'DRAW PHASE',
  PhaseDisplay: true,
  Turn: 'Red',
  CardDisplay: {
    Red: true,
    Blue: true
  }
};
