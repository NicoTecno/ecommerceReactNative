import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../features/cart/cartSlice'

const CartItem = ({item}) => {
    const dispatch = useDispatch()
  return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri:item.thumbnail}} resizeMode="cover"/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
                <Text style={styles.text2}>Precio: ${item.price} </Text>
            </View>
            <View style={styles.trashContainer}>
                <Pressable onPress={()=> dispatch(deleteCartItem(item.id))}>
                    <Entypo name="trash" size={32} color={colors.rojo}/>
                </Pressable>
            </View>
            
        </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        backgroundColor:colors.green3,
        //padding:20,
        margin:10,
        borderWidth:2,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        height:140,
        alignItems:"center",
        
    },
    textContainer:{
        width:"70%",
        flex:2
    },
    text:{
        color:colors.lightGray,
        fontSize:19,
        fontFamily:fonts.JosefinSansBold
    },
    text2:{
        color:colors.lightGray,
        fontSize:14,
        fontFamily:fonts.JosefinSansBold
    },
    image:{
        height:120,
        width:120,
    },
    trashContainer:{
        flex:1,
        justifyContent: 'center', // Centra el botón de basura verticalmente
        alignItems: 'center', // Centra el botón de basura horizontalmente
    }

})