import React, { useState, useEffect } from 'react';
import { AlertContainer, CloseButton } from './Alert';

interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose?: () => void;
}


const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose && onClose();
    }, 3000); // Auto close after 3 seconds

    return () => clearTimeout(timeout);
  }, [onClose]);

  return visible ? (
    <AlertContainer type={type}>
      {message}
      {onClose && <CloseButton onClick={() => setVisible(false)}>✕</CloseButton>}
    </AlertContainer>
  ) : null;
};

export default Alert;
