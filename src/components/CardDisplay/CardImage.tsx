import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import NoImage from '../../assets/card/noImage.jpg';
import { Turn } from '../../types/scoreborad';
import { useAtom } from 'jotai';
import { cardAtomFamily } from '../../atoms/scoreboardAtom';
import { getCardImage } from '../../util/getImage';
import { memo, MouseEvent, useCallback } from 'react';
import { useReplicant } from '../../hooks/useReplicant';

const DisplaySwitchButton = memo(({ side }: { side: Turn }) => {
  const [repCardDisplay, setRepCardDisplay] = useReplicant('CardDisplay');
  const handleChange = useCallback(
    (_event: MouseEvent<HTMLElement>, newAlignment: boolean) => {
      if (newAlignment !== null) {
        if (repCardDisplay) setRepCardDisplay({ ...repCardDisplay, [side]: newAlignment });
      }
    },
    [repCardDisplay]
  );
  return (
    <ToggleButtonGroup
      id="ToggleTurn"
      size="small"
      value={repCardDisplay ? repCardDisplay[side] : true} // 選択中のボタンを取得
      exclusive // 一度に1つのボタンのみを選択する属性
      onChange={handleChange} // クリック時の挙動
      fullWidth
    >
      <ToggleButton value={false} color="error">
        Undisplay
      </ToggleButton>
      <ToggleButton value={true} color="primary">
        Display
      </ToggleButton>
    </ToggleButtonGroup>
  );
});

export const CardImage = ({ side }: { side: Turn }) => {
  const [card, setCard] = useAtom(cardAtomFamily(side));
  const reset = useCallback(() => {
    setCard('');
  }, []);
  return (
    <Card sx={{ width: 300, backgroundColor: 'whitesmoke' }}>
      <CardHeader
        title={card}
        disableTypography // 通常のtextのスタイルを適用させる
        sx={{
          minHeight: 40,
        }}
      />
      <CardMedia
        component="img"
        image={getCardImage(card).includes('undefined') ? NoImage : getCardImage(card)}
        alt={side}
        aspect-ratio={50 / 73} // カード画像の比率
      />
      <Stack direction="row" justifyContent="space-between">
        <CardActions>
          <Button size="small" color="error" onClick={reset}>
            reset
          </Button>
        </CardActions>
        <CardActions>
          <DisplaySwitchButton side={side} />
        </CardActions>
      </Stack>
    </Card>
  );
};
