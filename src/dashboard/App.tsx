import { useCallback, useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { useReplicant } from '../hooks/useReplicant';

export function App() {
  const [value, setValue] = useState(true)
  const [repYugioh, setRepYugioh] = useReplicant('yugioh');

  const onClick = useCallback(() => {
    setValue(!value);
  }, [value]);

    const onExtension = useCallback(() => {
      nodecg.sendMessage('alert')
    }, [value]);
  return (
    <>
      <div>こんにちは</div>
      <Button onClick={onClick}>ボタン</Button>
      {value ? 'おはよう' : 'ございます'}
      <Button onClick={onExtension}>ボタン2</Button>
      <div>{repYugioh}</div>
    </>
  );
}
