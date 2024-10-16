import { Turn } from '../../types/scoreborad';
import { Typography } from '@mui/material';
import { useReplicant } from '../../hooks/useReplicant';

export const DisplaySearchResult = ({ side }: { side: Turn }) => {
  const playerSide = side === 'Red' ? 'yugiohCardRedPlayer' : 'yugiohCardBluePlayer';
  const [repYugioh] = useReplicant(playerSide);
  return (
    <Typography variant="body1" color="textSecondary">
      {repYugioh?.length ?? 0} results
      {/* {repYugioh?.[side].name_jp ? repYugioh?.[side].name_jp.length : '-'} results */}
    </Typography>
  );
};
