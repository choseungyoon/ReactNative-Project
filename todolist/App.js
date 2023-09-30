import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import {getCalendarColumns,getDayText,getDayColor, isCurrentMonth} from './src/util'
import { FlatList } from 'react-native';
import Margin from './src/Margin';
import { SimpleLineIcons } from '@expo/vector-icons';

const columnSize = 35;

const Column = ({text,color,opacity}) => {
  return (
  <View style={{
    width: columnSize, 
    height : columnSize,
    justifyContent : "center",
    alignItems : "center"}}>
    <Text style= {{color ,opacity }}>{text}</Text>
  </View>
  )
}

const ArrowButton = ({name,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{paddingHorizontal : 20 , paddingVertical:15}}>
      <SimpleLineIcons name={name} size={15} color="black" />
    </TouchableOpacity>
  )
}

export default function App() {
  const now = dayjs()
  const columns = getCalendarColumns(now);

  const ListHeaderComponent = () => {

    const currentDateText = dayjs(now).format("YYYY.MM.DD")


    return (
      <View>
          <Margin height={15}></Margin>


          {/* <YYYY.MM.DD> */}
          <View style={{ flexDirection:'row' ,justifyContent:"center", alignItems : "center"}}>
            <ArrowButton
              onPress={()=>{}}
              name = "arrow-left"
            ></ArrowButton>

            <Text style={{fontSize:20 , color:"#404040"}}>{currentDateText}</Text>
            
            <ArrowButton
              onPress={()=>{}}
              name = "arrow-right"
            ></ArrowButton>

          </View>
          {/* 일 ~ 토 */}

          <View style={{flexDirection : "row"}}>
          {[0,1,2,3,4,5,6].map(day => {
            const dayText = getDayText(day);
            const dayColor = getDayColor(day);
            return (
              <Column 
                key={`day-${day}`}
                text={dayText} 
                color={dayColor} 
                opacity={1}>
              </Column>
            )
          })}
          </View>
    </View>
    )
  }
  const renderItem = ({item : date}) => {
    const dateText = dayjs(date).get('date');
    const day = dayjs(date).get('day');
    const color = getDayColor(day)
    const isCurrentMonth = dayjs(date).isSame(now,"month");
    return (
      <Column text={dateText}  color={color}  opacity = {isCurrentMonth ? 1: 0.4}></Column>
    )
  }
  useEffect(()=>{
    //console.log('columns' , columns)
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={columns}
        keyExtractor={(_, index) => `column-${index}`}
        numColumns={7}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
