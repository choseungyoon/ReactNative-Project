import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Dimensions, Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useGallery from './src/use-gallery';
import { FlatList } from 'react-native';

const width = Dimensions.get('screen').width;
const columnSize = width / 3

export default function App() {

  const {imagesWithAddButton,pickImage,deleteImage} = useGallery()

  const onPressOpenGallery = () => {
    pickImage()
  }

  const onLongPressImage = (imageId) => deleteImage(imageId)

  const renderItem = ({item : {id,uri}, index}) => {
 
    if (id === -1) {
      return  (
        <TouchableOpacity 
          onPress={onPressOpenGallery}
          style = {{
            width:columnSize , 
            height : columnSize,
            backgroundColor : "lightgrey",
            justifyContent : "center",
            alignItems : "center"}}>
          <Text style= {{fontWeight : "100", fontSize : 45}}>+</Text>
        </TouchableOpacity>
      )
    }
    return (  
    <TouchableOpacity onLongPress={()=>onLongPressImage(id)}>
      <Image 
        source={{uri}} 
        style={{width:columnSize , height:columnSize}}>

      </Image>
    </TouchableOpacity>    
   
    )
  } 
  return (
    <SafeAreaView style={styles.container}>
      <Button title='Open gallery' onPress={onPressOpenGallery}></Button>
      <FlatList
        data={imagesWithAddButton}
        renderItem={renderItem}
        numColumns={3}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    marginTop : Platform.OS === "android" ? 30 : 0
  },
});
