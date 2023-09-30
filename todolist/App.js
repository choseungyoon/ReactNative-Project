import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import {getCalendarColumns,getDayText,getDayColor, isCurrentMonth} from './src/util'
import { FlatList } from 'react-native';
import Margin from './src/Margin';
import { SimpleLineIcons } from '@expo/vector-icons';

const columnSize = 35;

const Column = ({text,color,opacity,disabled,onPress,isSelected}) => {
  return (
  <TouchableOpacity 
    disabled = {disabled}
    onPress={onPress}
    style={{
    width: columnSize, 
    height : columnSize,
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : isSelected ? "#c2c2c2" : "transparent",
    borderRadius : columnSize / 2}}
    >
    <Text style= {{color ,opacity }}>{text}</Text>
  </TouchableOpacity>
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

  const [selectedDate,setSelectedDate] = useState(now);

  const columns = getCalendarColumns(selectedDate);

  const ListHeaderComponent = () => {

    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD")


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
                opacity={1}
                disabled={true}
                >
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
    const isCurrentMonth = dayjs(date).isSame(selectedDate,"month");
    const onPress = () => {
      setSelectedDate(date)
    }
    const isSelected = dayjs(date).isSame(selectedDate,'date');
    return (
      <Column 
        text={dateText}  
        color={color}  
        opacity = {isCurrentMonth ? 1: 0.4}
        onPress={onPress}
        isSelected={isSelected}
        ></Column>
    )
  }
  useEffect(()=>{
  },[selectedDate])

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
