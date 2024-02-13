import { Pressable, StyleSheet, Text, View } from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const CardCategory = ({item,selectedCategoryState}) => {
  return (
    <Pressable onPress={()=>selectedCategoryState(item)}>
      <ShadowPrimary style={styles.container}>
          <Text style={styles.text}>{item}</Text>
      </ShadowPrimary>
    </Pressable>
  )
}

export default CardCategory

const styles = StyleSheet.create({
    container:{
        width:"80%",
        backgroundColor:colors.verdeClaro,
        marginHorizontal:"10%",
        marginVertical:10,
        padding:20,
        alignItems:"center",
        borderWidth:2,
        borderRadius:25
    },
    text:{
        fontSize:22,
        fontFamily:fonts.JosefinSansBold,

        
    }
})