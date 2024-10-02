
// import NodeCG from '@nodecg/types';
import NodeCG from '@nodecg/types';
import Database from 'better-sqlite3';

export class YugiohDb {
  constructor(nodecg: NodeCG.ServerAPI) {
    this.nodecg = nodecg
  }
  private nodecg
  // dbPath = './bundles/yugioh/src/db/yugioh.db'; //rootからの相対パス
  private db = new Database('./bundles/yugioh/src/db/yugioh.db');

  private querySelectAllFromCards = 'SELECT * FROM card_types';

  alert = () => {
    // console.log('extensionは動いています');
    const result = this.db.prepare(this.querySelectAllFromCards).all();
    // log.info(result);
    const repYugioh = this.nodecg.Replicant('yugioh');
    repYugioh.value = result[2].name_jp;
    // log.info(repYugioh);
  };
}
