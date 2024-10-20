import { Turn } from '../types/scoreborad';
import type { NodeCG } from './nodecg';
import { PrismaClient } from '@prisma/client';

export default (nodecg: NodeCG) => {
  const prisma = new PrismaClient();

  const repRedPlayer = nodecg.Replicant('yugiohCardRedPlayer');
  const repBluePlayer = nodecg.Replicant('yugiohCardBluePlayer');

  // サーバー側にログを出す場合のコード
  const log = new nodecg.Logger('yugioh');

  const search = async ({ word, side }: { word: string, side: Turn}) => {
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
    log.info(result);
    if (side === 'Red') {
      repRedPlayer.value = result;
    } else {
      repBluePlayer.value = result;
    }
  };
  nodecg.listenFor('search', search);
};
