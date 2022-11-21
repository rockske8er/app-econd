
import { StatusBar } from 'react-native';
import { StateProvider } from './src/contexts/StateContext';
import { Routes } from './src/routes';

export default function App() {
  return (
    <StateProvider>
      <StatusBar backgroundColor='transparent' translucent barStyle='dark-content' />
      <Routes />
    </StateProvider>
  );
}

