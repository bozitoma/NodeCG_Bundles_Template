import { MouseEvent, useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { Button, ButtonGroup } from '@mui/material';
import { turnPhases } from '../../defaultValues/scoreboard';

// MUI icons
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { Phase, TurnPhase } from '../../types/scoreborad';

export const PhaseController = () => {
  const [phase, setPhase] = useState(0);
  const setScoreboradInfo = useSetRecoilState(scoreboradInfoAtom);

  const turnChange = useCallback(() => {
    setScoreboradInfo((prev) => ({
      ...prev,
      Phase: {
        ...prev.Phase,
        PlayerSide: prev.Phase.PlayerSide === 'Red' ? 'Blue' : 'Red',
      },
    }));
  }, []);

  const phaseChange = useCallback((phase: TurnPhase) => {
    setScoreboradInfo((prev) => ({
      ...prev,
      Phase: {
        ...prev.Phase,
        TurnPhase: phase,
      },
    }));
  }, []);

  // const phaseUpdate = useCallback(() => {
  //   if (turnPhases.length < phase) {
  //     setPhase(0);
  //     return;
  //   }
  //   setPhase((prev) => prev + 1);
  // }, []);

  // const restart = useCallback((val) => {}, []);

  // const previousPhase = useCallback((val) => {}, []);

  const nextPhase = useCallback(() => {
    const newPhase = phase + 1;
    console.log(phase, newPhase);
    if (turnPhases.length <= newPhase) {
      setPhase(0);
      phaseChange(turnPhases[0]);
      turnChange();
      return;
    }
    phaseChange(turnPhases[newPhase]);
    setPhase(newPhase);
  }, [phase]);

  // const turnEnd = useCallback((val) => {}, []);

  // const handleChange = useCallback(
  //   (event: MouseEvent<HTMLElement>, newAlignment: string) => {
  //     if (newAlignment !== null) {
  //       setScoreboradInfo((prev) => ({
  //         ...prev,
  //         Phase: {
  //           ...prev.Phase,
  //           PlayerSide: (event.target as HTMLButtonElement).value,
  //         },
  //       }));
  //     }
  //   },
  //   [scoreboradInfo.Phase.PlayerSide]
  // );

  return (
    <ButtonGroup fullWidth>
      <Button startIcon={<RestartAltIcon />} color="error">
        Restart
      </Button>
      <Button startIcon={<ArrowBackIosNewIcon />} color="info">
        Previous Phase
      </Button>
      <Button endIcon={<ArrowForwardIosIcon />} color="info" onClick={nextPhase}>
        Next Phese
      </Button>
      <Button startIcon={<ChangeCircleIcon />} color="primary">
        Turn End
      </Button>
    </ButtonGroup>
  );
};
