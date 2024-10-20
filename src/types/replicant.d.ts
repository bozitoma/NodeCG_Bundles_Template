import { Life, Phase, Player, Turn } from "./scoreborad";

// Replicantsの型を定義
export interface ReplicantMap {
  yugiohCardRedPlayer: {
    name_jp: string | null;
  }[];
  yugiohCardBluePlayer: {
    name_jp: string | null;
  }[];
  Round: string;
  BestOf: string;
  Phase: Phase;
  Turn: Turn;
  Player: Player;
  Life: Life;
  PhaseDisplay: boolean;
  CardDisplay: {
    Red: boolean;
    Blue: boolean;
  };
}
