import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You have (undefined) friends.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
