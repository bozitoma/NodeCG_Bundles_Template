import { Phase, TurnPhase } from '../types/scoreborad';

export const turnPhases: TurnPhase[] = [
  'DRAW PHASE',
  'STANDBY PHASE',
  'MAIN PHASE 1',
  'BATTLE PHASE',
  'MAIN PHASE 2',
  'END PHASE',
];

const phaseDefaultValues: Phase = {
  PlayerSide: 'Red',
  TurnPhase: 'DRAW PHASE',
};

const playerDefaultValues = {
  name: 'name',
  card: '',
  score: 0,
};

export const scoreboradDefaultValues = {
  // Message: '',
  // TournamentName: '',
  Round: '',
  BestOf: '',
  Player: {
    Red: playerDefaultValues,
    Blue: playerDefaultValues,
  },
  Phase: phaseDefaultValues,
};
