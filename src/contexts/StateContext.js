import { createContext, useContext, useReducer } from 'react'

import UserReducer from './../reducers/UserReducer'

const INITIAL_STATE = {
  user: UserReducer()
}

const MAIN_REDUCER = (state, action) => ({
  user: UserReducer(state.user, action)
})

export const StateContext = createContext()

export const StateProvider = ({ children }) => {

  const [state, dispatch] = useReducer(MAIN_REDUCER, INITIAL_STATE)

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
} 

export const useStateValue = () => useContext(StateContext)