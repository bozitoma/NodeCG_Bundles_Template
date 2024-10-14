import TextField from '@mui/material/TextField';
import { Turn } from '../../types/scoreborad';
import { ChangeEventHandler, useCallback } from 'react';
import { useAtom } from 'jotai';
import { playerNameAtomFamily } from '../../atoms/scoreboardAtom';

export const Player = ({ side }: { side: Turn }) => {
  const [playerName, setPlayerName] = useAtom(playerNameAtomFamily(side));
  const playerNameEdit: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
    (event) => {
      setPlayerName(event.target.value);
    },
    []
  );
  return (
    <TextField
      id={`${side}-playerName`}
      label="Player Name"
      variant="outlined"
      size="small"
      value={playerName}
      onChange={playerNameEdit}
      // sx={{ width: 294 }}
      fullWidth
    />
  );
};
