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
      width: null
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

  getOptionItem = ({ label, value, id }) => (
    <Picker.Item label={label} value={value} key={id} />
  );

  render() {
    const { placeholder, options } = this.props;
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        {this.state.width !== null ? (
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ ...styles.select, width: this.state.width }}
                placeholder={placeholder}
                placeholderStyle={styles.placeholderStyle}
                placeholderIconColor="#d32f2f"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2}
                textStyle={{ paddingLeft: 10 }}
              >
                {options.map(this.getOptionItem)}
              </Picker>
            </Item>
          </Form>
        ) : null}
      </View>
    );
  }
}
