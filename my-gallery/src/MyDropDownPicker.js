import { Text, TouchableOpacity, View } from "react-native"
import {SimpleLineIcons} from "@expo/vector-icons"

const headerHight = 50;

export default ({
    selectedAlbum,
    onPressAddAlbum,
    onPressHeader,
    isDropDownOpen,
    albums,
    onPressAlbum}) => {
    return (
        <View>
        <TouchableOpacity
            activeOpacity={1} 
            onPress={onPressHeader}
            style = {{
            height: headerHight,
            justifyContent :"center",
            alignItems : "center",
            flexDirection : "row"
            }}>
            <Text style={{fontWeight: "bold"}}>{selectedAlbum.title}</Text>
            <SimpleLineIcons
                name = {isDropDownOpen ? "arrow-down" : "arrow-up"}
                size={12}
                color="black"
                style = {{marginLeft:8}}
            ></SimpleLineIcons>
            <TouchableOpacity 
            onPress={onPressAddAlbum}
            style={{
                position : "absolute",
                height : headerHight,
                right : 0,
                justifyContent :"center",
                alignItems : "center",
                paddingHorizontal : 10
            }}>
                <Text style={{fontSize:12}}>앨범추가</Text>
            </TouchableOpacity>
        </TouchableOpacity>

        {/* Album 리스트 */}
        {isDropDownOpen && (
                <View style={{
                    position : "absolute",
                    top : headerHight,
                    width:"100%", 
                    borderBottomColor : "lightgrey",
                    borderBottomWidth : 0.5,
                    borderTopColor : "lightgrey",
                    borderTopWidth : 0.5,
                    }}>
                {albums.map((album,index)=> {
                    const isSelectedAlbum = album.id === selectedAlbum.id
                    return (
                    <TouchableOpacity
                        onPress={()=> onPressAlbum(album)}
                        key = {`album-${index}`}
                        style = {{
                            width : "100%",
                            alignItems : "center",
                            paddingVertical : 12,
                            justifyContent : "center",
                            backgroundColor : "white"
                        }}
                    > 
                        <Text
                            style = {{
                                fontWeight: isSelectedAlbum ? "bold" : undefined
                            }}
                        >{album.title}</Text>
                    </TouchableOpacity>
                    )
                })}
                </View>
            )}
        </View>
    )
}