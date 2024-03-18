import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { fetchMoviesNowPlaying } from './util/http';
import { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HOME SCREEN' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  
});
