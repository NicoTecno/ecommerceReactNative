import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

const ButtonPrimary = ({title,onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#EFA700",
        width:"15%",
        alignItems:"center",
        justifyContent: "center",
        borderRadius:30,
    },
    text:{
        fontSize:25,
        color:"white",
        fontWeight:"900",
    }
})