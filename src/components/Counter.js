import { StyleSheet, View, Button,Text } from 'react-native'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../features/cart/cartSlice'
import colors from '../utils/globals/colors'
import ButtomNewCustomizable from './ButtomNewCustomizable'


const Counter = ({initialValue, textButton, product, onAddToCart}) => {
  const [count, setCount] = useState(initialValue);
  const dispatch = useDispatch();

  const handlerAddCartItem = (quantity) => {
    dispatch(addCartItem({...product, quantity}));
    onAddToCart();
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
 };

  return (
    <View style={styles.counterContainer}>
      <View style={styles.buttonContainer}>
        <ButtomNewCustomizable title={"+"} onPress={() => setCount(count + 1)} color={colors.verdeClaro}/>
        <Text style={styles.text}>{count}</Text>
        <ButtomNewCustomizable title={"-"} onPress={handleDecrement} color={colors.rojo}/>
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