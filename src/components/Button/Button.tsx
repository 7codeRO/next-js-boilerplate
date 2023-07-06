import { Button } from 'flowbite-react';

import { ButtonProps, BUTTON_THEME } from './Button.types';
import clsx from 'clsx';

const themes = {
  [BUTTON_THEME.Primary]: clsx(
    'bg-gradient-to-r',
    'from-primary-main',
    'to-primary-gradient-main',
    'color-secondary-background',
    'hover:from-primary-hovered',
    'hover:to-primary-gradient-hovered'
  ),
  [BUTTON_THEME.Secondary]: clsx(
    'bg-secondary-background',
    'hover:bg-secondary-main'
  ),
  [BUTTON_THEME.Text]: clsx(
    'text-primary-main',
    'bg-none',
    'shadow-none',
    'hover:bg-none',
    'hover:shadow-none'
  )
};

const buildClassName = ({ className, theme }: {className?: string, theme: BUTTON_THEME}) => {
  const mandatory = clsx(
    'rounded-full',
    'font-bold',
    'shadow-md',
    'disabled:bg-primary-disabled',
    'h-[50px]'
  );

  return clsx(mandatory, themes[theme], !!className && className)
};

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
  onClick
}: ButtonProps) => {
  return (
    <Button
      type={type}
      size={size}
      style={{ margin }}
      variant={variant}
      disabled={disabled}
      className={buildClassName({className, theme})}
      fullSized={fullSized}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
