/*
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'
import { useGetProductsByCategoryQuery } from '../app/services/shop'
//
import { useGetProductsQuery } from '../app/services/shop'

const ProductsByCategory = ({navigation,route}) => {

  const {categorySelected} = route.params
  //const {data:products,isError,isLoading,isSuccess,error} = useGetProductsByCategoryQuery(categorySelected)
  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  //probando obtener productos
  //const {data:products, isLoading} = useGetProductsByCategoryQuery("Procesador")
  const {data:products, isLoading} = useGetProductsQuery()

  const handlerKeyword = (k) => {
    setKeyword(k)
  }

  useEffect(()=>{
   //setProductsFiltered(products)
   if(categorySelected && products)  setProductsFiltered(products.filter(product => product.category === categorySelected))
   if(keyword) setProductsFiltered(products.filter(product => {
    const productTitleLower = product.title.toLowerCase()
    const keywordLower = keyword.toLowerCase()
    return productTitleLower.includes(keywordLower)
  }))
  },[categorySelected,keyword,products])
  

  if(isLoading) return <View><Text>cargando...</Text></View>


  return (
    <>
        <Search handlerKeyword={handlerKeyword}/>
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item})=> <ProductByCategory navigation={navigation}  item={item}/>}
        />
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})
*/

// VERSION CLASE 16


import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'
import { useGetProductsByCategoryQuery } from '../app/services/shop'
//import LoadingSpinner from '../components/LoadingSpinner'
//import Error from '../components/Error'
//import EmptyListComponent from '../components/EmptyListComponent'

const ProductsByCategory = ({navigation,route}) => {

  const {categorySelected} = route.params
  const {data:products,isError,isLoading,isSuccess,error} = useGetProductsByCategoryQuery(categorySelected)
  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  useEffect(()=>{
    setProductsFiltered(products)
    if(keyword) setProductsFiltered(products.filter(product => {
     const productTitleLower = product.title.toLowerCase()
     const keywordLower = keyword.toLowerCase()
     return productTitleLower.includes(keywordLower)
   }))
   },[categorySelected,keyword,products])

  if(isLoading) return <View><Text>cargando...</Text></View>
  if(isError) return console.log(products)//<View><Text>erroor...</Text></View>
  if(isSuccess && products.length === 0) return 
  const handlerKeyword = (k) => {
    setKeyword(k)
  }




  return (
    <>
        <Search handlerKeyword={handlerKeyword}/>
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item})=> <ProductByCategory navigation={navigation}  item={item}/>}
        />
    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})