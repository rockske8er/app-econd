import { ReactNode } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

interface ChoosePropertyProps {
  children: ReactNode;
}

export function ChooseProperty({ children }: ChoosePropertyProps) {
  return (
    <Container>
      <Text>ChooseProperty</Text>

    </Container>
  );
}
