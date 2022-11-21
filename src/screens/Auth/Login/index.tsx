import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '../../../contexts/StateContext';
import { Container , Brand, Input } from './styles';

import logoIcon  from './../../../assets/undraw_home.png'
import { useState } from 'react';
import { Button } from '../../../components/Button';

export function Login() {
  const [context, dispatch] =   useStateValue()
  const { reset } =  useNavigation()
  const [CPF, setCPF] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Container>
      <Brand source={logoIcon} resizeMode={'contain'} />
      <Input 
        placeholder='Digite seu CPF' 
        keyboardType='numeric' 
        value={CPF} 
        onChangeText={e => setCPF(e)} 
      />
      <Input
        placeholder='Digite sua senha' 
        secureTextEntry
        value={password} 
        onChangeText={e => setPassword(e)} 
      />

      <Button title='Entrar' onPress={null}

      />

      <Button title='Cadastrar' onPress={null}

      />
    </Container>
  );
}
