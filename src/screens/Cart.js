import { StyleSheet, Text, View,FlatList,Pressable } from 'react-native'
import CartItem from '../components/CartItem'
import fonts from '../utils/globals/fonts'
import { useSelector,useDispatch} from 'react-redux'
import { usePostOrderMutation } from '../app/services/orders'
import { deleteCart } from '../features/cart/cartSlice'
import React, { useEffect, useState } from 'react';

import { Image } from 'react-native'
import imagenLocal from '../../assets/carrito.png'
const imagenUri = Image.resolveAssetSource(imagenLocal).uri;

const Cart = ({navigation}) => {

    const dispatch = useDispatch()
    const cart = useSelector((state)=> state.cart)
    const localId = useSelector((state)=> state.auth.localId)
    const [triggerAddOrder] = usePostOrderMutation()
    const [carritoVacio, setCarritoVacio] = useState(true);

    useEffect(() => {
        if (cart.items && cart.items.length === 0) {
            setCarritoVacio(true);
        } else {
            setCarritoVacio(false);
        }
     }, [cart.items]);

    const handlerAddOrder = async () => {
        const createdAt = new Date().toLocaleString()
        const order = {
            createdAt,
            ...cart
        }
         await triggerAddOrder({localId,order})
         dispatch(deleteCart())
         navigation.navigate("OrdersStack")

      


    }

  return (
    <>
      {carritoVacio ? (
          <View style={styles.container}>
          <FlatList
          data={cart.items}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=> <CartItem item={item}/>}
          />
          
              <Image source={require('../../assets/carrito.png')} style={{width: "auto", height: 200}} />
          <View style={styles.confirmContainer}>
              <Pressable onPress={handlerAddOrder}>
                  <Text style={styles.confirmText}>Confirmar</Text>
              </Pressable>
              <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
          </View>
  
          </View>
      ) : (
        <>
          <View style={styles.container}>
        <FlatList
        data={cart.items}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <CartItem item={item}/>}
        />
        
        <View style={styles.confirmContainer}>
            <Pressable onPress={handlerAddOrder}>
                <Text style={styles.confirmText}>Confirmar</Text>
            </Pressable>
            <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
        </View>

        </View>
        </>
      )}</>
    )}

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