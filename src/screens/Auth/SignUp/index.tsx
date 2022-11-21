import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '../../../components/Button';
import { useStateValue } from '../../../contexts/StateContext';
import { register } from '../../../services/api';


import { Container , Input} from './styles';



export function SignUp() {
  const [context, dispatch] =   useStateValue()

  const { setOptions , reset} = useNavigation()

  const [name, setName] = useState('')
  const [CPF, setCPF] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleRegister = async () => {
    if(name && CPF && email && password && passwordConfirm){

      const response = await register(name, CPF, email, password, passwordConfirm)

      if(response.error === ''){

        dispatch({
          type: 'setToken',
          payload: {
            user: response.token
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


    }

    else{
      Alert.alert('Preencha os campos')
    }
  }

  useEffect(() => {
    setOptions({
      headerTitle: 'Fazer Cadastro'
    })
  }, [])
  

  return (
    <Container>

      <Input 
        placeholder='Digite seu nome completo' 
        value={name} 
        onChangeText={e => setName(e)} 
      />

      <Input 
        placeholder='Digite seu CPF' 
        keyboardType='numeric' 
        value={CPF} 
        onChangeText={e => setCPF(e)} 
      />

      <Input 
        placeholder='seu@email.com' 
        value={email} 
        onChangeText={e => setEmail(e)}
        keyboardType={'email-address'} 
      />
      
      <Input
        placeholder='Digite sua senha' 
        secureTextEntry
        value={password} 
        onChangeText={e => setPassword(e)} 
      />

      <Input
        placeholder='Confirme sua senha' 
        secureTextEntry
        value={passwordConfirm} 
        onChangeText={e => setPasswordConfirm(e)} 
      />

      <Button 
        title='Cadastre-se'
        onPress={handleRegister}
      />
    </Container>
  );
}
