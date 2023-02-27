import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})
