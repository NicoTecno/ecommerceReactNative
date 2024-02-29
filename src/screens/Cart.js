import { StyleSheet, Text, View,FlatList,Pressable } from 'react-native'
import CartItem from '../components/CartItem'
import fonts from '../utils/globals/fonts'
import { useSelector } from 'react-redux'
import ButtomNewCustomizable from '../components/ButtomNewCustomizable'
import colors from '../utils/globals/colors'

const Cart = () => {

    const cart = useSelector((state)=> state.cart)
    
  return (
    <View style={styles.container}>
        <FlatList
        data={cart.items}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <ButtomNewCustomizable title={"Confirmar"}  color={colors.verdeClaro}/>
            <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
        </View>
    </View>
  )
}

export default Cart


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        marginBottom:130
    },
    confirmContainer:{
        flexDirection:"row",
        backgroundColor:"gray",
        padding:25,
        justifyContent:"space-between",
    },
    confirmText:{
        fontFamily:fonts.PlayfairDisplaySCRegular,
        fontSize:18,
        color:"white"
    }
})