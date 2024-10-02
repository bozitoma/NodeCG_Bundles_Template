import NodeCG from '@nodecg/types';
import { YugiohDb } from './class';
// import Database from 'better-sqlite3';


export default (nodecg: NodeCG.ServerAPI) => {
  // const dbPath = './bundles/yugioh/src/db/yugioh.db'; //rootからの相対パス
  // const db = new Database(dbPath);

  const yugiohDb = new YugiohDb(nodecg);

  // サーバー側にログを出す場合のコード
  // const log = new nodecg.Logger('yugioh');


  // const querySelectAllFromCards = 'SELECT * FROM card_types';

  // const repPokedex = nodecg.Replicant('yugioh');
  // Sample
  // const alert = () => {
  //   // console.log('extensionは動いています');
  //   const result = db.prepare(querySelectAllFromCards).all();
  //   log.info(result);
  //   const repYugioh = nodecg.Replicant('yugioh');
  //   repYugioh.value = result[1].name_jp;
  //   log.info(repYugioh);
  // };

  // const queryDataPokedex = db.prepare('SELECT * FROM pokemon').all();

  // repYugioh.value = queryDataPokedex;

  nodecg.listenFor('alert',yugiohDb.alert);
};
