import { atom } from 'jotai';
import { scoreboradDefaultValues } from '../defaultValues/scoreboard';

export const scoreboradInfoAtom = atom(scoreboradDefaultValues);

// export const turnPhaseAtom = selector({
//   key: 'turnPhaseAtom',
//   get: ({ get }) => get(scoreboradInfoAtom).Phase.TurnPhase,
//   set: ({ get, set }, newValue) => {
//     const scoreboradInfo = get(scoreboradInfoAtom);
//     const new = {...scoreboradInfo}
//     set(scoreboradInfoAtom, {

//     });
//   }
// });
