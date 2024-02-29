import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import colors from '../utils/globals/colors'

const ButtomNewCustomizable = ({title, color ,onPress}) => {
  return (
    <Pressable style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default ButtomNewCustomizable

const styles = StyleSheet.create({
    container:{
        //backgroundColor:"#EFA700",
        backgroundColor: colors.verdeOscuro,
        minWidth: 40,
        alignItems:"center",
        justifyContent: "center",
        borderRadius:10,
        borderWidth:2,
    },
    text:{
        fontSize:25,
        color:"white",
        fontWeight:"900",
    }
})