import { KeyboardAvoidingView, Modal, Platform, Pressable, SafeAreaView, TextInput, View } from "react-native"

export default ({modalVisible,albumTitle,setAlbumTitle,onSubmitEditing,onPressBackDrop}) => {
    return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex : 1}}>
            
            <Pressable onPress={onPressBackDrop} style={{flex: 1}}>
                <SafeAreaView style={{
                    flex : 1,
                    position:"absolute",
                    bottom : 0,
                    width : "100%"}}>
                        <TextInput 
                        placeholder="Pleae input name of album"
                        style={{width : "100%", padding: 10 , borderColor : "lightgray" , borderWidth : 0.5}}
                        value={albumTitle}
                        onChangeText={setAlbumTitle}
                        onSubmitEditing={onSubmitEditing}
                        autoFocus = {true}
                        ></TextInput>
                </SafeAreaView>

            </Pressable>

        </KeyboardAvoidingView>
      
    </Modal>)
}