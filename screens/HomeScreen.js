import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import coffeeData from '../data/coffeeData';
export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detail', { coffee: item })}
    >
      <Text style={styles.category}>{item.category.toUpperCase()}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>P{item.price}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coffee Shop Menu</Text>
      <FlatList
        data={coffeeData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#4E342E',
  },
  card: {
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#C67C4E',
  },
  category: {
    fontSize: 10,
    color: '#A1887F',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  price: {
    fontSize: 14,
    color: '#C67C4E',
    marginTop: 4,
  },
});