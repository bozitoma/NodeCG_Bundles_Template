import type { NodeCG } from './nodecg';
// import { YugiohDb } from './class';
import { PrismaClient } from '@prisma/client';
// import Database from 'better-sqlite3';

export default (nodecg: NodeCG) => {
  const prisma = new PrismaClient();

  // サーバー側にログを出す場合のコード
  const log = new nodecg.Logger('yugioh');

  const search = async (word: string) => {
    const result = await prisma.cards.findMany({
      where: {
        OR: [
          {
            name_jp: {
              contains: word,
            },
          },
          {
            name_jp_furigana: {
              contains: word,
            },
          },
        ],
      },
    });
    // const dbPath = './bundles/yugioh/src/db/yugioh.db'; //rootからの相対パス
    // const db = new Database(dbPath);

    log.info(result);

    const repYugioh = nodecg.Replicant('yugioh');
    repYugioh.value = result;
  };

  // const yugiohDb = new YugiohDb(nodecg);

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

  // nodecg.listenFor('alert', yugiohDb.alert);
  nodecg.listenFor('search', search);
  // nodecg.listenFor('test', (data) => {
  //   console.log(data);
  // });
};
