// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to AdminAddItem"
        onPress={() => navigation.navigate('AdminAddItem')}
      />
      <Button
        title="Go to AdminHomePage"
        onPress={() => navigation.navigate('AdminHomePage')}
      />
      <Button
        title="Go to AdminLogin"
        onPress={() => navigation.navigate('AdminLogin')}
      />
      <Button
        title="Go to AdminViewOrders"
        onPress={() => navigation.navigate('AdminViewOrders')}
      />
      <Button
        title="Go to CartClient"
        onPress={() => navigation.navigate('CartClient')}
      />
      <Button
        title="Go to ClientHome"
        onPress={() => navigation.navigate('ClientHome')}
      />
      <Button
        title="Go to ClientLogin"
        onPress={() => navigation.navigate('ClientLogin')}
      />
      <Button
        title="Go to ClientMenu"
        onPress={() => navigation.navigate('ClientMenu')}
      />
      <Button
        title="Go to ClientPayment"
        onPress={() => navigation.navigate('ClientPayment')}
      />
      <Button
        title="Go to ClientVerifyOtp"
        onPress={() => navigation.navigate('ClientVerifyOtp')}
      />
      <Button
        title="Go to ClientSignup"
        onPress={() => navigation.navigate('ClientSignup')}
      />
      <Button
        title="Go to PaymentSuccess"
        onPress={() => navigation.navigate('PaymentSuccess')}
      />
      
      
    </View>
  );
}

export default HomeScreen;
