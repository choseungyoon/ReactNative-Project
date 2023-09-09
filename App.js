import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import MyProfile from './src/MyProfile';
import {myProfile} from './src/data'
import Margin from './src/Margin';
import Division from './src/Division';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['right','left','bottom','top']}>
        <Header></Header>
        <Margin height={10}></Margin>
        <MyProfile uri={myProfile.uri} name = {myProfile.name}  introduction = {myProfile.introduction}></MyProfile>
        <Margin height={15}></Margin>
        <Division></Division>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingTop : statusBarHeight
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
