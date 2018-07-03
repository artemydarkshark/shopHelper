import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Select extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  onLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    this.setState({ height });
  };

  render() {
    const { height } = this.state;

    return (
      <View>
        <View
          onLayout={this.onLayout}
          style={[styles.label, { transform: [{ translateY: -height / 2 }] }]}
        >
          <Icon name="angle-down" styles={styles.icon} size={30} />
        </View>
        <ModalDropdown
          style={styles.button}
          textStyle={styles.text}
          dropdownStyle={styles.dropdownStyle}
          dropdownTextStyle={styles.dropdownTextStyle}
          options={['Russian', 'English']}
          renderSeparator={() => false}
        />
      </View>
    );
  }
}

export default Select;
