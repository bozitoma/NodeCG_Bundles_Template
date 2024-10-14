import { Button, ButtonGroup } from '@mui/material';
import { useCallback, useState } from 'react';

// Marerial Icons
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplayIcon from '@mui/icons-material/Replay';
import { ModalAlert } from '../ModalAlert/ModalAlert';
import { DialogAlert } from '../DialogAlert/DialogAlert';

export const Buttons = () => {
  // Submitのスナックバー
  const [submitOpen, setSubmitOpen] = useState(false);

  // Resetのモーダルアラート
  const [resetOpen, setResetOpen] = useState(false);

  // Reset完了のスナックバー
  const [resetCompleteOpen, setResetCompleteOpen] = useState(false);

  const handleResetOpen = useCallback(() => {
    setResetOpen(true);
  }, []);

  const submit = useCallback(() => {
    setSubmitOpen(true); // Submit完了のスナックバーを表示
  }, []);

  const reset = useCallback(() => {
    setResetOpen(false); // Resetのモーダルを閉じる
    setResetCompleteOpen(true); // Reset完了のスナックバーを表示
  }, []);

  const restore = useCallback(() => {}, []);

  return (
    <>
      <ButtonGroup aria-label="Buttons">
        <Button
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
          // sx={{ width: 50% }}
          fullWidth
          onClick={submit}
        >
          SUBMIT
        </Button>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          // sx={{ width: 150 }}
          fullWidth
          onClick={handleResetOpen}
        >
          RESET
        </Button>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<ReplayIcon />}
          // sx={{ width: 150 }}
          fullWidth
          onClick={restore}
        >
          RESTORE
        </Button>
      </ButtonGroup>

      {/* Submitのスナックバー */}
      <ModalAlert
        state={submitOpen}
        setState={setSubmitOpen}
        text="Update has been completed scoreboard!"
        severity="success"
      />

      {/* Reset完了のスナックバー */}
      <ModalAlert
        state={resetCompleteOpen}
        setState={setResetCompleteOpen}
        text="Reset has been completed scoreboard!"
        severity="success"
      />

      {/* Resetのモーダル */}
      <DialogAlert
        state={resetOpen}
        setState={setResetOpen}
        text="Do you want to reset the scoreboard?"
        reset={reset}
      />
    </>
  );
};
