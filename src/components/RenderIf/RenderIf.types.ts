import { ReactNode } from 'react';

export type RenderIfProps = {
  children: ReactNode | string | undefined,
  condition: boolean | (() => boolean)
}