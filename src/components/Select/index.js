import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

function Select() {
  return (
    <View>
      <View style={styles.label} >
        <Icon name="angle-down" styles={styles.icon} size={30} />
      </View>
      <ModalDropdown
        style={styles.button}
        textStyle={styles.text}
        dropdownStyle={styles.dropdownStyle}
        dropdownTextStyle={styles.dropdownTextStyle}
        options={['option 1', 'option 2', 'option 3', 'option 4', 'option 5']}
        renderSeparator={() => false}
      />
    </View>
  );
}

export default Select;
