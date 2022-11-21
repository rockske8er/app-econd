import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl =  'https://api.b7web.com.br/devcond/api'

export const request = async (method, endpoint, params, token = null) => {
  method = method.toLowerCase()
  let fullUrl = `${baseUrl}${endpoint}`
  let body = null

  switch (method) {
    case 'get':
      const query = new URLSearchParams(params).toString()
      fullUrl += `?${query}`
      break

      case 'post':
      case 'put':
      case 'delete':
        body = JSON.stringify(params)
  
  }

  let headers = { 'Content-type'  :  'application/json'}

  if(token){
    headers.authorization = `Bearer ${token}`
  }

  let req = await fetch(fullUrl, {
    method,
    headers,
    body
  })

  const response = req.json()

  return response
  
}

export const getToken = async () => {
  const token  = await AsyncStorage.getItem('@econd:token')
  return token
}

export const validateToken = async () => {
  const token  = await AsyncStorage.getItem('@econd:token')
  const response = await request('post', '/auth/validate', {}, token)
  return response
}

export const login = async (cpf, password) => {
  const response =await request('post', '/auth/login', {
    cpf,
    password
  })
  return response
}

export const logout = async () => {
  const token  = await AsyncStorage.getItem('@econd:token')
  const response = await request('post', '/auth/logout', {}, token )
  await AsyncStorage.removeItem('@econd:token')
  await AsyncStorage.removeItem('@econd:property')
  return response
}

export const register = async (name, cpf, email, password, password_confirm) => {

  const response = await request('post', '/auth/register', {
    name,
    cpf,
    email,
    password,
    password_confirm
  },)

  return response
}
