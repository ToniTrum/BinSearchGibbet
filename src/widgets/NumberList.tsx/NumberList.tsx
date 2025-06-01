import styles from "./NumberList.module.css";
import { Button } from "../../shared/ui/Button";

interface NumberListProps {
    countNumbers: number;
    onSelect: (n: number) => void;
  }

export const NumberList: React.FC<NumberListProps> = ({ onSelect, countNumbers  }) => {
  const numbers = Array.from({ length: countNumbers }, (_, i) => i + 1);

  const handleClick = (n: number) => {
    onSelect(n);
  };

  return (
    <div className={styles.numbers}>
      {numbers.map(n => {
        return (
          <Button
            key={n} 
            onClick={() => handleClick(n)}
            className={styles.number}
          >
            {n}
          </Button>
        );
      })}
    </div>
  );
};
