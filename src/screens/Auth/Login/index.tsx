import { useNavigation } from '@react-navigation/native';
import { useStateValue } from '../../../contexts/StateContext';
import { Container , Brand, Input } from './styles';

import logoIcon  from './../../../assets/undraw_home.png'
import { useState } from 'react';
import { Button } from '../../../components/Button';
import { Alert } from 'react-native';
import { login } from '../../../services/api';

export function Login() {
  const [context, dispatch] =   useStateValue()
  const { navigate, reset } =  useNavigation()
  const [CPF, setCPF] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async () => {
    if(CPF && password){
      const response = await login(CPF, password)

      if(response.error === ''){
        dispatch({
          type: 'setToken',
          payload: {
            token: response.token
          }
        })
        dispatch({
          type: 'setUser',
          payload: {
            user: response.user
          }
        })

        reset({
          index: 1,
          routes: [{
            name: 'ChooseProperty'
          }]
        })
      }else{
        return Alert.alert(response.error)
      }
    }else{
      Alert.alert('Preencha os campos')
    }
  }

  const handleSignUp = () => {
    navigate('SignUp')
  }
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

      <Button title='Entrar' onPress={handleSignIn}/>
      <Button title='Cadastrar' onPress={handleSignUp}/>
    </Container>
  );
}
