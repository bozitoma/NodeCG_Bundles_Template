// 参考 https://codesandbox.io/s/material-ui-counter-yo5tx?file=/src/App.js:0-1618
import { Stack, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Score } from './Score';
import { scoreResetAtom } from '../../atoms/scoreboardAtom';
import { useSetAtom } from 'jotai';

export const Scores = () => {
  const reset = useSetAtom(scoreResetAtom);
  return (
    <Stack direction="row" spacing={1}>
      <Score side="Red" />
      <IconButton color="primary" onClick={reset}>
        <RemoveCircleOutlineIcon />
      </IconButton>
      <Score side="Blue" />
    </Stack>
  );
};
