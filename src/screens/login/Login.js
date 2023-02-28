import * as Yup from 'yup';
import {Formik} from 'formik';
import React from 'react';
import Button from '../../components/Button';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('ContactsList');
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, {resetForm}) => {
        handlePress();
        resetForm();
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="abc@xyz.com"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors?.email && touched?.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="......"
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
          </View>
          <Button
            text="Login"
            color="blue"
            onHandlePress={handleSubmit}></Button>
        </View>
      )}
    </Formik>
  );
};

export default Login;

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
