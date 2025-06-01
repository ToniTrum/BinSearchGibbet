import { useState } from 'react';
import { MAX_ATTEMPTS } from '../../shared/constants';
import { useRelation } from '../../features/useRelation';
import { useAnswer } from '../../features/useAnswer';

export const useGuessNumber = () => {
    const [answer, setAnswer] = useState<number>(useAnswer);
    const [selected, setSelected] = useState<number | null>(null);
    const [countAttempts, setCountAttempts] = useState<number>(MAX_ATTEMPTS);
    const [gameKey, setGameKey] = useState<number>(0);

    const selectNumber = (n: number) => {
        setSelected(n);
        if (countAttempts <= 0 || n === answer) return;
        setCountAttempts((prev) => prev - 1);
    };

    const restartGame = () => {
        setGameKey((prev) => prev + 1);
        setSelected(null);
        setCountAttempts(MAX_ATTEMPTS);
        return setAnswer(useAnswer);
    };

    const relation = useRelation({ selected, answer });

    return { answer, selected, countAttempts, relation, selectNumber, restartGame, gameKey };
};