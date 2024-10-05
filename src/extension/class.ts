
// import NodeCG from '@nodecg/types';
import type { NodeCG } from './nodecg';
import Database from 'better-sqlite3';
import type { ReplicantMap } from '../types/replicant';

export class YugiohDb {
  constructor(nodecg: NodeCG) {
    this.nodecg = nodecg;
  }
  private nodecg;
  // dbPath = './bundles/yugioh/src/db/yugioh.db'; //rootからの相対パス
  private db = new Database('./bundles/yugioh/src/db/yugioh.db');

  private querySelectAllFromCards = 'SELECT name_jp FROM cards';

  // types = this.nodecg.bundleConfig

  alert = () => {
    // console.log('extensionは動いています');
    const result: ReplicantMap['yugioh'] = this.db.prepare(this.querySelectAllFromCards).all();
    // log.info(result);
    const repYugioh = this.nodecg.Replicant('yugioh');
    repYugioh.value = result;
    // log.info(repYugioh);
  };

  search = (word: string) => {
    const log = new this.nodecg.Logger('yugioh');
    const query = `SELECT name_jp FROM cards WHERE name_jp LIKE '%${word}%'`;
    const result = this.db.prepare(query).all();
    log.info(result);
    const repYugioh = this.nodecg.Replicant('yugioh');
    repYugioh.value = result;
  };
}
