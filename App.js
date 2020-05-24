import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './components/Avatar'
import Constants from 'expo-constants'
import AuthorRow from './components/AuthorRow';
import Card from './components/Card';
import CardList from './components/CardList';

export default function App() {

  const items = [
    {id: 0, author:'Jessica Jones'},
    {id: 1, author:'Funmi Hans'},
    {id: 2, author:'Victor Adewusi'},
  ]

  return (
    <View style={styles.container}>
    <CardList items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Constants.statusBarHeight,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
