import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "./ClientLoginStyles";

const ClientLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.clientLogin}>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputPosition]} />
        <Text style={styles.enterYourHall1}>Enter your hall ticket number</Text>
        <Image
          style={[styles.userIcon1, styles.iconLayout]}
          resizeMode="cover"
          source="user.png"
        />
      </View>
      <View style={[styles.input1, styles.input1Position]}>
        <View style={[styles.inputChild, styles.inputPosition]} />
        <Text style={styles.enterYourHall1}>Password</Text>
        <Image
          style={[styles.lockIcon1, styles.iconLayout]}
          resizeMode="cover"
          source="lock.png"
        />
      </View>
      <Pressable style={[styles.input2, styles.inputLayout]} onPress={() => {}}>
        <View style={[styles.inputInner, styles.inputInnerBg]} />
        <Text style={styles.next}>Next</Text>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          resizeMode="cover"
          source="Vector.png"
        />
      </Pressable>
      <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
        Remember me
      </Text>
      <Text style={[styles.forgetPassword1, styles.rememberMeTypo]}>
        Forget password ?
      </Text>
      <View style={[styles.clientLoginChild, styles.inputInnerBg]} />
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <Pressable style={styles.signup} onPress={() => {}}>
        <Text style={[styles.signup1, styles.loginTypo]}>Signup</Text>
      </Pressable>
      <View style={[styles.bellaOlonjeLogo1111Parent, styles.bellaLayout]}>
        <Image
          style={[styles.bellaOlonjeLogo11111, styles.bellaLayout]}
          resizeMode="cover"
          source="Bella Olonje logo 111 1.png"
        />
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source="Vector 1.png"
        />
      </View>
      <View style={[styles.clientLoginItem, styles.input1Position]} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    height: 50,
    width: 300,
  },
  inputPosition: {
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  input1Position: {
    left: 30,
    position: "absolute",
  },
  inputInnerBg: {
    backgroundColor: Color.crimson,
    position: "absolute",
  },
  rememberMeTypo: {
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    fontFamily: FontFamily.mulishRegular,
    position: "absolute",
  },
  loginTypo: {
    height: 28,
    color: Color.black,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  bellaLayout: {
    height: 159,
    position: "absolute",
  },
  inputChild: {
    backgroundColor: Color.silver,
    position: "absolute",
  },
  enterYourHall1: {
    top: "34%",
    left: "7.33%",
    fontSize: FontSize.size_sm,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.mulishRegular,
    position: "absolute",
  },
  userIcon1: {
    top: "26%",
    right: "5.33%",
    bottom: "26%",
    left: "86.67%",
    width: "8%",
    height: "48%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  input: {
    top: 320,
    left: 29,
    height: 50,
    width: 300,
    position: "absolute",
  },
  lockIcon1: {
    top: "22%",
    right: "6%",
    bottom: "30%",
    left: "86%",
    width: "8%",
    height: "48%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  input1: {
    top: 395,
    height: 50,
    width: 300,
  },
  inputInner: {
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  next: {
    top: "28%",
    left: "41.67%",
    fontSize: 20,
    color: "#fcfcfc",
    fontFamily: FontFamily.mulishSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon1: {
    height: "28%",
    width: "2.67%",
    top: "40%",
    right: "36%",
    bottom: "32%",
    left: "61.33%",
  },
  input2: {
    top: 586,
    left: 29,
    height: 50,
    width: 300,
    position: "absolute",
  },
  rememberMe: {
    top: 452,
    color: "#252525",
    left: 48,
  },
  forgetPassword1: {
    top: 454,
    left: 249,
    color: Color.crimson,
  },
  clientLoginChild: {
    top: 284,
    width: 71,
    height: 3,
    left: 48,
  },
  login: {
    top: 237,
    left: 47,
    width: 107,
    position: "absolute",
  },
  signup1: {
    width: 109,
  },
  signup: {
    left: 217,
    top: 239,
    position: "absolute",
  },
  bellaOlonjeLogo11111: {
    top: 0,
    left: 0,
    width: 125,
  },
  groupChild: {
    top: 36,
    left: 86,
    width: 57,
    height: 113,
    position: "absolute",
  },
  bellaOlonjeLogo1111Parent: {
    top: 73,
    left: 120,
    width: 143,
  },
  clientLoginItem: {
    top: 451,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#cbcbcb",
    borderWidth: 1,
    width: 12,
    height: 12,
  },
  clientLogin: {
    backgroundColor: "#fff",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default ClientLogin;

