import TextField from '@mui/material/TextField';
import { Turn } from '../../types/scoreborad';
import { ChangeEventHandler, useCallback, useState } from 'react';
import { Button, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchCard = ({ side }: { side: Turn }) => {
  const [word, setWrod] = useState('')
  const cardEdit: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
    (event) => {
      setWrod(event.target.value);
    },
    []
  );
  const onClick = useCallback(() => {
    nodecg.sendMessage('search', { word, side });
  }, [word]);
  return (
    <Stack spacing={2}>
      <TextField
        id={`${side}-card`}
        label="Search Card"
        variant="outlined"
        size="small"
        value={word}
        onChange={cardEdit}
        fullWidth
        // sx={{ width: 'u' }}
      />
      <Button
        startIcon={<SearchIcon />}
        onClick={onClick}
        variant="contained"
        disabled={word === ''}
        fullWidth
      >
        Search
      </Button>
    </Stack>
  );
};
