
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f6fa;

`;

export const ScrollWrapper = styled.ScrollView`
  flex:1;
  padding: 20px;
`;

export const Loading = styled.ActivityIndicator`

`;

export const Header = styled.View`
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #000;
  text-align: center;
  margin-top: 12px;
`;

export const Box = styled.View`
  margin: 40px 0;
  align-items: center;
`;

export const BTNLogout = styled.TouchableOpacity`
  background-color: #8863e6;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const BTNLogoutText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
`;

export const PropertyList = styled.View`margin: 20px 0;`

export const Property = styled.TouchableOpacity`
  background-color: #FFF;
  border-width: 2px;
  border-color: #e8e9ed;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-bottom: 12px;
`;

export const PropertyText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;


