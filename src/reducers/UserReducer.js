import AsyncStorage from "@react-native-async-storage/async-storage"

const INITIAL_STATE = {
  token: '',
  user: {},
  property: {}
}

export default (state = INITIAL_STATE, action = {} ) => {

  switch(action.type){
    case 'setToken':
      AsyncStorage.setItem('@econd:token', action.payload.token)
      return {
        ...state,
        token: action.payload.token
      }
    break 

    case 'setUser':
      return {
        ...state,
        token: action.payload.user
      }
    break 

    case 'setProperty':
      return {
        ...state,
        token: action.payload.property
      }
    break 
  }

  return state

}