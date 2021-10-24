import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Container, InputContainer, StyledInput } from "./styles";

export function LoginForm() {
  return (
    <Container>
      <InputContainer>
        <Icon
          style={{ position: "absolute", left: 25, zIndex: 1 }}
          name='mail'
          size={25}
          color='#722e8f'
        />
        <StyledInput placeholder='Digite seu email' />
      </InputContainer>

      <InputContainer>
        <Icon
          style={{ position: "absolute", left: 25, zIndex: 1 }}
          name='lock'
          size={25}
          color='#722e8f'
        />
        <StyledInput placeholder='Senha' />
      </InputContainer>
    </Container>
  );
}
