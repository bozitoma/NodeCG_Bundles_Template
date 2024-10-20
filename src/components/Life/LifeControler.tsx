import { Button, ButtonGroup } from '@mui/material';
import {
  life1000DecrementAtom,
  life1000IncrementAtom,
  life100DecrementAtom,
  life100IncrementAtom,
  lifeHalfAtom,
  lifeResetAtom,
} from '../../atoms/scoreboardAtom';
import { useSetAtom } from 'jotai';
import { Turn } from '../../types/scoreborad';

export const LifeControler = ({ side }: { side: Turn }) => {
  // Submitのスナックバー
  const reset = useSetAtom(lifeResetAtom(side));
  const life100Increment = useSetAtom(life100IncrementAtom(side));
  const life1000Increment = useSetAtom(life1000IncrementAtom(side));
  const life100Decrement = useSetAtom(life100DecrementAtom(side));
  const life1000Decrement = useSetAtom(life1000DecrementAtom(side));
  const lifeHalf = useSetAtom(lifeHalfAtom(side));

  return (
    <ButtonGroup fullWidth>
      <Button color="info" onClick={life1000Decrement}>
        -1000
      </Button>
      <Button color="info" onClick={life100Decrement}>
        -100
      </Button>
      <Button color="info" onClick={lifeHalf}>
        1/2
      </Button>
      <Button color="info" onClick={life100Increment}>
        +100
      </Button>
      <Button color="info" onClick={life1000Increment}>
        +1000
      </Button>
      <Button color="info" onClick={reset}>
        8000
      </Button>
    </ButtonGroup>
  );
};
