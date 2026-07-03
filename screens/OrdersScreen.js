import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Orders Screen</Text>
      <Text style={styles.subtext}>Your cart or orders will appear here.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8F0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  subtext: {
    fontSize: 14,
    color: '#8D6E63',
    marginTop: 8,
  },
});