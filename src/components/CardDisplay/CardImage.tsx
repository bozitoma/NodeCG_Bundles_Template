import { Button, Card, CardActions, CardHeader, CardMedia } from '@mui/material';
import NoImage from '../../assets/card/noImage.jpg';
import { Turn } from '../../types/scoreborad';
import { useAtomValue } from 'jotai';
import { cardAtomFamily } from '../../atoms/scoreboardAtom';
import { getCardImage } from '../../util/getImage';

export const CardImage = ({ side }: { side: Turn }) => {
  const card = useAtomValue(cardAtomFamily(side));
  console.log(card, getCardImage(card));

  return (
    <Card sx={{ width: 300, backgroundColor: 'whitesmoke' }}>
      <CardHeader
        title={card}
        disableTypography // 通常textのスタイルを適用させる
        sx={{
          minHeight: 40,
        }}
      />
      <CardMedia
        component="img"
        image={getCardImage(card).includes('undefined') ? NoImage:getCardImage(card) }
        alt={side}
        aspect-ratio={50 / 73} // カード画像の比率
      />
      <CardActions>
        <Button size="small" color="error">
          reset
        </Button>
      </CardActions>
    </Card>
  );
};
