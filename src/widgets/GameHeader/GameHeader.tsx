import  React, { forwardRef } from 'react';
import { useRelation } from '../../features/useRelation';
import styles from './GameHeader.module.css'

interface GameHeaderProps {
    selected: number | null;
    answer: number;
    ref: React.RefObject<HTMLHeadingElement | null>;
}

export const GameHeader = forwardRef<HTMLHeadingElement, GameHeaderProps>(({ selected, answer }, ref) => {
    const relation = useRelation({ selected, answer });

    return (
        <>
        <h1 className={styles.header}>Попробуй угадать загаданное число</h1>

            <div className={`${styles.clue} ${selected ? styles.visible : styles.hidden}`}>
                <h2 className={styles.relation}>
                    Искомое число: &nbsp;
                    <span 
                        className={styles.relation_sign}
                        ref={ref}
                    >
                        {relation}&nbsp;{selected}
                    </span>
                </h2>
            </div>
        </>
    );
});
