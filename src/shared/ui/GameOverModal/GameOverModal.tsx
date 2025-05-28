import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './GameOverModal.module.css';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const GameOverModal = ({ isOpen, onClose }: Props) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Вы проиграли</h2>
        <button className={styles.button} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>,
    document.body
  );
};
