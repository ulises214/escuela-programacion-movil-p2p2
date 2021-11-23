import React, { FC, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const LoginView: FC = () => {
  const [name, setName] = useState('Walle214');
  const getLogin = () => {
    Actions.home({ text1: name });
  };
  return (
    <View style={styles.container}>
      <Button
        onPress={getLogin}
        title='Login'
        color='#841584'
        accessibilityLabel='Login button'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
