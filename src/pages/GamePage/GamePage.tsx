import { NumberList } from "../../widgets/NumberList.tsx";
import { GameOverModal } from "../../shared/ui/GameOverModal/GameOverModal.tsx";
import { COUNT_NUMBERS, MAX_ATTEMPTS } from "../../shared/constants";
import { GameHeader } from "../../widgets/GameHeader";
import { useGuessNumber } from "../../processes/useGuessNumber";
import { Gibbet } from "../../widgets/Gibbet/Gibbet.tsx";
import { Clue } from "../../widgets/Clue/Clue.tsx";
import { useRef } from "react";

export const GamePage = () => {
  const { answer, selected, countAttempts, selectNumber, restartGame, gameKey } = useGuessNumber();
  const headerRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className="page">
      <GameHeader 
        selected={selected} 
        answer={answer}
        ref={headerRef}
      />
      <Clue 
        selected={selected} 
        answer={answer}
        headerRef={headerRef}
      />
      <Gibbet 
        countAttempts={countAttempts} 
        maxAttempts={MAX_ATTEMPTS} 
      />
      <GameOverModal 
        isOpen={countAttempts <= 0 || selected === answer} 
        isWin={selected === answer} 
        onClose={restartGame} 
      />
      <NumberList
        key={gameKey}
        onSelect={selectNumber}
        countNumbers={COUNT_NUMBERS}
      />
    </div>
  );
};
