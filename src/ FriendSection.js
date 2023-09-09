import { Text, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

export default (props) => {
    return (
        <View style={{flexDirection:"row", justifyContent : "space-between"}}>
            <Text style={{fontSize:13, color : "gray"}}>친구 {props.friendLen}</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="lightgray" />
        </View>
    )
}