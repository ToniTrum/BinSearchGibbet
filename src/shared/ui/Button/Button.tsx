import type React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({className, children, onClick, disabled }) => {
    return (
        <button
            className={`${styles.button} ${className || ''} ${disabled ? styles.disabled : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}