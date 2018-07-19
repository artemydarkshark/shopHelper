// @flow
import React from "react";
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
  setCurrent: Function
};

const Settings = (props: Props) => (
  <View style={styles.settingContainer}>
    <TextBlock styles={styles.header} bold>
      Настройки покупок
    </TextBlock>
    <Input placeholder="Гривны" />
    <Select placeholder="Language" options={languages} />
    <SettingButton title="Сохранить" />
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
        onDateChange={props.setCurrent}
      />
    </View>
    <SettingButton title="Удалить" />
    <TextBlock styles={styles.header} bold>
      Настройки отчётов
    </TextBlock>
    <Input placeholder="example@gmail.com" />
    <Input placeholder="Отчёт о закупках" />
    <SettingButton title="Сохранить" />
  </View>
);

Settings.navigationOptions = {
  title: "Settings"
};

export default Settings;
