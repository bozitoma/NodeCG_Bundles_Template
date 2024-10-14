import TextField from '@mui/material/TextField';
import { Turn } from '../../types/scoreborad';
import { ChangeEventHandler, memo, useCallback, useState } from 'react';
import { useAtom } from 'jotai';
import { lifeAtomFamily } from '../../atoms/scoreboardAtom';
import { Button, Stack } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import { ModalAlert } from '../ModalAlert';

const CurrentLifePoint = memo(({ side }: { side: Turn }) => {
  return (
    <TextField
      id={`${side}-current-life-point`}
      label="Current Life Point"
      size="small"
      fullWidth
      // disabled
      color="secondary"
      focused
      defaultValue="8000"
      inputProps={{ readOnly: true }}
    />
  );
});

const SubmitButton = memo(() => {
  const [submitOpen, setSubmitOpen] = useState(false);
  const submit = useCallback(() => {
    setSubmitOpen(true); // Submit完了のスナックバーを表示
  }, []);
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        endIcon={<ForwardIcon />}
        // sx={{ width: 50% }}
        fullWidth
        onClick={submit}
      >
        SUBMIT
      </Button>
      {/* Submitのスナックバー */}
      <ModalAlert
        state={submitOpen}
        setState={setSubmitOpen}
        text="Update has been completed Life Point!"
        severity="success"
      />
      ;
    </>
  );
});

const NewLife = memo(({ side }: { side: Turn }) => {
  const [life, setLife] = useAtom(lifeAtomFamily(side));
  const lifeEdit: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
    (event) => {
      if (isNaN(Number(event.target.value))) return;
      setLife(Number(event.target.value));
    },
    []
  );
  return (
    <TextField
      id={`${side}-life`}
      label="New Life Point"
      variant="outlined"
      size="small"
      value={life}
      onChange={lifeEdit}
      fullWidth
      inputProps={{
        inputMode: 'numeric',
        pattern: '[0-9]*',
      }}
    />
  );
});

export const LifePoint = ({ side }: { side: Turn }) => {
  return (
    <Stack spacing={2} direction="row">
      <NewLife side={side} />
      <SubmitButton />
      <CurrentLifePoint side={side} />
    </Stack>
  );
};
