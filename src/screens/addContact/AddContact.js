import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

const AddContact = () => {
  const [contact, setContact] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    dob: ''
  })

  const handleInputChange = (field, value) => {
    setContact({ ...contact, [field]: value })
  }

  const handleAddContact = () => {
    // Handle adding the contact to the database or storage here
    console.log('Add Contact pressed')
  }

  return (
    <View>
      <Text>Add Contact</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Name"
        onChangeText={text => handleInputChange('name', text)}
        defaultValue={contact.name}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Phone Number"
        onChangeText={text => handleInputChange('phoneNumber', text)}
        defaultValue={contact.phoneNumber}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Email"
        onChangeText={text => handleInputChange('email', text)}
        defaultValue={contact.email}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="DOB"
        onChangeText={text => handleInputChange('dob', text)}
        defaultValue={contact.dob}
      />
      <TouchableOpacity onPress={handleAddContact}>
        <Text
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: 10,
            textAlign: 'center'
          }}>
          Add Contact
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddContact
