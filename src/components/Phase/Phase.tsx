
import { Stack } from '@mui/material';
import { ToggleTurn } from './ToggleTurn';
import { TogglePhase } from './TogglePhase';
import { PhaseController } from './PhaseController';
import { memo } from 'react';

export const Phase = memo(() => {
  return (
    <Stack spacing={2} >
      <ToggleTurn />
      <TogglePhase />
      <PhaseController />
    </Stack>
  );
});
