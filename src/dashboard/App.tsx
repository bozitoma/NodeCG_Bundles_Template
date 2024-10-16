import { ChangeEventHandler, memo, useCallback, useState } from 'react';
import './App.css';
import { useReplicant } from '../hooks/useReplicant';

import {  Stack } from '@mui/material';
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

const PlayerBox = memo(({side}: {side: Turn}) => {
  return (
    <Wrapper title={`${side} Player`} >
      <Stack spacing={2}>
        {/** 名前とデッキタイプを表示したい */}
        <TitleDivider text="Life Point" />
        <Life side={side} />
        <TitleDivider text="Card" />
        <CardDisplay side={side} />
      </Stack>
    </Wrapper>
  );
})

export function App() {
  // const [value, setValue] = useState('');
  // const [selectCard, setSelectCard] = useState('');
  // const [repYugioh] = useReplicant('yugioh');
  // // const [repYugioh, setRepYugioh] = useReplicant('yugioh');

  // // const nextPhase = useSetAtom(nextPhaseAtom);
  // // const prevPhase = useSetAtom(prevPhaseAtom);

  // const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback((e) => {
  //   setValue(e.target.value);
  // }, []);

  // const onClick = useCallback(() => {
  //   nodecg.sendMessage('search', value);
  //   console.log(repYugioh);
  //   // nextPhase();
  //   // prevPhase
  // }, [value]);


  // const imgPath = getImage(`card/${selectCard}.jpg`);

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
      </Stack>

      <PlayerBox side="Red" />
      <PlayerBox side="Blue" />
    </Stack>
  );
}
