import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="what do you want to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="click"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'top',
  },
});
