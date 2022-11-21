import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useStateValue } from '../../../contexts/StateContext';
import { getToken, validateToken } from '../../../services/api';
import { Container, Loading  } from './styles';

export function Preload() {

const [context, dispatch] =   useStateValue()

 const { reset } =  useNavigation()

  useEffect(() => {
    const checkLogin = async () => {
     const token =  await getToken()

     if(token){
      const response = await validateToken()

      if(response.error ===  ''){
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

      }else {
        Alert.alert(response.error)

        dispatch({
          type: 'setToken',
          payload: {
            token: ''
          }
        })

        reset({
          index: 1,
          routes: [{
            name: 'Login'
          }]
        })
      }

     }else{

      reset({
        index: 1,
        routes: [{
          name: 'Login'
        }]
      })
     }
    }

    checkLogin()
  
  }, [])
  
  return (
    <Container>
      <Loading size={'large'} color={'#8863e6'} />
    </Container>
  );
}
