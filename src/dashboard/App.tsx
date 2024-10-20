import { memo } from 'react';
import './App.css';
import { useReplicant } from '../hooks/useReplicant';

import { Stack, Typography } from '@mui/material';
import { Bestof } from '../components/Bestof';
import { Round } from '../components/Round';

import { Phase } from '../components/Phase';
import { Decktypes } from '../components/Decktypes';
import { Scores } from '../components/Scores';
import { Wrapper } from '../components/Wrapper';
import { Players } from '../components/Players';
import { Buttons } from '../components/Buttons';
import { Life } from '../components/Life';
import { CardDisplay } from '../components/CardDisplay';
import { TitleDivider } from '../components/TitleDivider';
import { Turn } from '../types/scoreborad';
import { Option } from '../components/Option';

const PlayerBox = memo(({ side }: { side: Turn }) => {
  const [repPlayer] = useReplicant('Player');
  return (
    <Wrapper title={`${side} Player`}>
      <Stack spacing={2} direction="row" justifyContent="space-evenly">
        <Typography variant="body1" color="textSecondary" fontSize={20}>
          name | {repPlayer ? repPlayer[side].name : ''}
        </Typography>
        <Typography variant="body1" color="textSecondary" fontSize={20}>
          decktype | {repPlayer ? repPlayer[side].decktype : ''}
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <TitleDivider text="Life Point" />
        <Life side={side} />
        <TitleDivider text="Card" />
        <CardDisplay side={side} />
      </Stack>
    </Wrapper>
  );
});

export function App() {
  return (
    <Stack spacing={2} direction="row">
      <Stack spacing={2}>
        <Wrapper title="Infomation">
          <Stack spacing={2}>
            <Stack spacing={2} direction="row">
              <Round />
              <Bestof />
            </Stack>
            <Players />
            <Decktypes />
            <Scores />
            <Buttons />
          </Stack>
        </Wrapper>

        <Wrapper title="Phase">
          <Phase />
        </Wrapper>

        <Wrapper title="Option">
          <Option />
        </Wrapper>
      </Stack>

      <PlayerBox side="Red" />
      <PlayerBox side="Blue" />
    </Stack>
  );
}
