import { Stack } from '@mui/material';
import { LifePoint } from './LifePoint';
import { LifeControler } from './LifeControler';
import { Turn } from '../../types/scoreborad';

export const Life = ({ side }: { side: Turn }) => {
  return (
    <Stack spacing={2}>
      <LifePoint side={side} />
      <LifeControler side={side} />
    </Stack>
  );
};
