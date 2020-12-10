import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  background: {
    primary: '#FFFFFF',
    secondary: '#E5E5E5',
  },
  text: {
    gray: '#A3A3A3',
    purple: '#7445EC',
  },
  typography: {
    color: {
      initial: '#DEDEDE',
      primary: '#000',
      secondary: '#99ABB4',
    },
  }
});

export { theme };
