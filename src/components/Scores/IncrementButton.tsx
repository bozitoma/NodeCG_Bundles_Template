// 参考 https://codesandbox.io/s/material-ui-counter-yo5tx?file=/src/App.js:0-1618
import AddIcon from '@mui/icons-material/Add';
import { memo } from 'react';
import { StyledButton } from './Score.style';
import { useSetAtom } from 'jotai';
import { scoreIncrementAtom } from '../../atoms/scoreboardAtom';
import { Turn } from '../../types/scoreborad';

export const IncrementButton = memo(({ side, score }: { side: Turn, score: number }) => {
  const scoreIncrement = useSetAtom(scoreIncrementAtom(side));
  return (
    <StyledButton id={`${side}-incrementButton`} onClick={scoreIncrement} disabled={score === 3} >
      <AddIcon fontSize="small" />
    </StyledButton>
  );
});
