import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useEffect,  } from 'react';
import dayjs from 'dayjs';
import {ITEM_WIDTH, bottomSpace, getCalendarColumns, statusBarHeight} from './src/util'
import {Ionicons} from "@expo/vector-icons"

import { FlatList } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useCalender } from './src/hook/use-calender';
import { useTodoList } from './src/hook/use-todo-list';
import Calander from './src/Calander';
import Margin from './src/Margin';
import AddTodoInput from './src/addTodoInput';

export default function App() {

  const now = dayjs()

  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtract1Month,
    add1month} = useCalender(now);

  const {
        todoList,
        addTodo,
        removeTodo,
        toggleTodo,
        input,
        setInput,
        onPressAdd,
    } = useTodoList(selectedDate);

  const columns = getCalendarColumns(selectedDate);

  const onPressLeftArrow = subtract1Month;
  const onPressHeaderDate = showDatePicker;
  const onPressRightArrow = add1month;
  const onPressDate = setSelectedDate;

  useEffect(()=>{
  },[selectedDate])

  const ListHeaderComponent = () => {
    return (  
      <View>
        <Calander
        columns = {columns}
        selectedDate = {selectedDate}
        onPressLeftArrow = {onPressLeftArrow}
        onPressHeaderDate = {onPressHeaderDate}
        onPressRightArrow = {onPressRightArrow}
        onPressDate ={onPressDate}
        ></Calander>

        <Margin height={15}></Margin>

        <View style={{
            alignSelf:"center",
            width:4, 
            height : 4, 
            borderRadius : 10 / 2,
            backgroundColor:"#a3a3a3"}}>

        </View>

        <Margin height={15}></Margin>

      </View>
    
      )
  
  }

  const renderItem = ({item:todo}) => {
    const isSuccess = todo.isSuccess;

    return(
      <View 
        style={{
          width : ITEM_WIDTH,
          alignSelf : 'center',
          paddingVertical : 10,
          paddingHorizontal:5,
          borderBottomWidth : 0.2,
          borderColor : "#a6a6a6",
          flexDirection : "row",
          }}>
        <Text style= {{
          fontSize : 14,
          color : "#595959",
          flex : 1
        }}>{todo.content}</Text>

        <Ionicons 
          name='ios-checkmark'
          color= {isSuccess ? "#595959" : "#bfbfbf"}
          ></Ionicons>
      </View>
    )
  }
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>

      <Image source = {{ uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1373-159.jpg?w=1060&t=st=1667524235~exp=1667524835~hmac=8a3d988d6c33a32017e280768e1aa4037b1ec8078c98fe21f0ea2ef361aebf2c",}}
        style = {{width:"100%",height:"100%", position : "absolute"}}
     />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
      >
        <>
          <FlatList
            data={todoList}
            ListHeaderComponent={ListHeaderComponent}
            contentContainerStyle = {{paddingTop:statusBarHeight}}
            renderItem={renderItem}
          > 
          </FlatList>

          <AddTodoInput
            value= {input}
            onChangeText={setInput}
            placeholder= {`${dayjs(selectedDate).format('M.DD')}에 추가할 투두`}
            onPressAdd={onPressAdd}
          ></AddTodoInput> 
        </>

      </KeyboardAvoidingView>

      <Margin height={bottomSpace}></Margin>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Pressable>
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
