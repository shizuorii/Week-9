import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function DetailScreen({ route, navigation }) {
  const { coffee } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{coffee.category.toUpperCase()}</Text>
      <Text style={styles.name}>{coffee.name}</Text>
      <Text style={styles.price}>P{coffee.price}</Text>
      <Text style={styles.description}>{coffee.description}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>← Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    padding: 20,
    justifyContent: 'center',
  },
  category: {
    fontSize: 11,
    color: '#A1887F',
    marginBottom: 8,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  price: {
    fontSize: 20,
    color: '#C67C4E',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: '#5D4037',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4E342E',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});