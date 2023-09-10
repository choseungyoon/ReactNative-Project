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
import { useState } from 'react';
import TabBar from './src/TabBar';

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx,setSelectedTabIdx] = useState(0);

  const onPressArrow = () =>{
    setIsOpened(!isOpened)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['right','left','top','bottom']}>
        <View style={{flex:1,paddingHorizontal:15}}>
          <Header></Header>
          
          <Margin height={10}></Margin>
        
          <Profile uri={myProfile.uri} name = {myProfile.name}  introduction = {myProfile.introduction}></Profile>
        
          <Margin height={15}></Margin>
        
          <Division></Division>

          <Margin height={12}></Margin>

          <FriendSection 
          friendLen={friendProfiles.length}
          onPressArrow = {onPressArrow}
          isOpened = {isOpened}
          ></FriendSection>
        
          <Margin height={12}></Margin>

          <FriendList 
            data={friendProfiles}
            isOpened = {isOpened}
          ></FriendList>
        </View>

        <TabBar
          selectedTabIdx= {selectedTabIdx}
          setSelectedTabIdx = {setSelectedTabIdx}
        ></TabBar>

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
