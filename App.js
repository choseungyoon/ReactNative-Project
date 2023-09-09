import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['right','left','bottom','top']}>
        <Header></Header>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingTop : statusBarHeight
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
