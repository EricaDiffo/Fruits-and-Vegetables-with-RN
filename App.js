import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View,Text, StyleSheet } from "react-native";
import ProductDetails from "./screens/ProductDetails";
import HomeScreen from "./screens/HomeScreen";
import OrderingScreen from "./screens/OrderingScreen";
import DetailScreen from "./Group/DetailScreen";
import HomeScreen1 from "./Group/HomeScreen1";
import ShopScreen from "./Group/ShopScreen";


const Tab = createBottomTabNavigator();
const stack = createStackNavigator();
export default function App(){
  return(
    // <View style={styles.container}>
    //   {/* <HomeScreen /> */}
    //   <ProductDetails/>
    //   {/* <OrderingScreen/> */}
    //   {/* <HomeScreen1/> */}
    //   {/* <DetailScreen/> */}
    //   {/* <ShopScreen/> */}
    // </View>
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="HomeScreen" component={HomeScreen} options={{hearderShown:false}}/>
        <stack.Screen  name="OrderingScreen" component={OrderingScreen} options={{hearderShown:false}}/>
        <stack.Screen name="ProductDetails" component={ProductDetails} options={{hearderShown:false}}/>
        <stack.Group name="HomeScreen1" component={HomeScreen1} options={{hearderShown:false}}/>
        <stack.Group name="ShopScreen" component={ShopScreen} options={{hearderShown:false}}/>
        <stack.Group name="DetailScreen" component={DetailScreen} options={{hearderShown:false}}/>
      {/* <Tab.Navigator>
    //     <Tab.Screen name="HomeScreen" component={HomeScreen} />
    //     <Tab.Screen name="OrderingScreen" component={OrderingScreen} />
    //     <Tab.Screen name="ProductDetails" component={ProductDetails} />
    //     <Tab.Screen name="HomeScreen1" component={HomeScreen1} />
    //     <Tab.Screen name="ShopScreen" component={ShopScreen} />
    //     <Tab.Screen name="DetailScreen" component={DetailScreen} />
    //   </Tab.Navigator> */}
    //   </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});