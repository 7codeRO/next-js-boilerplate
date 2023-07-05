import { Button } from 'flowbite-react'

import { ButtonProps, BUTTON_THEME } from './Button.types';
import styles from './Button.module.scss';

const StyledButton = ({
  children,
  type,
  size,
  margin,
  theme = BUTTON_THEME.Primary,
  className,
  variant = 'contained',
  disabled = false,
  fullWidth: fullSized = true,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      type={type}
      size={size}
      style={{ margin }}
      variant={variant}
      disabled={disabled}
      className={`${styles.button} ${styles[theme]} ${className}`}
      fullSized={fullSized}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
