import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import * as Yup from 'yup';
import {Formik} from 'formik';

import CustomButton from '../../components/CustomButton';
import FormInput from '../../common/components/FormInput';

import route from '../../utils/constants/routeConstants';
import {colors} from '../../themes/theme';
import {scale} from 'react-native-size-matters';

const Login = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate(route.TABS);
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
          <FormInput
            label="Email"
            placeholder="abc@xyz.com"
            name="email"
            value={values?.email}
            error={errors?.email}
            touched={touched?.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            label="Password"
            placeholder="......"
            name="password"
            value={values?.password}
            error={errors?.password}
            touched={touched?.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <CustomButton
            text="Login"
            color="blue"
            onHandlePress={handleSubmit}
          />
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
    fontSize: scale(34),
    color: colors.text_primary,
    fontWeight: 'bold',
    marginBottom: scale(32),
  },
});
