import {
  useRive,
  FileAsset,
  decodeImage,
  useStateMachineInput,
} from '@rive-app/react-canvas';
import { useCallback, useEffect, useState } from 'react';
import rivefile from '../assets/rive/yugioh.riv';
import { useReplicant } from '../hooks/useReplicant';
import { Turn } from '../types/scoreborad';
import { getCardImage } from '../util/getImage';

export const Rive = () => {
  const [repRound] = useReplicant('Round');
  const [repBestOf] = useReplicant('BestOf');
  const [repPhase] = useReplicant('Phase');
  const [repTurn] = useReplicant('Turn');
  const [repPlayer] = useReplicant('Player');
  const [repLife] = useReplicant('Life');
  const [repPhaseDisplay] = useReplicant('PhaseDisplay');
  const [repCardDisplay] = useReplicant('CardDisplay');

  // Rive内のキャラクターアイコンのAssetを格納するState
  const [cardRed, setCardRed] = useState<FileAsset | null>(null);
  const [cardBlue, setCardBlue] = useState<FileAsset | null>(null);

  const { rive, RiveComponent } = useRive({
    src: rivefile,
    artboard: 'Scoreboard',
    stateMachines: 'Scoreboard',
    autoplay: true,
    assetLoader: (asset, bytes) => {
      console.log({
        name: asset.name,
        fileExtension: asset.fileExtension,
        cdnUuid: asset.cdnUuid,
        isFont: asset.isFont,
        isImage: asset.isImage,
        bytes,
      });
      if (asset.name === 'card-Red') {
        setCardRed(asset);
        return true;
      } else if (asset.name === 'card-Blue') {
        setCardBlue(asset);
        return true;
      } else {
        return false;
      }
    },
  });

  const selectCardImg = (asset: FileAsset | null, img: string) => {
    if (asset) {
      const imgPath = getCardImage(img);
      fetch(imgPath).then(async (res) => {
        // imageをバイナリデータで取得する
        const image = await decodeImage(new Uint8Array(await res.arrayBuffer()));
        // @ts-expect-error
        asset.setRenderImage(image); // 型の付け方が不明

        // imageのsetRenderが完了しているので接続を切る
        image.unref();
      });
    }
    console.log(asset);
  };

  const cardDisplayRed = useStateMachineInput(rive, 'Scoreboard', 'card-display-Red');
  const cardDisplayBlue = useStateMachineInput(rive, 'Scoreboard', 'card-display-Blue');

  /**
   * ライフをRiveに反映させるメソッド
   */
  const lifeUpdate = useCallback(
    (side: Turn) => {
      if (!repLife) return;

      // 強制的に5桁にしてから、1桁ずつに数字を切り分ける
      // 桁が存在しない場合は X に置き換えて判断する
      const life = String(repLife[side]).padStart(5, 'X').split('');
      const path = `LP-number-${side}`;
      rive?.setNumberStateAtPath('Number', Number(life[0] === 'X' ? '-1' : life[0]), `${path}-0`);
      rive?.setNumberStateAtPath('Number', Number(life[1] === 'X' ? '-1' : life[1]), `${path}-1`);
      rive?.setNumberStateAtPath('Number', Number(life[2] === 'X' ? '-1' : life[2]), `${path}-2`);
      rive?.setNumberStateAtPath('Number', Number(life[3] === 'X' ? '-1' : life[3]), `${path}-3`);
      rive?.setNumberStateAtPath('Number', Number(life[4]), `${path}-4`);
    },
    [rive?.setNumberStateAtPath, repLife]
  );

  /**
   * 初回のレンダリング時に、Replicantの値をRiveに反映させるuseEffect
   */
  useEffect(() => {
    rive?.setTextRunValue('round', repRound ?? '');
    rive?.setTextRunValue('bestof', repBestOf ?? '');
    rive?.setTextRunValue('phese', repPhase ?? '');
    rive?.setTextRunValue('player-name-red', repPlayer?.Red.name ?? '');
    rive?.setTextRunValue('player-name-blue', repPlayer?.Blue.name ?? '');
    rive?.setTextRunValue('deck-type-red', repPlayer?.Red.decktype ?? '');
    rive?.setTextRunValue('deck-type-blue', repPlayer?.Blue.decktype ?? '');
    rive?.setTextRunValue('score-red', String(repPlayer?.Red.score) ?? '0');
    rive?.setTextRunValue('score-blue', String(repPlayer?.Blue.score) ?? '0');
    rive?.setBooleanStateAtPath('phase-display', repPhaseDisplay ?? false, 'phase');
    selectCardImg(cardRed, repPlayer?.Red.card ?? '');
    selectCardImg(cardBlue, repPlayer?.Blue.card ?? '');
    lifeUpdate('Red');
    lifeUpdate('Blue');
  }, [rive?.setTextRunValue]);

  useEffect(() => {
    if (repCardDisplay) {
      if (cardDisplayRed) cardDisplayRed.value = repCardDisplay.Red;
      if (cardDisplayBlue) cardDisplayBlue.value = repCardDisplay.Blue;
    }
  }, [cardDisplayRed, cardDisplayBlue]);

  useEffect(() => {
    if (cardDisplayRed && repCardDisplay) cardDisplayRed.value = repCardDisplay.Red;
  }, [repCardDisplay?.Red]);

  useEffect(() => {
    if (cardDisplayBlue && repCardDisplay) cardDisplayBlue.value = repCardDisplay.Blue;
  }, [repCardDisplay?.Blue]);

  useEffect(() => {
    selectCardImg(cardRed, repPlayer?.Red.card ?? '');
  }, [repPlayer?.Red.card]);

  useEffect(() => {
    selectCardImg(cardBlue, repPlayer?.Blue.card ?? '');
  }, [repPlayer?.Blue.card]);

  // Replicantの更新をテロップに反映させる
  useEffect(() => {
    rive?.setTextRunValue('round', repRound ?? '');
  }, [repRound]);

  useEffect(() => {
    rive?.setTextRunValue('bestof', repBestOf ?? '');
  }, [repBestOf]);

  useEffect(() => {
    rive?.setTextRunValue('player-name-red', repPlayer?.Red.name ?? '');
  }, [repPlayer?.Red.name]);

  useEffect(() => {
    rive?.setTextRunValue('player-name-blue', repPlayer?.Blue.name ?? '');
  }, [repPlayer?.Blue.name]);

  useEffect(() => {
    rive?.setTextRunValue('deck-type-red', repPlayer?.Red.decktype ?? '');
  }, [repPlayer?.Red.decktype]);

  useEffect(() => {
    rive?.setTextRunValue('deck-type-blue', repPlayer?.Blue.decktype ?? '');
  }, [repPlayer?.Blue.decktype]);

  useEffect(() => {
    rive?.setTextRunValue('score-red', String(repPlayer?.Red.score) ?? '0');
  }, [repPlayer?.Red.score]);

  useEffect(() => {
    rive?.setTextRunValue('score-blue', String(repPlayer?.Blue.score) ?? '0');
  }, [repPlayer?.Blue.score]);

  /**
   * ターンの更新を制御
   */
  useEffect(() => {
    if (repTurn === 'Red') rive?.fireStateAtPath('phase-red', 'phase');
    if (repTurn === 'Blue') rive?.fireStateAtPath('phase-blue', 'phase');
  }, [repTurn]);

  /**
   * ライフの更新を制御
   */
  useEffect(() => {
    lifeUpdate('Red');
  }, [repLife?.Red]);

  useEffect(() => {
    lifeUpdate('Blue');
  }, [repLife?.Blue]);

  /**
   * Phaseの表示・非表示を制御
   */
  useEffect(() => {
    if (repPhaseDisplay != null)
      rive?.setBooleanStateAtPath('phase-display', repPhaseDisplay, 'phase');
  }, [repPhaseDisplay]);

  /**
   * Phaseの更新を制御
   */
  useEffect(() => {
    rive?.fireStateAtPath('phase-update', 'phase');
    rive?.setTextRunValueAtPath('phase', repPhase ?? '', 'phase');
  }, [repPhase]);

  return (
    <>
      <RiveComponent style={{ width: 1920, height: 1080 }} />
      {/* {repInformation !== undefined && <RiveComponent style={{ width: 1920, height: 1080 }} />} */}
    </>
  );
};
