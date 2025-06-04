import type React from 'react';
import { useRelation } from '../../features/useRelation';
import styles from './GameHeader.module.css'

interface GameHeaderProps {
    selected: number | null;
    answer: number;
}

export const GameHeader: React.FC<GameHeaderProps> = ({ selected, answer }: GameHeaderProps) => {
    const relation = useRelation({ selected, answer });

    return (
        <>
        <h1 className={styles.header}>Попробуй угадать загаданное число</h1>

            <div className={`${styles.clue} ${selected ? styles.visible : styles.hidden}`}>
                <h2 className={styles.relation}>Искомое число:</h2>
                <div className={styles.relation_sign}>{relation} {selected}</div>
            </div>

        </>
    )
}
