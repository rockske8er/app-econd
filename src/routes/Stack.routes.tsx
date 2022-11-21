import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../screens/Auth/Login';
import { SignUp } from '../screens/Auth/SignUp';
import { ChooseProperty } from '../screens/ChooseProperty';
import { Preload } from "./../screens/Auth/Preload";


const { Screen, Group, Navigator } = createNativeStackNavigator()


const AuthStack = () => {
  return (
    <Navigator initialRouteName='Preload'>
      <Group screenOptions={{
        headerShown: false
      }}>
        <Screen name='Preload' component={Preload} />
        <Screen name='Login' component={Login} />
 
        <Screen name='ChooseProperty' component={ChooseProperty} />
      </Group>
      <Group screenOptions={{
        headerStyle:{
          backgroundColor: '#f5f6fa',
          elevation: 0,
          shadowOpacity: 0
        }
      }}>
      <Screen name='SignUp' component={SignUp} />
      </Group>

    </Navigator>
  )
}

export { AuthStack }