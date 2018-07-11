// @flow
import React from "react";
import { View } from "react-native";
import SettingButton from "../SettingButton";
import Input from "../Input";
import Select from "../Select";

// import styles from './styles';

const Settings = () => (
  <View>
    <Input placeholder="Гривны" />
    <SettingButton title="Сохранить" />
    <Select />
  </View>
);

export default Settings;
