import { Turn } from '../../types/scoreborad';
import { Typography } from '@mui/material';
import { useReplicant } from '../../hooks/useReplicant';

export const DisplaySearchResult = ({ side }: { side: Turn }) => {
  const [repYugioh] = useReplicant('yugioh');
  return (
    <Typography variant="body1" color="textSecondary">
      {repYugioh?.length ?? '-'} results
      {/* {repYugioh?.[side].name_jp ? repYugioh?.[side].name_jp.length : '-'} results */}
    </Typography>
  );
};
