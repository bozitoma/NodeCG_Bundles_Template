import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { scoreboradInfoAtom } from '../../store/atomScoreboard';
import { PlayerSide } from '../../types/scoreborad';
import { ChangeEventHandler } from 'react';

type Props = {
  side: PlayerSide;
};

export function PlayerSolo({ side }: Props) {
  const [scoreboradInfo, setScoreboradInfo] = useRecoilState(scoreboradInfoAtom);

  const playerNameEdit: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setScoreboradInfo((prev) => ({
      ...prev,
      Player: {
        ...prev.Player,
        [side]: {
          ...prev.Player[side],
          name: event.target.value,
        },
      },
    }));
  };

  return (
    <TextField
      id={`${side}-name`}
      label="Name"
      variant="outlined"
      size="small"
      value={scoreboradInfo.Player[side].name}
      onChange={playerNameEdit}
      sx={{ width: 294 }}
    />
  );
}
