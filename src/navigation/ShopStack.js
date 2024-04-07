import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import Header from '../components/Header';
import Home from '../screens/Home';
import ProductsByCategory from '../screens/ProductsByCategory';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
 return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        header: () => (
          <Header
            navigation={navigation}
            title={
              route.name === "Home"
                ? "Categorias"
                : route.name === "ProductsByCategory"
                ? route.params.categorySelected
                : "Detalle"
            }
          />
        ),
        ...TransitionPresets.ModalSlideFromBottomIOS,
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
 );
};

export default ShopStack;
