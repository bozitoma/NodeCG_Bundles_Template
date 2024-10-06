import { scoreboradDefaultValues } from "../../defaultValues/scoreboard";

export type PlayerSide = keyof typeof scoreboradDefaultValues.Player;

export type TurnPhase =
  | 'DRAW PHASE'
  | 'STANDBY PHASE'
  | 'MAIN PHASE 1'
  | 'BATTLE PHASE'
  | 'MAIN PHASE 2'
  | 'END PHASE';

export type Phase = {
  PlayerSide: playerSide;
  TurnPhase: tunePhase;
};
