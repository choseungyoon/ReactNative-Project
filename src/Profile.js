import { View ,Text,Image } from "react-native"
import Margin from "./Margin"

export default ({uri,name,introduction, isMe}) => {
    const size = isMe ?  60 : 50;
    return (
        <View style={{flexDirection : "row"}}>
            <Image source={{uri}} style= {{width:50, height:50, borderRadius : 30}}></Image>
            <View style= {{justifyContent:"center", marginLeft:10}}>
                <Text style={{fontWeight : isMe ? "bold" : undefined,fontSize: isMe ?  16 : 15}}>{name}</Text>
                {!!introduction && (
                    <View>
                        <Margin height={isMe ? 6 : 2}></Margin>
                        <Text style={{fontSize:isMe ? 12 : 11 , color:"gray"}}>{introduction}</Text>
                    </View>
                )}
                
                  </View>
        </View>
    )
}