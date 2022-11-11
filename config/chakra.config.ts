import { extendTheme, ThemeConfig } from '@chakra-ui/react'; 
import { styles } from '../theme/styles';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles
});
 