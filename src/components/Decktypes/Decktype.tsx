import TextField from '@mui/material/TextField';
import { Turn } from '../../types/scoreborad';
import { ChangeEventHandler, useCallback } from 'react';
import { useAtom } from 'jotai';
import { decktypeAtomFamily } from '../../atoms/scoreboardAtom';

export const Decktype = ({ side }: { side: Turn }) => {
  const [decktype, setDecktype] = useAtom(decktypeAtomFamily(side));
  const decktypeEdit: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
    (event) => {
      setDecktype(event.target.value);
    },
    []
  );
  return (
    <TextField
      id={`${side}-decktype`}
      label="Decktype"
      variant="outlined"
      size="small"
      value={decktype}
      onChange={decktypeEdit}
      // sx={{ width: 294 }}
      fullWidth
    />
  );
};
