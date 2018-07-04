// @flow
import * as React from 'react';
import { Text, View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});


type Props = {
  navigation: Object
}
class Welcome extends React.Component<Props> {
  toSettings = () => {
    this.props.navigation.navigate('Settings');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Ntive!!!</Text>
        <Text style={styles.instructions}>To get stared, edit App.js</Text>
        <Text style={styles.instructions}>     {instructions}        </Text>
        <Button title="BUTTON" onPress={this.toSettings} />
      </View>
    );
  }
}

export default Welcome;
