import { StyleSheet, Text, View } from 'react-native';
import Ex4 from './src/components/Ex4';

export default function App() {
  return (
    <View style={styles.container}>
      <Ex4/>
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
