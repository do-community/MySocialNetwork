import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class FriendsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
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

export default FriendsScreen;
