import { StyleSheet } from 'react-native';
import theme from '../../config/theme';

export default StyleSheet.create({
  container: {
    padding: 10,
    position: 'relative',
  },
  button: {
    margin: 10,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.textColor,
    padding: 10,
    position: 'relative',
  },

  text: {
    fontSize: 18,
    color: 'gray',
  },
  dropdownStyle: {
    position: 'absolute',
    width: '95%',
    marginLeft: -12,
    marginTop: 12,
    // overflow: 'scroll',
  },
  dropdownTextStyle: {
    fontSize: 18,
    color: '#000',
  },
  label: {
    position: 'absolute',
    bottom: '10%',
    right: '10%',
  }
});
