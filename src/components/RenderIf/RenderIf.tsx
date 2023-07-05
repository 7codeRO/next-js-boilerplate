import { RenderIfProps } from './RenderIf.types'

export const RenderIf = ({children, condition}: RenderIfProps) => {
  const shouldRender = typeof condition === 'function' ? condition() : condition

  return shouldRender ? children : null
}
