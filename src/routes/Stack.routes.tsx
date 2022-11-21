import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../screens/Auth/Login';
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
      </Group>
    </Navigator>
  )
}

export { AuthStack }