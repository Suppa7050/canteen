// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/Details';
import AdminAddItem from './screens/AdminAddItem';
import AdminHomePage from './screens/AdminHomePage';
import AdminLogin from './screens/AdminLogin';
import AdminViewOrders from './screens/AdminViewOrders';
import CartClient from './screens/CartClient';
import ClientHome from './screens/ClientHome';
import ClientLogin from './screens/ClientLogin';
import ClientMenu from './screens/ClientMenu';
import ClientPayment from './screens/ClientPayment';
import ClientSignup from './screens/ClientSignup';
import ClientVerifyOTP from './screens/ClientVerifyOtp';
import PaymentSuccess from './screens/PaymentSuccess';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="AdminAddItem" component={AdminAddItem} />
        <Stack.Screen name="AdminHomePage" component={AdminHomePage} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="AdminViewOrders" component={AdminViewOrders} />
        <Stack.Screen name="CartClient" component={CartClient} />
        <Stack.Screen name="ClientHome" component={ClientHome} />
        <Stack.Screen name="ClientLogin" component={ClientLogin} />
        <Stack.Screen name="ClientMenu" component={ClientMenu} />
        <Stack.Screen name="ClientPayment" component={ClientPayment} />
        <Stack.Screen name="ClientSignup" component={ClientSignup} />
        <Stack.Screen name="ClientVerifyOtp" component={ClientVerifyOTP} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
