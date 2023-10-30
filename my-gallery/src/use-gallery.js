import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Alert } from 'react-native';

export default useGallery = () => {
    const [images, setImages] = useState([]);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {  
        const lastId = images.length === 0 ? 0 : images[images.length-1].id
        
        const newImage = {
            id : lastId + 1,
            uri : result.assets[0].uri
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

    const imagesWithAddButton = [
        ...images , 
        {
            id : -1,
            url : ""
        }
    ]
    return {
        imagesWithAddButton,
        pickImage,
        deleteImage
    }
}