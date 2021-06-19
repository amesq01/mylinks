import React from "react";

import {
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatusBarPage from "../../Components/StatusBarPage";
import Menu from "../../Components/Menu";
import {
  ContainerLogo,
  Logo,
  InputContainer,
  IconBoxLeft,
  Input,
  Button,
  ButtonText,
  IconBoxRight,
} from "./styles";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["#1ddbb9", "#132742"]}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <StatusBarPage backGroundColor="#1ddbb9" barStyle="light-content" />
        <Menu />
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "position"}
          enabled
        >
          <View>
            <ContainerLogo>
              <Logo
                source={require("../../assets/Logo-2.png")}
                resizeMode="contain"
              />
            </ContainerLogo>
            <InputContainer>
              <IconBoxLeft>
                <Feather name="link" size={24} color="#fff" />
              </IconBoxLeft>
              <Input
                placeholder="Cole seu link aqui"
                placeholderTextColor="#fff"
              />
              <IconBoxRight>
                <Feather name="trash" size={24} color="#fff" />
              </IconBoxRight>
            </InputContainer>

            <Button>
              <ButtonText>Encurtar Link</ButtonText>
            </Button>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
