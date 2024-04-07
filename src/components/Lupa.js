import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import colors from '../utils/globals/colors'


export default function Lupa() {
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
        source={require('../../assets/AnimationLupa.json')}
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
    marginTop:"30%"
  },

});