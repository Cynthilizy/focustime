import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>no focus items yet!</Text>;
  const renderItem=({item})=><Text style={styles.item}>- {item}</Text>
  return (
    <View>
      <Text style={styles.title}>previous focused items:</Text>
      <FlatList
      data={history}
      renderItem={renderItem}/>
    </View>
  );
};

const styles = StyleSheet.create({
  item:{
color:colors.white,
fontSize:16,
textAlign: 'center'
  },
  title: {
    color: colors.white,
    fontSize: 16,
    paddingLeft: 25,
    fontWeight: 'bold'
  },
});
