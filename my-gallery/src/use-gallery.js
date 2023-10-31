import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Alert } from 'react-native'; 

const defaultAlbum = {
    id : 1,
    title : "기본"
}

export default useGallery = () => {
    const [images, setImages] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(defaultAlbum);
    const [albums,setAlbums] = useState([defaultAlbum])
    const [modalVisible, setModalVisible] = useState(false)
    const [albumTitle,setAlbumTitle] = useState('')
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {  
        const lastId = images.length === 0 ? 0 : images[images.length-1].id
        
        const newImage = {
            id : lastId + 1,
            uri : result.assets[0].uri,
            albumId : selectedAlbum.id,
        }

        setImages(
            [...images,newImage]
        )
      }
    };

    const deleteImage = (imageId) => {
        Alert.alert("Delete image?", "", [
            {
                style : "cancel",
                text : "No"
            },
            {
                text : "Yes",
                onPress : () => {
                    const newImages = images.filter((image) => image.id != imageId);
                    setImages(newImages);
                }
            }
        ])
    }

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const openDropDown = () => setIsDropDownOpen(true);
    const closeDropDown = () => setIsDropDownOpen(false);


    const addAlbum = () => {
        const lastId = albums.length === 0 ? 0 : albums[albums.length-1].id
        const newAlbum = {
            id : lastId + 1,
            title : albumTitle
        };

        setAlbums([...albums,newAlbum])
    }

    const selectAlbum = (album) => {
        setSelectedAlbum(album)
    }

    const resetAlbumTitle = () => {
        setAlbumTitle('');
    }

    const filteredImages = images.filter((image) => image.albumId === selectedAlbum.id)
    
    const imagesWithAddButton = [
        ...filteredImages , 
        {
            id : -1,
            url : ""
        }
    ]
    return {
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
        selectAlbum
    }
}