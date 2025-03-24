import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, PlayerVsPlayerScreen, PlayerVsAIScreen } from './screens/Screens'; // Adjust the path if needed

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlayerVsPlayer" component={PlayerVsPlayerScreen} />
        <Stack.Screen name="PlayerVsAI" component={PlayerVsAIScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
