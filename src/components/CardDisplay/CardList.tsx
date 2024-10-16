import { Turn } from '../../types/scoreborad';
import { useAtom } from 'jotai';
import { cardAtomFamily } from '../../atoms/scoreboardAtom';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useReplicant } from '../../hooks/useReplicant';

export const CardList = ({ side }: { side: Turn }) => {
  const [card, setCard] = useAtom(cardAtomFamily(side));
  const handleChange = (_event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setCard(newAlignment);
  };
  const playerSide = side === 'Red' ? 'yugiohCardRedPlayer' : 'yugiohCardBluePlayer';
  const [repYugioh] = useReplicant(playerSide);
  return (
    <ToggleButtonGroup
      color="primary"
      value={card}
      exclusive
      onChange={handleChange}
      aria-label="cardList"
      orientation="vertical"
      sx={{ maxHeight: 425, overflow: 'auto' }}
    >
      {repYugioh?.map((card) => (
          <ToggleButton value={card.name_jp ?? ''}>{card.name_jp}</ToggleButton>
          ))
        ?? null}
    </ToggleButtonGroup>
  );
};
