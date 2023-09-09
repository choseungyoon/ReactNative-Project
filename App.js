import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import Profile from './src/Profile';
import {myProfile, friendProfiles} from './src/data'
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/ FriendSection';
import FriendList from './src/FriendList';

export default function App() {
  const onPressArrow = () =>{
    console.log("Clicked arrow");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['right','left','bottom','top']}>
      
        <Header></Header>
      
        <Margin height={10}></Margin>
      
        <Profile uri={myProfile.uri} name = {myProfile.name}  introduction = {myProfile.introduction}></Profile>
      
        <Margin height={15}></Margin>
      
        <Division></Division>

        <Margin height={12}></Margin>

        <FriendSection 
        friendLen={friendProfiles.length}
        onPressArrow = {onPressArrow}
        ></FriendSection>
        
        <Margin height={12}></Margin>

        <FriendList data={friendProfiles}></FriendList>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:15,
    //paddingTop : statusBarHeight
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
