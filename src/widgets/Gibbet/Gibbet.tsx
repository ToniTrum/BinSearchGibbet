import styles from './Gibbet.module.css';

interface GibbetProps {
    countAttempts: number;
    maxAttempts: number;
}

const Gibbet: React.FC<GibbetProps> = ({ countAttempts, maxAttempts }) => {
    const failedAttempts = maxAttempts - countAttempts;
    const showHead = failedAttempts >= 1;
    const showBody = failedAttempts >= 2;
    const showLeftArm = failedAttempts >= 3;
    const showRightArm = failedAttempts >= 4;
    const showLeftLeg = failedAttempts >= 5;
    const showRightLeg = failedAttempts >= 6;

    return (
        <svg className={styles.gibbet} width="200" height="250" viewBox="0 0 200 250">
            {/* Gibbet */}
            <line x1="10" y1="230" x2="180" y2="230" className={styles.line} />
            <line x1="50" y1="230" x2="50" y2="20" className={styles.line} />
            <line x1="21" y1="230" x2="50" y2="200" className={styles.line} />
            <line x1="81" y1="230" x2="50" y2="200" className={styles.line} />
            <line x1="50" y1="20" x2="120" y2="20" className={styles.line} />
            <line x1="120" y1="20" x2="120" y2="50" className={styles.line} />

            {/* Stickman */}
            {showHead && (
                <circle cx="120" cy="70" r="20" className={styles.bodyPart} /> // Head
            )}
            {showBody && (
                <line x1="120" y1="90" x2="120" y2="150" className={styles.bodyPart} /> // Body
            )}
            {showLeftArm && (
                <line x1="120" y1="100" x2="90" y2="130" className={styles.bodyPart} /> // Left arm
            )}
            {showRightArm && (
                <line x1="120" y1="100" x2="150" y2="130" className={styles.bodyPart} /> // Right arm
            )}
            {showLeftLeg && (
                <line x1="120" y1="150" x2="90" y2="190" className={styles.bodyPart} /> // Left leg
            )}
            {showRightLeg && (
                <line x1="120" y1="150" x2="150" y2="190" className={styles.bodyPart} /> // Right leg
            )}
        </svg>
    );
};

export default Gibbet;