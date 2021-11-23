import React, { FC, useMemo } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CustomTestInput } from '../components/textInput';
import { useFormField } from '../hooks/useFormField';
export const LoginView: FC = () => {
  const [name, onNameChange, nameErrorMessage] =
    useFormField('Name is required');
  const [password, onPasswordChange, passwordErrorMessage] = useFormField(
    'Password is required'
  );
  const areInputValid = useMemo(() => {
    return (
      nameErrorMessage === undefined && passwordErrorMessage === undefined
    );
  }, [nameErrorMessage, passwordErrorMessage]);
  const getLogin = () => {
    Actions.home();
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/spicy.jpg')} style={styles.img} />
      <CustomTestInput
        name='Nombre'
        value={name}
        onChange={onNameChange}
        errorMessage={nameErrorMessage}
      />
      <CustomTestInput
        name='Contraseña'
        value={password}
        onChange={onPasswordChange}
        errorMessage={passwordErrorMessage}
      />
      <Button
        disabled={!areInputValid}
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
  img: {},
});
