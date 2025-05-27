import React, { useState } from "react";
import { NumberList } from "../../widgets/NumberList.tsx";
import styles from "./GamePage.module.css";

export const GamePage = () => {
  const ANSWER = 42;
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (n: number) => {
    setSelected(n);
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
      <NumberList answer={ANSWER} onSelect={handleSelect} />
    </div>
  );
};
