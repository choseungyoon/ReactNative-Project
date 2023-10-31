import { Image, Modal, Pressable, View } from "react-native"

export default ({modalVisible,onPressBackdrop,selectedImage}) => {
    return   (
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}>
            <Pressable
                onPress={onPressBackdrop}
                style={{
                    flex : 1,
                    justifyContent : "center",
                    alignItems : "center",
                    backgroundColor : `rgba(115,115,115,0.6)`
                    }}
            >
                <Pressable>
                    <Image 
                    source={{uri:selectedImage?.uri}}
                    style={{width:300, height : 300}}
                    resizeMode = "contain"
                    ></Image>
                </Pressable>
               

            </Pressable>
    </Modal>
    )
}