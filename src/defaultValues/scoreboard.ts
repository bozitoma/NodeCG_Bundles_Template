import { Phase } from '../types/scoreborad';

export const phases: Phase[] = [
  'DRAW PHASE',
  'STANDBY PHASE',
  'MAIN PHASE 1',
  'BATTLE PHASE',
  'MAIN PHASE 2',
  'END PHASE',
];

export const playerDefaultValues = {
  name: 'name',
  decktype: '',
  life: 8000,
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
  Phase: phases,
};
