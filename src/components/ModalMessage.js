import { StyleSheet, Text, View ,Modal } from 'react-native'
//import ButtonPrimary from './ButtonPrimary'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import ButtomNewCustomizable from './ButtomNewCustomizable'

const ModalMessage = ({text,textButton, onclose, modalVisible}) => {

    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType='fade'
            onRequestClose={onclose}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>{text}</Text>
                    <ButtomNewCustomizable title={textButton} onPress={onclose} color={colors.verdeClaro}/>

                </View>
            </View>
        </Modal>
  )
}

export default ModalMessage

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(0,0,0,0.8)",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    content:{
        width:"90%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.green1,
        padding:30,
        gap:20,
        borderRadius:5
    },
    text:{
        fontSize:16,
        color:"white",
        fontFamily:fonts.JosefinSansBold
    }

})