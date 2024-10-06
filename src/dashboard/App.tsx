import { ChangeEventHandler, useCallback, useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { useReplicant } from '../hooks/useReplicant';
import { getImage } from '../util/getImage';
import { Stack, TextField } from '@mui/material';
import { Bestof } from '../components/Bestof';
import { RecoilRoot } from 'recoil';
import { Round } from '../components/Round';
import { Player } from '../components/Player';

export function App() {
  const [value, setValue] = useState('')
  const [selectCard, setSelectCard] = useState('');
  const [repYugioh] = useReplicant('yugioh');
  // const [repYugioh, setRepYugioh] = useReplicant('yugioh');

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    []
  );

  const onClick = useCallback( () => {
    nodecg.sendMessage('search', value);
    console.log(repYugioh);
  }, [value]);

    // const onExtension = useCallback(() => {
    //   nodecg.sendMessage('alert')
  // }, [value]);

  // useEffect(() => {
  //   nodecg.sendMessage('alert');
  // })

  const imgPath = getImage(`card/${selectCard}.jpg`);

  return (
    <RecoilRoot>
      <Stack>
        <Stack direction="row" gap={2}>
          <TextField
            label="カード名"
            variant="filled"
            value={value}
            onChange={onChange}
            size="small"
          />
          <Button onClick={onClick} variant="contained" size="small">
            検索
          </Button>
        </Stack>
        <Round />
        <Bestof />
        <Player />
        <div>{value}</div>
        <Stack>
          {repYugioh
            ? repYugioh.map((card) => (
                <Button onClick={() => setSelectCard(card.name_jp ?? '')}>{card.name_jp}</Button>
              ))
            : null}
        </Stack>

        {/* <Button onClick={onClick}>ボタン</Button> */}

        {/* {value ? 'おはよう' : 'ございます'} */}

        {/* <Button onClick={onExtension}>ボタン2</Button> */}
        {/* <div>{repYugioh}</div> */}
        <img src={imgPath} alt="" width={500} />
        {/* <SelectComp /> */}
      </Stack>
    </RecoilRoot>
  );
}
