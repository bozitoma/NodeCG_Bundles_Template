import { ButtonGroup } from '@mui/material';
import { Turn } from '../../types/scoreborad';
import { DecrementButton } from './DecrementButton';
import { IncrementButton } from './IncrementButton';
import { StyledInput } from './Score.style';
import { useAtomValue } from 'jotai';
import { scoreAtomFamily } from '../../atoms/scoreboardAtom';

export const Score = ({ side }: { side: Turn }) => {
  const score = useAtomValue(scoreAtomFamily(side));
  return (
    <ButtonGroup>
      <DecrementButton side={side} score={score} />
      <StyledInput size="small" value={score} />
      <IncrementButton side={side} score={score} />
    </ButtonGroup>
  );
};
