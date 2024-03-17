// import { StyleSheet, Text, View ,Button,TextInput } from 'react-native'
// import React, { useState } from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import { increment,decrement,incrementByAmount } from '../features/counter/counterSlice'

// const Counter = () => {

//     const dispatch = useDispatch()
//     const count = useSelector((state)=> state.counter.value)
//     const [number,setNumber] = useState(0)

//   return (
//     <View style={styles.counterContainer}>
//         <Button title='Aumentar' onPress={()=> dispatch(increment()) }/>
//         <Text>{count}</Text>
//         <Button title='Disminuir'  onPress={ ()=> dispatch(decrement())  }/>
//         <TextInput style={styles.input} onChangeText={ (t) => setNumber(parseInt(t)) }/>
//         <Button title='monto' onPress={ ()=> dispatch(incrementByAmount(number)) } />
//     </View>
//   )
// }

// export default Counter

// const styles = StyleSheet.create({
//     counterContainer:{
//         flexDirection:"row",
//         justifyContent:"space-around",
//         alignItems:"center",
//         margin:10
//       },
//       input:{
//         borderWidth:2,
//         width:50,
//       }
// })
import { StyleSheet, View, Button,Text } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import colors from '../utils/globals/colors'
import ButtomNewCustomizable from './ButtomNewCustomizable'
//

const Counter = ({initialValue, textButton, product}) => {
  const [count, setCount] = useState(initialValue);
  const dispatch = useDispatch();

  const handlerAddCartItem = (quantity) => {
    dispatch(addCartItem({...product, quantity}));
  }

  return (
    <View style={styles.counterContainer}>
      <View style={styles.buttonContainer}>
        <ButtomNewCustomizable title={"+"} onPress={() => setCount(count + 1)} color={colors.verdeClaro}/>
        <Text style={styles.text}>{count}</Text>
        <ButtomNewCustomizable title={"-"} onPress={() => setCount(count - 1)} color={colors.rojo}/>
      </View>
      <Button title={textButton} onPress={() => handlerAddCartItem(count)} />
    </View>
  );
}


export default Counter

const styles = StyleSheet.create({
  counterContainer: {
     flexDirection: "column",
     justifyContent: "space-around",
     alignItems: "center",
     margin: 10
  },
  buttonContainer: {
     flexDirection: "row",
     justifyContent:"space-between",
     alignItems: "center",
     marginBottom: 10 // Añade un margen en la parte inferior para separar del botón de agregar al carrito
  },
  text: {
     fontSize:24,
     width: 50,
     textAlign:"center"
  },
 });