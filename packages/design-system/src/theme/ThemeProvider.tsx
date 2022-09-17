import { globalStyles } from '~/theme'

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  globalStyles()
  return children
}
