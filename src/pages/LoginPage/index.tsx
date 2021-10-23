import React from 'react'
import { View, Text } from 'react-native'
import { LoginForm } from '../../components/LoginForm'
import { Container } from './style'

export function LoginPage() {
  return (
    <Container>
      <Text>Faça seu login e seja feliz 🤗️ </Text>
      <LoginForm />
    </Container>
  )
}
