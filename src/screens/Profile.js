import { StyleSheet, Text, View,Image } from 'react-native'
import AddButton from '../components/AddButton'
//import { useSelector } from 'react-redux'
import { useGetImageQuery, useGetUserLocationQuery } from '../app/services/profile'
import colors from '../utils/globals/colors'
import ButtomNewCustomizable from '../components/ButtomNewCustomizable'
//

import { useDispatch, useSelector } from "react-redux"
import { clearUser } from "../features/auth/authSlice"
import { deleteSession } from "../utils/db"

//
import LoadingSpinner from '../components/LoadingSpinner'


const Profile = ({navigation}) => {
    const localId = useSelector((state)=> state.auth.localId)
    //const idToken = useSelector((state) => state.auth.idToken)
    const dispatch = useDispatch()
    const {data:locationFormatted, isLoading} = useGetUserLocationQuery(localId)
    const {data} = useGetImageQuery(localId)
    
    const onLogout = () => {
        dispatch(clearUser())
        deleteSession()
    }

    if(isLoading) return <LoadingSpinner/>


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
        <ButtomNewCustomizable title={"Cerrar Sesion"}  onPress={onLogout} color={colors.rojo}/>
        <LoadingSpinner/>

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