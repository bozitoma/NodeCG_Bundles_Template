import type { CreateNodecgConstructor, CreateNodecgInstance } from 'ts-nodecg/browser';
import type { ReplicantMap } from './replicant';
import type { MessageMap } from './messages';

declare global {
  const nodecg: CreateNodecgInstance<'yugioh', undefined, ReplicantMap, MessageMap>;
  const NodeCG: CreateNodecgConstructor<'yugioh', undefined, ReplicantMap, MessageMap>;
}
