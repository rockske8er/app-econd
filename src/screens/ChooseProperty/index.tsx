import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import { useStateValue } from '../../contexts/StateContext';
import { logout } from '../../services/api';

import { 
  Container,
  Loading,
  ScrollWrapper,
  Header,
  Title, 
  Box,
  BTNLogout,
  BTNLogoutText,
  PropertyList,
  Property,
  PropertyText
} from './styles';

export function ChooseProperty() {

  const { reset } = useNavigation()

  const handleLogout = async () => {
    await logout()
    reset({
      index: 1,
      routes: [{ name : 'Login' }]
    })
  }

  const [context, dispatch] = useStateValue()
  const [loading, setLoading] = useState(true)


  const handleSelectProperty = async (property) => {
    await AsyncStorage.setItem('@econd:property', JSON.stringify(property))
    dispatch({
      type: 'setProperty',
      payload:{
        property
      }
    })

    reset({
      index: 1,
      routes: [{
        name: 'MainDrawer'
      }]
    })
  }

  useEffect(() => {
    const isPropertySelect = async () => {
      let property = await AsyncStorage.getItem('@econd:property')

      if(property){
        property = JSON.parse(property)

        await handleSelectProperty(property)
      }

      setLoading(false)
    }

    isPropertySelect()
  },[])
  return (
    <Container>
      <ScrollWrapper>
        {
          loading && (
            <Loading size={'large'} color={'#8863e6'}    />
          )
        }

        {
          !loading && context.user.user.properties.length > 0 &&

          <>
       
            <Header>
              <Title>
                Olá {context.user.user.name}
              </Title>

              <Title>
                Escolha uma das sua propriedades 
              </Title>
            </Header>

            <PropertyList>
              {
                context.user.user.properties.map((item, index) => (
                  <Property key={index} onPress={() => handleSelectProperty(item)}>
                    <PropertyText>
                      {item.name}
                    </PropertyText>
                  </Property>
                ))
              }
            </PropertyList>



            </>
          
        }

        {
          !loading && context.user.user.properties.length <= 0 && 
            <Box>
              <Title>
                Olá {context.user.user.name} meus parabéns
              </Title>

              <Title>
               Agora a Administração precisa liberar seu acesso
              </Title>
            </Box>
          
        }
      </ScrollWrapper>

      <BTNLogout onPress={handleLogout}>
        <BTNLogoutText>
          Sair
        </BTNLogoutText>
      </BTNLogout>
    </Container>
  );
}
