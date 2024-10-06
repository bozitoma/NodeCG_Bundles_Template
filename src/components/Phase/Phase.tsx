
import { Stack } from '@mui/material';
import { TogglePlayerSide } from './TogglePlayerSide';
import { ToggleTurnPhase } from './ToggleTurnPhase';



export const Phase = () => {


  return (
    <Stack spacing={1} >
      <TogglePlayerSide />
      <ToggleTurnPhase />
    </Stack>
  );
};
