import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../utils/globals/colors';

const ButtomNewCustomizable = ({title, color, onPress, style, iconName}) => {
 return (
    <Pressable style={[styles.container, { backgroundColor: color }, style]} onPress={onPress}>
      <View style={styles.iconTextContainer}>
        {iconName && <Entypo name={iconName} size={20} color="white" />}
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
 );
}

export default ButtomNewCustomizable;

const styles = StyleSheet.create({
 container: {
    minWidth: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
 },
 iconTextContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
 },
 text: {
    fontSize: 25,
    color: "white",
    fontWeight: "900",
    marginRight: 5, // Ajusta el espacio entre el texto y el ícono solo si hay un ícono
 }
});
