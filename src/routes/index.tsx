import { NavigationContainer } from "@react-navigation/native"
import { AuthStack } from "./Stack.routes"

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}

export { Routes }