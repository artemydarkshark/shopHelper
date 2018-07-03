// @flow
import React from 'react';

import { View } from 'react-native';

import { RkButton, RkTheme } from 'react-native-ui-kitten';
import theme from '../../config/theme';
import styles from './styles';

type Props = {
  title: string,
};

RkTheme.setType('RkButton', 'baseButton', {
  container: {
    backgroundColor: theme.colors.themeColor,
    height: 40,
    width: 150,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
  },
});

const SettingButton = (props: Props) => (
  <View style={styles.container}>
    <RkButton rkType="baseButton">{props.title}</RkButton>
  </View>
);

export default SettingButton;
