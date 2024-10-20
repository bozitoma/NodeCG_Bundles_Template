import { playerDefaultValues } from "../../defaultValues/scoreboard";

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

export type Life = {
  Red: number;
  Blue: number;
};

export type Turn = keyof Player

