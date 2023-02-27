import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const handleEmailChange = newEmail => {
    setLogin({ ...login, email: newEmail })
  }

  const handlePasswordChange = newPassword => {
    setLogin({ ...login, password: newPassword })
  }

  const handlePress = () => {
    console.log('Login pressed');
  }

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Email"
        onChangeText={handleEmailChange}
        defaultValue={login.email}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
        defaultValue={login.password}
      />
      <TouchableOpacity onPress={handlePress}>
        <Text style={{ backgroundColor: 'blue', color: 'white', padding: 10 }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
