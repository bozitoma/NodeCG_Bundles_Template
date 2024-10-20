import { Stack } from '@mui/material';
import { memo } from 'react';
import { PhaseDisplay } from './PhaseDisplay';
import { TitleDivider } from '../TitleDivider';

export const Option = memo(() => {
  return (
    <Stack spacing={2} direction="row" alignItems="center" justifyContent="space-between">
      <TitleDivider text="Phase Display" />
      <PhaseDisplay />
    </Stack>
  );
});
