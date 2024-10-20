import type { CreateNodecgConstructor, CreateNodecgInstance } from 'ts-nodecg/browser';
import type { ReplicantMap } from '../types/replicant';
import type { MessageMap } from '../types/messages';

export type NodeCG = CreateNodecgInstance<
  'yugioh',
  undefined,
  ReplicantMap,
  MessageMap
>;
