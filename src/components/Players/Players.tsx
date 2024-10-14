import { IconButton, Stack } from '@mui/material';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import { Player } from './Player';
import { useSetAtom } from 'jotai';
import { playerNameSwapAtom } from '../../atoms/scoreboardAtom';

export const Players = () => {
  const playerNameSwap = useSetAtom(playerNameSwapAtom);
  return (
    <Stack direction="row" spacing={1}>
      <Player side="Red" />
      <IconButton color="primary" aria-label="playerNameSwap" onClick={playerNameSwap} size="small">
        <SwapHorizontalCircleRoundedIcon />
      </IconButton>
      <Player side="Blue" />
    </Stack>
  );
};
