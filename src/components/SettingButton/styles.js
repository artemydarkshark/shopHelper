import { StyleSheet } from 'react-native';
import theme from '../../config/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: theme.colors.backgroundColor,
  },
});
