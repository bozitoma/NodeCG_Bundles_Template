import { Turn } from '../../types/scoreborad';
import { useAtom } from 'jotai';
import { cardAtomFamily } from '../../atoms/scoreboardAtom';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useReplicant } from '../../hooks/useReplicant';

export const CardList = ({ side }: { side: Turn }) => {
  const [card, setCard] = useAtom(cardAtomFamily(side));
  const [repPlayer, setRepPlayer] = useReplicant('Player');
  const handleChange = (_event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setCard(newAlignment);
    if (repPlayer) {
      setRepPlayer({
        ...repPlayer,
        [side]: {
          ...repPlayer[side],
          card: newAlignment,
        },
      });
    }
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
        <ToggleButton key={`${card.name_jp}-cardList`} value={card.name_jp ?? ''}>
          {card.name_jp}
        </ToggleButton>
      )) ?? null}
    </ToggleButtonGroup>
  );
};
