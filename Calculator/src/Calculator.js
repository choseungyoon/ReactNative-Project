import React from 'react';
import { View,TouchableOpacity,Text } from 'react-native';
import { styled } from 'styled-components/native';

const ButtonContainer = styled.View`
    flex-direction: row;
    width: 100%;
`;

// Button type: 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, flex, type }) => {
    const backgroundColor = 
    type === "reset"? COLOR.RESET :
    type === "operator" ? COLOR.OPERATOR :
    type === "num" ? COLOR.NUM : 'transparent';

  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={{
            flex,
            backgroundColor:backgroundColor,
            justifyContent:"center",
            alignItems : "center",
            height : 50,
            borderWidth:0.2,
            borderColor:"black"
        }}
    >
        <Text style={{
            color : "white",
            fontSize : 25
        }}>{text}</Text>
    </TouchableOpacity>
  )
}

const COLOR = {
  RESULT: '#4e4c51',
  RESET: '#5f5e62',
  OPERATOR: '#f39c29',
  NUM: '#5c5674',
}

export default () => {
  return (
    <View style={{flex:1 ,width: 250}}>
      {/* 결과 */}
      <ButtonContainer>
          {/* [AC ~ /] */}
        <Button
            type="reset"
            text="AC"
            onPress={()=>null}
            flex={3}
        ></Button>
        <Button
            type="operator"
            text="%"
            onPress={()=>null}
            flex={1}
        ></Button>

      </ButtonContainer>
    
      {/* [7 ~ x] */}
      <ButtonContainer>
          {/* [AC ~ /] */}
        <Button
            type="num"
            text="7"
            onPress={()=>null}
            flex={1}
        ></Button>
          {/* [AC ~ /] */}
          <Button
            type="num"
            text="8"
            onPress={()=>null}
            flex={1}
        ></Button>
          {/* [AC ~ /] */}
          <Button
            type="num"
            text="9"
            onPress={()=>null}
            flex={1}
        ></Button>
          {/* [AC ~ /] */}
          <Button
            type="operator"
            text="X"
            onPress={()=>null}
            flex={1}
        ></Button>
      </ButtonContainer>
      {/* [4 ~ -] */}
      <ButtonContainer>
          {/* [AC ~ /] */}
        <Button
            type="num"
            text="4"
            onPress={()=>null}
            flex={1}
        ></Button>
          {/* [AC ~ /] */}
          <Button
            type="num"
            text="5"
            onPress={()=>null}
            flex={1}
        ></Button>
          {/* [AC ~ /] */}
          <Button
            type="num"
            text="6"
            onPress={()=>null}
            flex={1}
        ></Button>
          {/* [AC ~ /] */}
          <Button
            type="operator"
            text="-"
            onPress={()=>null}
            flex={1}
        ></Button>
      </ButtonContainer>
      {/* [1 ~ +] */}
      <ButtonContainer>
          {/* [AC ~ /] */}
        <Button
            type="num"
            text="1"
            onPress={()=>null}
            flex={1}
        ></Button>
          {/* [AC ~ /] */}
          <Button
            type="num"
            text="2"
            onPress={()=>null}
            flex={1}
        ></Button>
          {/* [AC ~ /] */}
          <Button
            type="num"
            text="3"
            onPress={()=>null}
            flex={1}
        ></Button>
          {/* [AC ~ /] */}
          <Button
            type="operator"
            text="+"
            onPress={()=>null}
            flex={1}
        ></Button>
      </ButtonContainer>
      {/* [0 ~ =] */}
      <ButtonContainer>
          {/* [AC ~ /] */}
        <Button
            type="num"
            text="0"
            onPress={()=>null}
            flex={3}
        ></Button>
          <Button
            type="operator"
            text="="
            onPress={()=>null}
            flex={1}
        ></Button>
      </ButtonContainer>
    </View>
  )
}