import React from 'react'
import { View, Text, Image } from 'react-native'
import { LoginForm } from '../../components/LoginForm'
import { Container } from './style'

export function LoginPage() {
  return (
    <Container>
      <Image source={require('../../assets/logo.png')} style={{ width: 150, height: 150}} />
      <Text>LOGIN</Text>
      <LoginForm />
    </Container>
  )
}
