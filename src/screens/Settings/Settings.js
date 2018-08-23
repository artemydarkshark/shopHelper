// @flow
import React, { PureComponent } from "react";
import { View } from "react-native";
import DatePicker from "react-native-datepicker";

import SettingButton from "../../components/SettingButton";
import Input from "../../components/Input";
import Select from "../../components/Select";
import TextBlock from "../../components/TextBlock";
import { timeModel } from "../../constants";

import styles from "./styles";

const languages = [
  { id: "1", label: "Русский", value: "ru" },
  { id: "2", label: "English", value: "en" }
];

type Props = {
  setCurrent: Function,
  currency: string,
  locale: string,
  reportName: string,
  email: string,
  changeSetting: Function
};

class Settings extends PureComponent<Props> {
  changeSetting = (name, value) => this.props.changeSetting({ name, value });
  render() {
    return (
      <View style={styles.settingContainer}>
        <TextBlock styles={styles.header} bold>
          Настройки покупок
        </TextBlock>
        <Input
          placeholder="Гривны"
          value={this.props.currency}
          onChangeText={text => this.changeSetting("currency", text)}
        />
        <Select placeholder="Language" options={languages} />
        {/* <SettingButton onPress={() => {}} title="Сохранить" /> */}
        <View style={styles.dateContainer}>
          <TextBlock>Удалить все записи по: </TextBlock>
          <DatePicker
            format={timeModel}
            customStyles={{
              dateInput: styles.dateInput,
              dateText: styles.dateText
            }}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
          />
        </View>
        <SettingButton title="Удалить" />
        <TextBlock styles={styles.header} bold>
          Настройки отчётов
        </TextBlock>
        <Input
          placeholder="example@gmail.com"
          value={this.props.email}
          onChangeText={text => this.changeSetting("email", text)}
        />
        <Input
          placeholder="Отчёт о закупках"
          value={this.props.reportName}
          onChangeText={text => this.changeSetting("reportName", text)}
        />
        {/* <SettingButton onPress={() => {}} title="Сохранить" /> */}
      </View>
    );
  }
}

Settings.navigationOptions = {
  title: "Settings"
};

export default Settings;
