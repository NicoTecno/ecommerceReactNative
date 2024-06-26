/*import { StyleSheet } from 'react-native'
import { View, ActivityIndicator } from 'react-native'
import colors from '../utils/globals/colors'


const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color={colors.verdeClaro} />
    </View>
  )
}

export default LoadingSpinner

const styles = StyleSheet.create({
  container:{ 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:colors.green1}
})*/
import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import colors from '../utils/globals/colors'


export default function LoadingSpinner() {
  const animation = useRef(null);


  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: colors.blanco,
        }}
        source={require('../../assets/Animation.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: colors.blanco,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});