import { FC } from 'react';
import { IModalProps } from './types.ts';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

export const Modal: FC<IModalProps> = ({
  isOpen,
  onClose,
  className,
  children,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={`${styles.modalContent} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <img src="/icons/close.svg" alt="Close icon" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
