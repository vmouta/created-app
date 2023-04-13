import { createTheme, lightTheme } from '@backstage/theme';

export const vascoTheme = createTheme({
  palette: lightTheme.palette,
  fontFamily: 'Comic Sans MS',
  defaultPageTheme: 'home',
});
