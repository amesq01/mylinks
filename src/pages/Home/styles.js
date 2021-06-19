import styled from "styled-components/native";
import { Platform } from "react-native";

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === "ios" ? 125 + "px" : 115 + "px"};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  margin: 0 15px;
  background-color: rgba(255, 255, 255, 0.15);
  align-items: center;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  margin-top: 80px;
`;
export const IconBoxLeft = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 7px;
`;
export const Input = styled.TextInput`
  font-size: 18;
  color: white;
  text-align: center;
  width: 80%;
`;

export const Button = styled.TouchableOpacity`
  background-color: white;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  margin-top: 15px;
  height: 45px;
  border-radius: 7px;
  margin-bottom: 40px;
`;
export const ButtonText = styled.Text`
  font-size: 20px;
`;

export const IconBoxRight = styled.TouchableOpacity``;
