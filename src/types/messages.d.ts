import {Tweets, Run, TweetsTemp} from "./replicants";
import { Turn } from "./scoreborad";

export type MessageMap = {
  search: { data: {word: string, side: Turn} };
};
