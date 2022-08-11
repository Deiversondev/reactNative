import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Getting back app!</Text>
      <StatusBar style="auto" />


      <TouchableOpacity onPress={() => alert('Helooo page')} style={{backgroundColor:'blue'}}>

<Text style={{color:'white'}}>Click me</Text>

    </TouchableOpacity>

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
