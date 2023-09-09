import { View ,Text,Image } from "react-native"
import Margin from "./Margin"

export default (props) => {
    return (
        <View style={{flexDirection : "row"}}>
            <Image source={{url : props.uri}} style= {{width:50, height:50, borderRadius : 30}}></Image>
            <View style= {{justifyContent:"center", marginLeft:10}}>
                <Text style={{fontWeight:"bold",fontSize: 16}}>{props.name}</Text>
                <Margin height={6}></Margin>
                <Text style={{fontSize:12 , color:"gray"}}>{props.introduction}</Text>
            </View>
        </View>
    )
}