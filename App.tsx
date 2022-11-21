
import { StateProvider } from './src/contexts/StateContext';
import { Routes } from './src/routes';

export default function App() {
  return (
    <StateProvider>
      <Routes />
    </StateProvider>
  );
}

