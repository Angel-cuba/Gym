import React, { createContext, Dispatch, SetStateAction} from 'react';

type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
}as ThemeContextType);

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = React.useState<Theme>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
