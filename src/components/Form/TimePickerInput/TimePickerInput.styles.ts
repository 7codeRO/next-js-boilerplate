import clsx from 'clsx';
import { Styles } from '../Common/Types';

export const styles: Styles = {
  input: {
    mandatory: clsx(
      'rounded-full',
      'w-full',
      'h-12',
      'border',
      'focus-within:border-2',
      'py-2',
      'px-3',
      'outline-none'
    ),
    notError: clsx(
      'border-primary-disabled',
      'hover:border-secondary-main',
      'focus-within:border-primary-hovered',
      'focus-within:hover:border-primary-hovered'
    ),
    error: clsx(
      'border-red-600',
      'focus-within:border-red-600'
    )
  },
  label: {
    mandatory: clsx('text-sm', 'ml-3'),
    notError: clsx(
      'text-secondary-main',
      'group-focus-within:text-primary-hovered'
    ),
    error: clsx('text-red-600')
  }
};
