import { View,ScrollView} from "react-native"
import Margin from "./Margin"
import Profile from "./Profile"

export default (props) => {
    return props.isOpened && (
        <ScrollView>
            {props.data.map((item,index) => (
                <View  key = {index}>
                    <Profile 
                        uri={item.uri} 
                        name = {item.name}
                        introduction = {item.introduction}>
                    </Profile>
                    <Margin height={13}></Margin>
                </View>
               
            ))}
        </ScrollView>
    ) 
}