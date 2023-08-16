// DetailsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({ navigation }) {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default DetailsScreen;
