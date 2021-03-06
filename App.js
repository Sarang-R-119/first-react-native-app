import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, SafeAreaView } from 'react-native';

export default function App() {

  console.log('App executed!');


  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <Image source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300",
      }} />
      <StatusBar style="auto" />
    </SafeAreaView>
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
