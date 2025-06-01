import type React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui/Button";
import { GAME_PAGE_ROUTE } from "../../shared/constants";
import startIcon from "../../../assets/icons/start-icon.svg";
import styles from "./StartButton.module.css";

export const StartButton: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Button
            className={styles.button}
            onClick={() => {navigate(GAME_PAGE_ROUTE)}}
        >
            <img 
                className={styles.icon}
                src={startIcon} 
            />
        </Button>
    );
}