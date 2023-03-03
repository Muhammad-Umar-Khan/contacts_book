import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {scale} from 'react-native-size-matters';
import {colors} from '../../themes/theme';

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
    fontSize: scale(34),
    color: colors.text_primary,
    fontWeight: 'bold',
    marginBottom: scale(32),
  },
  inputContainer: {
    width: '80%',
    marginBottom: scale(16),
  },
  input: {
    height: scale(50),
    borderColor: 'gray',
    padding: scale(14),
    fontSize: 20,
    backgroundColor: '#ECECEC',
    borderStyle: 'solid',
    borderWidth: scale(2),
    borderRadius: scale(15),
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
  label: {
    color: colors.text_primary,
    marginBottom: scale(5),
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  button: {
    marginTop: scale(32),
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: scale(4),
    padding: scale(8),
  },
});
