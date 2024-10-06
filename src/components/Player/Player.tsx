import { Button, Stack } from '@mui/material';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import { useRecoilState } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { PlayerSolo } from './PlayerSolo';

export function Player() {
  const [scoreboradInfo, setScoreboradInfo] = useRecoilState(scoreboradInfoAtom);

  const playerNameSwap = () => {
    setScoreboradInfo((prev) => ({
      ...prev,
      Player: {
        Red: {
          ...prev.Player.Red,
          name: scoreboradInfo.Player.Blue.name,
        },
        Blue: {
          ...prev.Player.Blue,
          name: scoreboradInfo.Player.Red.name,
        },
      },
    }));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Stack spacing={1}>
        <PlayerSolo side="Red" />
      </Stack>
      <Button variant="text" onClick={playerNameSwap}>
        <SwapHorizontalCircleRoundedIcon />
      </Button>
      <Stack spacing={1}>
        <PlayerSolo side="Blue" />
      </Stack>
    </Stack>
  );
}
