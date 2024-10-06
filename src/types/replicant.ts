// Replicantsの型を定義
export interface ReplicantMap {
  // Sample
  yugioh: {
    name_jp: string | null
  }[];
  // playerName2p: string;
}

// Replicantsの初期値を定義
export const replicantDefaultValues: ReplicantMap = {
  // Sample
  yugioh: [],
  // playerName2p: '',
};
