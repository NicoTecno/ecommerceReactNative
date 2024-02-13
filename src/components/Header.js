import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import colors from "../utils/globals/colors";
import ButtonCustom from "../components/ButtonCustom";

const Header = ({ title = "Ecommerce", fCambiarPantalla, nombrePantallaAnterior }) => {
    return (
        <View style={styles.container}>
            {title !== "Home" && (
                <ButtonCustom style={styles.button} title={"<-"} onPress={() => fCambiarPantalla(nombrePantallaAnterior)} />
            )}
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

export default Header;

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
});
