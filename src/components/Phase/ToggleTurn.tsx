import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent, useCallback } from 'react';
import { useAtom } from 'jotai';
import { turnAtom } from '../../atoms/scoreboardAtom';
import { Turn } from '../../types/scoreborad';

export const ToggleTurn = () => {
  const [turn, setTurn] = useAtom(turnAtom);
  const handleChange = useCallback((_event: MouseEvent<HTMLElement>, newAlignment: Turn) => {
    if (newAlignment !== null) {
      // setAlignment(newAlignment);
      setTurn(newAlignment);
    }
  }, []);
  return (
    <ToggleButtonGroup
      id="ToggleTurn"
      size="small"
      value={turn} // 選択中のボタンを取得
      exclusive // 一度に1つのボタンのみを選択する属性
      onChange={handleChange} // クリック時の挙動
      fullWidth
    >
      <ToggleButton value="Red" color="error">
        Red
      </ToggleButton>
      <ToggleButton value="Blue" color="primary">
        Blue
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
