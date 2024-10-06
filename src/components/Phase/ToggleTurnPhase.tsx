import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent, useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { TurnPhase } from '../../types/scoreborad';


export const ToggleTurnPhase = () => {
  // const [alignment, setAlignment] = useState<TunePhase>('DRAW PHASE');
  const [scoreboradInfo, setScoreboradInfo] = useRecoilState(scoreboradInfoAtom);

  const handleChange = useCallback((event: MouseEvent<HTMLElement>, newAlignment: TurnPhase) => {
    if (newAlignment !== null) {
      // setAlignment(newAlignment);
      setScoreboradInfo((prev) => ({
        ...prev,
        Phase: {
          ...prev.Phase,
          TurnPhase: (event.target as HTMLButtonElement).value,
        },
      }));
    }
  }, []);

  return (
    <ToggleButtonGroup
      id="TurnPhase"
      size="small"
      color="success"
      value={scoreboradInfo.Phase.TurnPhase} // 選択中のボタンを取得
      exclusive // 一度に1つのボタンのみを選択する属性
      onChange={handleChange} // クリック時の挙動
      fullWidth
    >
      <ToggleButton value="DRAW PHASE">DRAW</ToggleButton>
      <ToggleButton value="STANDBY PHASE">STANDBY</ToggleButton>
      <ToggleButton value="MAIN PHASE 1">MAIN1</ToggleButton>
      <ToggleButton value="BATTLE PHASE">BATTLE</ToggleButton>
      <ToggleButton value="MAIN PHASE 2">MAIN2</ToggleButton>
      <ToggleButton value="END PHASE">END</ToggleButton>
    </ToggleButtonGroup>
  );
};
