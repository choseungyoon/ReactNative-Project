import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
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

  const ItemSeparatorComponent = () => <Margin height={13}></Margin>
  const renderItem = ({item}) => (
    <View>
        <Profile 
            uri={item.uri} 
            name = {item.name}
            introduction = {item.introduction}
            isMe={false}
        />
    </View>
  )
  const ListHeaderComponent = () => (
    <View style={{backgroundColor : "white",}}>
          <Header></Header>
          
          <Margin height={10}></Margin>
        
          <Profile 
            uri={myProfile.uri} 
            name = {myProfile.name}  
            introduction = {myProfile.introduction}
            isMe={true}
          ></Profile>
        
          <Margin height={15}></Margin>
        
          <Division></Division>

          <Margin height={12}></Margin>

          <FriendSection 
          friendLen={friendProfiles.length}
          onPressArrow = {onPressArrow}
          isOpened = {isOpened}
          ></FriendSection>
          
          <Margin height={10}></Margin>
    </View>
  )
  const ListFooterComponent = () => (
      <Margin height={5}></Margin>
  )

  return (
    <SafeAreaProvider>
       <SafeAreaView style={styles.container} edges={['right','left','top','bottom']}>
       <View style={styles.container}>
          <FlatList 
            data = {isOpened ?  friendProfiles : []}
            keyExtractor = {(_,index) => index}
            stickyHeaderIndices = {[0]}
            contentContainerStyle = {{paddingHorizontal:15}}
            ItemSeparatorComponent = {ItemSeparatorComponent}
            renderItem = {renderItem}
            ListHeaderComponent = {ListHeaderComponent}
            ListFooterComponent = {ListFooterComponent}
          >
          </FlatList>
          <TabBar
            selectedTabIdx= {selectedTabIdx}
            setSelectedTabIdx = {setSelectedTabIdx}
          ></TabBar>
      </View>
       </SafeAreaView>
       
    </SafeAreaProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
