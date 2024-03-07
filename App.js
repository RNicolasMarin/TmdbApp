import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { fetchMoviesNowPlaying } from './util/http';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    async function getMoviesNowPlaying() {
      try {
        const movies = await fetchMoviesNowPlaying(8)
        console.log("Success: " + movies)
      } catch (error) {
        console.log("error: " + error);
      }
      
    }
    getMoviesNowPlaying();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Tmdb App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
