import React, { useRef, useEffect } from 'react';
import { Portal } from 'react-portal';

import styles from './dialog.module.css';

const Dialog = ({ title, onClose, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <Portal>
      <div className={styles.dialogContainer}>
        <div className={styles.dialog}>
          <div className={styles.dialogOverlay} onClick={onClose} />
          <div className={styles.dialogContent} ref={dialogRef}>
            <div className={styles.dialogHeader}>
              <h2>{title}</h2>
              <button onClick={onClose}>×</button>
            </div>
            <div className={styles.dialogBody}>{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default Dialog;