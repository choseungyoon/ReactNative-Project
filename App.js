import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'

const statusBarHeight = getStatusBarHeight(true)

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : statusBarHeight
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
