import { Turn } from '../../types/scoreborad';
import { Stack } from '@mui/material';
import { DisplaySearchResult } from './DisplaySearchResult';
import { SearchCard } from './SearchCard';
import { CardList } from './CardList';
import { CardImage } from './CardImage';

export const CardDisplay = ({ side }: { side: Turn }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Stack spacing={1} sx={{ width: 300 }}>
        <SearchCard side={side} />
        <DisplaySearchResult side={side} />
        <CardList side={side} />
      </Stack>
      <CardImage side={side} />
    </Stack>
  );
};
