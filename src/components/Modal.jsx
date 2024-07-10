import styles from './Modal.module.css';

export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.active : ''}`} onClick={onClose}>
      <div className={`${styles.modalContent} ${isOpen ? styles.active : ''}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};