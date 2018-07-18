import React, { Component } from "react";
import { Form, Item, Picker, Icon } from "native-base";
import { View } from "react-native";
import styles from "./styles";

interface Langs {
  id: string;
  label: string;
  value: string;
}
type Props = {
  placeholder: string,
  options: Array<Langs>
};
export default class PickerInputExample extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selected2: undefined,
      width: 0
    };
  }
  onValueChange2 = (value: string) => {
    this.setState({
      selected2: value
    });
  };

  onLayout = e => {
    const { width } = e.nativeEvent.layout;
    this.setState({ width });
  };
  render() {
    const { placeholder, options } = this.props;
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: this.state.width }}
              placeholder={placeholder}
              placeholderStyle={styles.placeholderStyle}
              placeholderIconColor="#d32f2f"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2}
            >
              {options.map(item => (
                <Picker.Item
                  label={item.label}
                  value={item.value}
                  key={item.id}
                />
              ))}
            </Picker>
          </Item>
        </Form>
      </View>
    );
  }
}
