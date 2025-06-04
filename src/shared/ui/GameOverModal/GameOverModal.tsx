import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './GameOverModal.module.css';
import { useNavigate } from 'react-router-dom';
import { START_PAGE_ROUTE } from '../../constants';

type Props = {
  isOpen: boolean;
  isWin: boolean;
  onClose: () => void;
};

export const GameOverModal = ({ isOpen, isWin, onClose }: Props) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const navigate = useNavigate();

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>{isWin ? 'Вы победили' : 'Вы проиграли'}</h2>
        <div className={styles.buttons}>
          <button
          className={`${styles.button} ${isWin ? styles.winButton : styles.loseButton}`}
          onClick={onClose}
        >
          Заново
        </button>
        <button
          className={`${styles.button} ${isWin ? styles.winButton : styles.loseButton}`}
          onClick={() => navigate(START_PAGE_ROUTE)}
        >
          На главную
        </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
