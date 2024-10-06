import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { MouseEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';

export const TogglePlayerSide = () => {
  // const [alignment, setAlignment] = useState('Red');
  const [scoreboradInfo, setScoreboradInfo] = useRecoilState(scoreboradInfoAtom);

  const handleChange = useCallback((event: MouseEvent<HTMLElement>, newAlignment: string) => {
    if (newAlignment !== null) {
      // setAlignment(newAlignment);
      setScoreboradInfo((prev) => ({
        ...prev,
        Phase: {
          ...prev.Phase,
          PlayerSide: (event.target as HTMLButtonElement).value,
        },
      }));
    }
  }, []);

  return (
    <ToggleButtonGroup
      id="PlayerSide"
      size="small"
      value={scoreboradInfo.Phase.PlayerSide} // 選択中のボタンを取得
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
