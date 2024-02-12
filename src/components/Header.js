import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import colors from "../utils/globals/colors";
import ButtonCustom from "../components/ButtonCustom";

const Header = ({ title = "Ecommerce", fCambiarPantalla, nombrePantallaAnterior  }) => {
    const windowWidth = useWindowDimensions().width;
    const buttonLeftValue = (windowWidth / 2).toFixed(0) ; // Calcula el valor para 'left'
    console.log(windowWidth)
    console.log(buttonLeftValue)

    //<ButtonCustom style={styles.button} title={"<-"} onPress={() => fCambiarPantalla(nombrePantallaAnterior)} />
    return (
        <View style={styles.container}>
            {title !== "Home" && (
                <ButtonCustom style={styles.button} title={"<-"} onPress={() => fCambiarPantalla(nombrePantallaAnterior)} />
            )}
            <Text style={{...styles.text, left: "50%" }}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green1,
        height:   80,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        position: "relative" // Añade esto para que el botón se posicione relativo al contenedor
    },
    button: {
        position: "absolute", // Posiciona absolutamente el botón
    },
    text: {
        fontSize:   30,
        textAlign: "center", // Centra el texto horizontalmente
        position: "absolute"
    },
});
