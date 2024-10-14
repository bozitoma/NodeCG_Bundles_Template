import { playerDefaultValues, scoreboradDefaultValues } from "../../defaultValues/scoreboard";

export type Turn = keyof typeof scoreboradDefaultValues.Player;

export type Phase =
  | 'DRAW PHASE'
  | 'STANDBY PHASE'
  | 'MAIN PHASE 1'
  | 'BATTLE PHASE'
  | 'MAIN PHASE 2'
  | 'END PHASE';

export type Scoreboard = {
  Round: string;
  Bestof: string;
  Turn: Turn;
  Phase: Phase,
};

export type Player = {
  Red: typeof playerDefaultValues;
  Blue: typeof playerDefaultValues;
};
