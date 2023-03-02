import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const FormInput = ({
  label,
  name,
  placeholder,
  handleChange,
  handleBlur,
  value,
  error,
  touched,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={value}
      />
      {error && touched && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 32,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 16,
  },
  input: {
    height: 51,
    borderColor: 'gray',
    padding: 14,
    fontSize: 20,
    backgroundColor: '#ECECEC',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 15,
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
  label: {
    color: '#000000',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 32,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 4,
    padding: 8,
  },
});
