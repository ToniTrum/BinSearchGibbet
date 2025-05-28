import React, { useState } from "react";
import { NumberList } from "../../widgets/NumberList.tsx";
import styles from "./GamePage.module.css";
import { NumberAttempts } from "../../widgets/NumberAttempts/NumberAttempts.tsx";
import { GameOverModal } from "../../shared/ui/GameOverModal/GameOverModal.tsx";

export const GamePage = () => {
  const ANSWER = 42;
  const COUNT_NUMBERS = 60;
  const MAX_ATTEMPTS = Math.floor(Math.log2(COUNT_NUMBERS));

  const [selected, setSelected] = useState<number | null>(null);
  const [countAttempts, setCountAttempts] = useState(MAX_ATTEMPTS);
  const [gameKey, setGameKey] = useState(0);

  const handleSelect = (n: number) => {
    setSelected(n);
    if (countAttempts <= 0 || n === ANSWER) return;
    setCountAttempts((prev) => prev - 1);
  };

  const handleRestart = () => {
    setGameKey((prev) => prev + 1);
    setSelected(null);
    setCountAttempts(MAX_ATTEMPTS);
  };

  const relation =
    selected === null
      ? ""
      : selected > ANSWER
      ? "<"
      : selected < ANSWER
      ? ">"
      : "=";

  return (
    <div className={styles.page}>
      <h1>Ответ (тут будут вопросы): {ANSWER}</h1>

      {selected !== null && (
        <>
          <h2 className={styles.relation}>Тебе надо поискать число, которое:</h2>
          <span>{relation}</span>
        </>
      )}

      <GameOverModal isOpen={countAttempts <= 0} onClose={handleRestart} />
      <NumberAttempts countAttempts={countAttempts} />
      <NumberList
        key={gameKey}
        answer={ANSWER}
        onSelect={handleSelect}
        countNumbers={COUNT_NUMBERS}
      />
    </div>
  );
};
