import React, { useEffect, useState } from "react";
import { useRelation } from "../../features/useRelation";
import styles from "./Clue.module.css"

interface ClueProps {
    selected: number | null;
    answer: number;
    headerRef: React.RefObject<HTMLHeadingElement | null>;
}

export const Clue: React.FC<ClueProps> = ({ selected, answer, headerRef: headerRef }: ClueProps) => {
    const relation = useRelation({ selected, answer });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const headerBottom = headerRef.current.getBoundingClientRect().bottom;
                setIsVisible(headerBottom < 0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`${styles.clue} ${isVisible && selected ? styles.visible : styles.hidden}`} >
            {relation}&nbsp;{selected}
        </div>
    );
}