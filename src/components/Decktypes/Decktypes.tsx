import { IconButton, Stack } from '@mui/material';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import { Decktype } from './Decktype';
import { useSetAtom } from 'jotai';
import { decktypeSwapAtom } from '../../atoms/scoreboardAtom';

export const Decktypes = () => {
  const decktypeSwap = useSetAtom(decktypeSwapAtom);
  return (
    <Stack direction="row" spacing={1}>
      <Decktype side="Red" />
      <IconButton color="primary" aria-label="playerNameSwap" onClick={decktypeSwap} size="small">
        <SwapHorizontalCircleRoundedIcon />
      </IconButton>
      <Decktype side="Blue" />
    </Stack>
  );
}
