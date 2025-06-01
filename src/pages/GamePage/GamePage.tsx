import { NumberList } from "../../widgets/NumberList.tsx";
import { GameOverModal } from "../../shared/ui/GameOverModal/GameOverModal.tsx";
import { COUNT_NUMBERS, MAX_ATTEMPTS } from "../../shared/constants";
import { GameHeader } from "../../widgets/GameHeader";
import { useGuessNumber } from "../../processes/useGuessNumber";
import Gibbet from "../../widgets/Gibbet/Gibbet.tsx";

export const GamePage = () => {
  const { answer, selected, countAttempts, selectNumber, restartGame, gameKey } = useGuessNumber();

  return (
    <div className="page">
      <GameHeader 
        selected={selected} 
        answer={answer} 
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
