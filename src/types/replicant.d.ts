// Replicantsの型を定義
export interface ReplicantMap {
  // Sample
  yugiohCardRedPlayer: {
    name_jp: string | null;
  }[];
  yugiohCardBluePlayer: {
    name_jp: string | null;
  }[];
  // yugioh: {
  //   Red: { name_jp: string[] | null };
  //   Blue: { name_jp: string[] | null };
  // };
  // playerName2p: string;
}
