import { StyleSheet, Text, View,Image } from 'react-native'
import AddButton from '../components/AddButton'
import { useSelector } from 'react-redux'
import { useGetImageQuery, useGetUserLocationQuery } from '../app/services/profile'
import colors from '../utils/globals/colors'
import ButtomNewCustomizable from '../components/ButtomNewCustomizable'

const Profile = ({navigation}) => {
    const localId = useSelector((state)=> state.auth.localId)
    const {data:locationFormatted, isLoading} = useGetUserLocationQuery(localId)
    const {data} = useGetImageQuery(localId)

    if(isLoading) return <View><Text>cargando...</Text></View>

  return (
    <View style={styles.container}>
        <Image
            source={data ? {uri:data.image}:require("../../assets/user.png")}
            style={styles.image}
            resizeMode='cover'
        />
        <Text style={styles.text}>{locationFormatted.address}</Text>
        <ButtomNewCustomizable title={"Agregar Imagen de perfil"} onPress={() => navigation.navigate("ImageSelector")} color={colors.verdeClaro}/>
        <ButtomNewCustomizable title={"Agregar Direccion"} onPress={() => navigation.navigate("LocationSelector")} color={colors.verdeClaro}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200
    },
    text:{
        fontSize:16,
        marginVertical:10
    }
})