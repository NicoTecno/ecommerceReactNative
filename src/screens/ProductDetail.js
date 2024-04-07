import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import colors from '../utils/globals/colors'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import { useGetProductQuery } from '../app/services/shop'
import Counter from '../components/Counter'
import LoadingSpinner from '../components/LoadingSpinner';
//
import Lupa from '../components/Lupa';
import fonts from '../utils/globals/fonts'



import React, { useEffect, useState } from 'react';

const ProductDetail = ({route}) => {

   const dispatch = useDispatch()
   const {productId} = route.params
   const {data:product,isLoading,isError,isSuccess} = useGetProductQuery(productId)

   const [condicion, setCondicion] = useState(true);


   useEffect(() => {
    if (isSuccess && product === null) {
      setCondicion(true);
    } else {
      setCondicion(false);
    }
 }, [product]);
 
   if (isLoading) return <LoadingSpinner />;
   if(isError) return <View><Text>error...</Text></View>
   //if(isSuccess && product === null) return <View><Text>No se encontro el producto</Text></View>

  return (
    <>
    {condicion ? (
      <View>
        <Text style={styles.confirmText}>El producto no esta disponible</Text>
        <Lupa/>
      </View>
    ) : (
      <>
        <View style={styles.container}>
          <View style={styles.content} >
          <Image
            style={styles.image}
            source={{uri:product?.images ? product.images[0] : null}}
            resizeMode='cover'
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text>{product.description}</Text>
          </View>
          <View style={styles.containerPrice }>
          <Text style={styles.price}>$ {product.price}</Text>
          <Counter 
            initialValue={1}
            product={product} 
            textButton="Agregar al carrito" />
          {/* <Pressable style={styles.buyNow} onPress={()=>dispatch(addCartItem(product))}>
            <Text style={styles.buyNowText}>Carrito</Text>
          </Pressable> */}
        </View>
      </View>
    </View>
      </>
    )}
  </>
    
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container:{
    width:"100%",
    flex:1,
    justifyContent:"start",
    alignItems:"center"
  },
  content:{
    width:"100%"
  },

  image:{
    width:"100%",
    height:300
  },
  containerText:{
    gap:25,
    paddingHorizontal:5,
    paddingVertical:25
  },

  containerPrice:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      marginVertical:10
  },
  title:{
    fontSize:20,
    fontWeight:"bold"
  },
  price:{
    fontSize:30
  },
  buyNow:{
    backgroundColor:colors.green1,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5
  },
  buyNowText:{
    color:"white"
  },
  confirmText:{
    fontFamily:fonts.PlayfairDisplaySCRegular,
    fontSize:18,
    color:colors.rojo,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "45%"
}
})