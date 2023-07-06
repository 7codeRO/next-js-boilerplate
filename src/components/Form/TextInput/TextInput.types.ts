export interface TextInputTypes {
  label: string;
  name: string;
  type?: string;
  margin?: 'normal' | 'none' | 'dense';
  required?: boolean;
  variant?: 'filled' | 'outlined' | 'standard';
  multiline?: boolean;
  width?: string;
}
