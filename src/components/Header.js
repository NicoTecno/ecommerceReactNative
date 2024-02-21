import { View , Text ,StyleSheet,Platform ,StatusBar, Pressable } from "react-native"
import colors from "../utils/globals/colors"
import {AntDesign} from "@expo/vector-icons"

const Header = ({title="Ecommerce",navigation}) => {

    return  <View style={styles.container}>
                {navigation.canGoBack() && 
                <Pressable style={styles.goBack} onPress={()=>navigation.goBack()}>
                    <AntDesign name="arrowleft" size={28} style={styles.arrow}/>
                </Pressable>}
                <Text style={styles.text}>{title}</Text>
            </View>
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.verdeItermedio,
        height:  80,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between" // Asegura que haya espacio entre los elementos
    },
    text: {
        flex:  1, // Ocupa el espacio restante, centrando el texto
        fontSize:  30,
        textAlign: "center", // Centra el texto dentro de su área
        color: colors.blanco,
        fontWeight:"700"
    },
    arrow:{
        color: colors.blanco,
        borderWidth: 1,
        borderRadius:25,
        backgroundColor: colors.verdeOscuro,
    }
});
