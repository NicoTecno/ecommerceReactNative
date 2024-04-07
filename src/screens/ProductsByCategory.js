import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProductByCategory from '../components/ProductByCategory';
import Search from '../components/Search';
import { useGetProductsByCategoryQuery } from '../app/services/shop';
import LoadingSpinner from '../components/LoadingSpinner';
import Lupa from '../components/Lupa';
import fonts from '../utils/globals/fonts'
import colors from '../utils/globals/colors';


const ProductsByCategory = ({ navigation, route }) => {
 const { categorySelected } = route.params;
 const { data: products, isError, isLoading, isSuccess, error } = useGetProductsByCategoryQuery(categorySelected);
 const [productsFiltered, setProductsFiltered] = useState([]);
 const [keyword, setKeyword] = useState("");
 const [condicion, setCondicion] = useState(false);

 useEffect(() => {
    if (categorySelected && products) {
      setProductsFiltered(products.filter(product => product.category === categorySelected));
    }
    if (keyword) {
      setProductsFiltered(products.filter(product => {
        const productTitleLower = product.title.toLowerCase();
        const keywordLower = keyword.toLowerCase();
        return productTitleLower.includes(keywordLower);
      }));
    }
 }, [categorySelected, keyword, products]);

 useEffect(() => {
    if (productsFiltered && productsFiltered.length === 0) {
      setCondicion(true);
    } else {
      setCondicion(false);
    }
 }, [productsFiltered]);

 const handlerKeyword = (k) => {
    setKeyword(k);
 };

 if (isLoading) return <LoadingSpinner />;
 if (isError) return <View><Text>Error...</Text></View>;
 //if (isSuccess && products.length === 0) return <View><Text>No hay producto...</Text></View>;

 return (
    <>
      {condicion ? (
        <View>
          <Search handlerKeyword={handlerKeyword} />
          <Text style={styles.confirmText}>No se encontraron resultados</Text>
          <Lupa/>
        </View>
      ) : (
        <>
          <Search handlerKeyword={handlerKeyword} />
          <FlatList
            data={productsFiltered}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ProductByCategory navigation={navigation} item={item} />}
          />
        </>
      )}
    </>
 );
};

export default ProductsByCategory;

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:"space-between",
      marginBottom:130
  },
  confirmContainer:{
      flexDirection:"row",
      backgroundColor:"gray",
      padding:25,
      justifyContent:"space-between",
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
