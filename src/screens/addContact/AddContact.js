import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomButton from '../../components/CustomButton';
import FormInput from '../../common/components/FormInput';

const initialValues = {
  name: '',
  phone: '',
  email: '',
  dob: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(11, 'Must be exactly 11 digits')
    .max(11, 'Must be exactly 11 digits')
    .required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  dob: Yup.string().required('Date of Birth is required'),
});

const AddContact = () => {
  const handleAddContact = () => {
    // Handle adding the contact to the database or storage here
    console.log('Add Contact pressed');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, {resetForm}) => {
        handleAddContact();
        resetForm();
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View>
          <Text>Add Contact</Text>
          <FormInput
            label="Name"
            placeholder=""
            name="name"
            styles={styles}
            value={values?.name}
            error={errors?.name}
            touched={touched?.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            label="Phone"
            placeholder=""
            name="phone"
            styles={styles}
            value={values?.phone}
            error={errors?.phone}
            touched={touched?.phone}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            label="Email"
            placeholder="xyz@gmail.com"
            name="email"
            styles={styles}
            value={values?.email}
            error={errors?.email}
            touched={touched?.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <FormInput
            label="DOB"
            placeholder="dd/mm/yy"
            name="dob"
            styles={styles}
            value={values?.dob}
            error={errors?.dob}
            touched={touched?.dob}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <CustomButton
            text="Add"
            color="blue"
            onHandlePress={handleSubmit}></CustomButton>
        </View>
      )}
    </Formik>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },
});
