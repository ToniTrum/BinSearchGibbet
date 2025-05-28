import React, { useState } from "react";
import styles from "./NumberList.module.css";


interface NumberListProps {
    answer: number;
    countNumbers: number;
    onSelect: (n: number) => void;
  }
export const NumberList: React.FC<NumberListProps> = ({ answer, onSelect, countNumbers  }) => {
  const [lowBound, setLowBound] = useState(0);
  const [highBound, setHighBound] = useState(countNumbers + 1);
  const numbers = Array.from({ length: countNumbers }, (_, i) => i + 1);

  const handleClick = (n: number) => {
    onSelect(n);
    if (n === answer) {
      // alert("You win!");
    } else if (n < answer) {
      setLowBound(prev => Math.max(prev, n));
    } else {
      setHighBound(prev => Math.min(prev, n));
    }
  };

  return (
    <div className={styles.numbers}>
      {numbers.map(n => {
        const isDisabled = n <= lowBound || n >= highBound;
        return (
          <div
            key={n}
            className={`${styles.number} ${isDisabled ? styles.disabled : ""}`}
            onClick={() => !isDisabled && handleClick(n)}
          >
            {n}
          </div>
        );
      })}
    </div>
  );
};
