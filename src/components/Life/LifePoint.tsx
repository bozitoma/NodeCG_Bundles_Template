import TextField from '@mui/material/TextField';
import { Turn } from '../../types/scoreborad';
import { ChangeEventHandler, memo, useCallback, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { lifeAtomFamily } from '../../atoms/scoreboardAtom';
import { Button, Stack } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import { ModalAlert } from '../ModalAlert';
import { useReplicant } from '../../hooks/useReplicant';

const CurrentLifePoint = memo(({ side }: { side: Turn }) => {
  const [repLife] = useReplicant('Life');
  return (
    <TextField
      id={`${side}-current-life-point`}
      label="Current Life Point"
      size="small"
      fullWidth
      // disabled
      color="secondary"
      focused
      value={repLife ? repLife[side] : 8000}
      inputProps={{ readOnly: true }}
    />
  );
});

const SubmitButton = memo(({ side }: { side: Turn }) => {
  const life = useAtomValue(lifeAtomFamily(side));
  const [repLife, setRepLife] = useReplicant('Life');
  const [submitOpen, setSubmitOpen] = useState(false);
  const submit = useCallback(() => {
    if (repLife) setRepLife({ ...repLife, [side]: life });
    setSubmitOpen(true); // Submit完了のスナックバーを表示
  }, [repLife, life]);
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
      <SubmitButton side={side} />
      <CurrentLifePoint side={side} />
    </Stack>
  );
};
