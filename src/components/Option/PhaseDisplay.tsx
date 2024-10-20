import { useCallback } from 'react';
import { useReplicant } from '../../hooks/useReplicant';
import Switch from '@mui/material/Switch';
import { Stack, Typography } from '@mui/material';

export const PhaseDisplay = () => {
  const [repPhaseDisplay, setRepPhaseDisplay] = useReplicant('PhaseDisplay');
  const handleChange = useCallback(
    (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setRepPhaseDisplay(checked);
    },
    []
  );
  return (
    <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-around">
      <Typography variant="body1" color="textSecondary" fontSize={16} fontWeight="bold">
        OFF
      </Typography>
      <Switch
        checked={repPhaseDisplay}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography variant="body1" color="textSecondary" fontSize={16} fontWeight="bold">
        ON
      </Typography>
    </Stack>
  );
};
