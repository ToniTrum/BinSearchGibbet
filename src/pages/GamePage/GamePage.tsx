import React, { useState } from "react";
import { NumberList } from "../../widgets/NumberList.tsx";
import styles from "./GamePage.module.css";
import { NumberAttempts } from "../../widgets/NumberAttempts/NumberAttempts.tsx";

export const GamePage = () => {
  const ANSWER = 42;
  const [selected, setSelected] = useState<number | null>(null);
    const COUNT_NUMBERS = 60;
    const [countAttempts, setCountAttempts] = useState(Math.floor(Math.log2(COUNT_NUMBERS)))
  const handleSelect = (n: number) => {

    setSelected(n);
    if (n === ANSWER) {
      alert("You win!");
    }
    if (countAttempts <= 0) {
      alert("You lose!");
    }
    setCountAttempts(countAttempts - 1);
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
                <h2 className={styles.relation}> Тебе надо поискать число, которое:  </h2>
                <span>{relation}</span>
        </>

      )}
      <NumberAttempts countAttempts={countAttempts} />
      <NumberList answer={ANSWER} onSelect={handleSelect} countNumbers={COUNT_NUMBERS} />
    </div>
  );
};
