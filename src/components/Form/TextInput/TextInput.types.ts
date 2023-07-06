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

export type Style = {
  mandatory: string,
  notError: string,
  error: string
}

export type Styles = {
  [key: string]: Style
}
