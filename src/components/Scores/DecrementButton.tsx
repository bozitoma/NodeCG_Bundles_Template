// 参考 https://codesandbox.io/s/material-ui-counter-yo5tx?file=/src/App.js:0-1618
import RemoveIcon from '@mui/icons-material/Remove';
import { memo } from 'react';
import { StyledButton } from './Score.style';
import { useSetAtom } from 'jotai';
import { scoreDecrementAtom } from '../../atoms/scoreboardAtom';
import { Turn } from '../../types/scoreborad';

export const DecrementButton = memo(({ side, score }: { side: Turn, score: number }) => {
  const scoreDecrement = useSetAtom(scoreDecrementAtom(side));
  return (
    <StyledButton id={`${side}-decrementButton`} onClick={scoreDecrement} disabled={score === 0}>
      <RemoveIcon fontSize="small" />
    </StyledButton>
  );
});
