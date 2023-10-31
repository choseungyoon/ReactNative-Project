import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Dimensions, Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useGallery from './src/use-gallery';
import { FlatList } from 'react-native';
import MyDropDownPicker from './src/MyDropDownPicker';
import TextInputModal from './src/TextInputModal';
import BigImageModal from './src/BigImageModal';

const width = Dimensions.get('screen').width;
const columnSize = width / 3

export default function App() {

  const {
    imagesWithAddButton,
    pickImage,
    deleteImage,
    selectedAlbum,
    textInputModalVisible,
    openTextInputModal,
    closeTextInputModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    isDropDownOpen,
    openDropDown,
    closeDropDown,
    albums,
    selectAlbum,
    deleteAlbum,
    bigImageModalVisible,
    openBigImageModal,
    closeBigImageModal,
    selectImage,
    selectedImage} = useGallery()

  const onPressOpenGallery = () => {
    pickImage()
  }

  const onLongPressImage = (imageId) => deleteImage(imageId)

  const onPressAddAlbum = () => {
    openTextInputModal();
  }
  
  const onSubmitEditing = () => {
    if(!albumTitle) return;
    // 1. 앨범에 타이틀 추가
    addAlbum()
    // 2. 모달닫기 , textInput 초기화=
    closeTextInputModal()
    resetAlbumTitle()
  }

  const onPressTextInputModalBackDrop = () => {
    closeTextInputModal();
  }

  const onPressBigImageModalBackdrop = () => {
    closeBigImageModal();
  }

  const onPressHeader = () => {
    if(isDropDownOpen) closeDropDown()
    else openDropDown()
  }

  const onPressAlbum = (album) => {
    selectAlbum(album);
    closeDropDown();
  };

  const onLongPressAlbum = (albumId) => {
    deleteAlbum(albumId);
  }

  const onPressImage = (image) => {
    selectImage(image);
    openBigImageModal()
  }

  const renderItem = ({item : image, index}) => {
    const {id,uri} = image;
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
    <TouchableOpacity onPress={()=> onPressImage(image)} onLongPress={()=>onLongPressImage(id)}>
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
        onLongPressAlbum = {onLongPressAlbum}
        ></MyDropDownPicker>

      {/* 앨범을 추가하는 TextInputModal*/}  
      <TextInputModal 
        textInputModalVisible={textInputModalVisible}  
        albumTitle = {albumTitle}
        setAlbumTitle = {setAlbumTitle}
        onSubmitEditing = {onSubmitEditing}
        onPressBackDrop = {onPressTextInputModalBackDrop}></TextInputModal>

      {/* 이미지를 크게 보는 Modal */}
      <BigImageModal
        modalVisible = {bigImageModalVisible}
        onPressBackdrop = {onPressBigImageModalBackdrop}
        selectedImage = {selectedImage}
      ></BigImageModal>

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
