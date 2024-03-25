import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MovieListScreen from './screens/MovieListScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
          title: 'The Movie DB',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'black',
          }
        }} />
        <Stack.Screen name='MovieListScreen' component={MovieListScreen} options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'black',
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  
});
