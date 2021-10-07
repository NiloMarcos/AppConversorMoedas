import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Dashboard() {
  return(
    <View style={styles.container}>
      <Text>Screen Dashboard</Text>
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
