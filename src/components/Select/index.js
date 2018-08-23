// @flow
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
  options: Array<Langs>,
  selectedValue: string,
  onValueChange: Function
};

type State = {
  selected2: string,
  width: number
};
export default class PickerInputExample extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      width: 0
    };
  }

  onLayout = (e: any) => {
    const { width } = e.nativeEvent.layout;
    this.setState({ width });
  };

  getOptionItem = ({
    label,
    value,
    id
  }: {
    label: string,
    value: string,
    id: string
  }) => <Picker.Item label={label} value={value} key={id} />;

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
                selectedValue={this.props.selectedValue}
                onValueChange={this.props.onValueChange}
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
