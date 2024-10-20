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
  name: '',
  decktype: '',
  card: '',
  score: 0,
};
