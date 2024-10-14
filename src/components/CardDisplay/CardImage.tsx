import { Button, Card, CardActions, CardHeader, CardMedia } from '@mui/material';
import CardImg from '../../assets/card/青眼の白龍.jpg';
import { Turn } from '../../types/scoreborad';
import { useAtomValue } from 'jotai';
import { cardAtomFamily } from '../../atoms/scoreboardAtom';

export const CardImage = ({ side }: { side: Turn }) => {
  const card = useAtomValue(cardAtomFamily(side));
  return (
    <Card sx={{ width: 300, backgroundColor: 'whitesmoke' }}>
      <CardHeader
        title={card}
        disableTypography // 通常textのスタイルを適用させる
        sx={{
          minHeight: 40
        }}
      />
      <CardMedia
        component="img"
        image={CardImg}
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
