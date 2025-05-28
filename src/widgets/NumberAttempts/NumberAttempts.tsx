import type React from "react";
import styles from "./NumberAttempts.module.css";
interface NumberAttemptsProps {
    countAttempts: number
}
export const NumberAttempts: React.FC<NumberAttemptsProps> = ({countAttempts}) => {
return (
<div className={styles.attempts}>
    {countAttempts}
</div>
)
}
