import React, { FC } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const CustomTestInput: FC<{
  name: string;
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}> = ({ onChange, value, errorMessage, name }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <TextInput
        style={{
          ...styles.input,
          ...(errorMessage ? styles.inputError : {}),
        }}
        onChangeText={onChange}
        value={value}
      />
      {errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
  },
  container: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBottom: 10,
  },
});
