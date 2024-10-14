import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent, useCallback } from 'react';
import { phaseAtom } from '../../atoms/scoreboardAtom';
import { useAtom } from 'jotai';
import { phases } from '../../defaultValues/scoreboard';
import { Phase } from '../../types/scoreborad';

export const TogglePhase = () => {
  const [phase, setPhase] = useAtom(phaseAtom);

  const handleChange = useCallback((_event: MouseEvent<HTMLElement>, newAlignment: Phase) => {
    if (newAlignment !== null) {
      setPhase(newAlignment);
    }
  }, []);

  return (
    <ToggleButtonGroup
      id="TogglePhase"
      size="small"
      color="success"
      value={phase} // 選択中のボタンを取得
      exclusive // 一度に1つのボタンのみを選択する属性
      onChange={handleChange} // クリック時の挙動
      fullWidth
    >
      {phases.map((phase) => {
        return (
          <ToggleButton key={`Toggle ${phase}`} value={phase}>
            {phase.replace(' PHASE', '')}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};
