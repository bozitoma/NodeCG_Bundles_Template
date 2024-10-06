import { atom } from 'recoil';
import { scoreboradDefaultValues } from '../defaultValues/scoreboard';

export const scoreboradInfoAtom = atom({
  key: 'scoreboradInfoAtom',
  default: scoreboradDefaultValues
});
