import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Dimensions, Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useGallery from './src/use-gallery';
import { FlatList } from 'react-native';
import MyDropDownPicker from './src/MyDropDownPicker';
import TextInputModal from './src/TextInputModal';

const width = Dimensions.get('screen').width;
const columnSize = width / 3

export default function App() {

  const {
    imagesWithAddButton,
    pickImage,
    deleteImage,
    selectedAlbum,
    modalVisible,
    openModal,
    closeModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    isDropDownOpen,
    openDropDown,
    closeDropDown,
    albums,
    selectAlbum} = useGallery()

  const onPressOpenGallery = () => {
    pickImage()
  }

  const onLongPressImage = (imageId) => deleteImage(imageId)

  const onPressAddAlbum = () => {
    openModal();
  }
  
  const onSubmitEditing = () => {
    if(!albumTitle) return;
    // 1. 앨범에 타이틀 추가
    addAlbum()
    // 2. 모달닫기 , textInput 초기화=
    closeModal()
    resetAlbumTitle()
  }

  const onPressBackDrop = () => {
    closeModal();
  }

  const onPressHeader = () => {
    if(isDropDownOpen) closeDropDown()
    else openDropDown()
  }

  const onPressAlbum = (album) => {
    selectAlbum(album)
    closeDropDown( )
  };

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
      {/* 앨범 DropDown 앨범 추가 버튼 */}
      <MyDropDownPicker 
        selectedAlbum = {selectedAlbum}
        onPressAddAlbum = {onPressAddAlbum}
        onPressHeader = {onPressHeader}
        isDropDownOpen = {isDropDownOpen}
        albums = {albums}
        onPressAlbum = {onPressAlbum}
        ></MyDropDownPicker>

      {/* 앨범을 추가하는 TextInputModal*/}  
      <TextInputModal 
        modalVisible={modalVisible}  
        albumTitle = {albumTitle}
        setAlbumTitle = {setAlbumTitle}
        onSubmitEditing = {onSubmitEditing}
        onPressBackDrop = {onPressBackDrop}></TextInputModal>

      {/* 이미지 리스트 */}
      <FlatList
        data={imagesWithAddButton}
        renderItem={renderItem}
        numColumns={3}
        style={{zIndex : -1}}
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
