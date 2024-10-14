import { Button, ButtonGroup } from '@mui/material';
import {
  nextPhaseAtom,
  nextTurnAtom,
  prevPhaseAtom,
  restartAtom,
} from '../../atoms/scoreboardAtom';

// MUI icons
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { useSetAtom } from 'jotai';

export const PhaseController = () => {
  const nextTurn = useSetAtom(nextTurnAtom);
  const nextPhase = useSetAtom(nextPhaseAtom);
  const prevPhase = useSetAtom(prevPhaseAtom);
  const restart = useSetAtom(restartAtom);

  return (
    <ButtonGroup fullWidth>
      <Button startIcon={<RestartAltIcon />} color="error" variant="contained" onClick={restart}>
        Restart
      </Button>
      <Button startIcon={<ArrowBackIosNewIcon />} color="info" onClick={prevPhase}>
        Prev Phase
      </Button>
      <Button endIcon={<ArrowForwardIosIcon />} color="info" onClick={nextPhase}>
        Next Phese
      </Button>
      <Button
        endIcon={<KeyboardDoubleArrowRightIcon />}
        color="primary"
        variant="contained"
        onClick={nextTurn}
      >
        Next Turn
      </Button>
    </ButtonGroup>
  );
};
