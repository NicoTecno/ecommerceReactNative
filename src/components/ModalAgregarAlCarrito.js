import React from 'react';
import { StyleSheet, View, Text, Pressable, Modal } from 'react-native';
import colors from '../utils/globals/colors';
import fonts from '../utils/globals/fonts';
import ButtomNewCustomizable from './ButtomNewCustomizable';

const ModalAgregarAlCarrito = ({ modalVisible, onClose, onGoToCart }) => {
 return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType='fade'
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>¡Producto agregado al carrito!</Text>
          <View style={styles.buttonContainer}>
            <ButtomNewCustomizable title="Seguir comprando" onPress={onClose} color={colors.gris} style={{ marginBottom: 10 }} />
            <ButtomNewCustomizable title="Ir al carrito" onPress={onGoToCart} color={colors.gris} />
          </View>
        </View>
      </View>
    </Modal>
 );
};

export default ModalAgregarAlCarrito;

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
 },
 content: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.verdeItermedio,
    padding: 30,
    borderRadius: 25,
 },
 text: {
    fontSize: 16,
    color: 'white',
    fontFamily: fonts.JosefinSansBold,
    marginBottom: 20,
 },
 buttonContainer: {
    flexDirection: 'column', // Cambiado a 'column' para apilar los botones verticalmente
    justifyContent: 'space-between',
    width: '100%',
 },
});
