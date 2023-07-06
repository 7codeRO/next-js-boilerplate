import { Style } from './Types';
import clsx from 'clsx';

export const buildStyles = (hasErrors: boolean, style: Style) => {
  return clsx(style.mandatory, hasErrors ? style.error : style.notError);
};
