import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "./ClientSignupStyles";

const ClientSignup = () => {
  	const navigation = useNavigation();
  	
  	return (
    		<View style={styles.clientSignup}>
      			<View style={[styles.input, styles.inputLayout]}>
        				<View style={[styles.inputChild, styles.inputChildPosition]} />
        				<Text style={[styles.enterYourHall1, styles.phoneNumberPosition]}>Enter your hall ticket number</Text>
        				<Image style={[styles.userIcon1, styles.iconLayout1]} resizeMode="cover" source="user.png" />
        				<View style={styles.input1}>
          					<View style={[styles.inputChild, styles.inputChildPosition]} />
          					<Text style={[styles.phoneNumber, styles.phoneNumberPosition]}>Phone number</Text>
          					<Image style={[styles.smartphoneIcon1, styles.iconLayout]} resizeMode="cover" source="smartphone.png" />
        				</View>
      			</View>
      			<View style={[styles.input2, styles.inputLayout]}>
        				<View style={[styles.inputChild, styles.inputChildPosition]} />
        				<Text style={[styles.enterYourHall1, styles.phoneNumberPosition]}>Strong Password</Text>
        				<Image style={[styles.lockIcon1, styles.iconLayout]} resizeMode="cover" source="lock.png" />
      			</View>
      			<Pressable style={[styles.input3, styles.inputLayout]} onPress={()=>{}}>
        				<View style={[styles.rectangleView, styles.inputChildPosition]} />
        				<Text style={styles.next}>Next</Text>
        				<Image style={[styles.vectorIcon1, styles.iconLayout1]} resizeMode="cover" source="Vector.png" />
      			</Pressable>
      			<View style={[styles.clientSignupChild, styles.signupPosition]} />
      			<Pressable style={styles.login} onPress={()=>{}}>
        				<Text style={[styles.login1, styles.login1Typo]}>Login</Text>
      			</Pressable>
      			<Text style={[styles.signup, styles.login1Typo]}>Signup</Text>
      			<View style={[styles.clientSignupItem, styles.clientSignupItemPosition]} />
      			<Text style={[styles.byCheckingTheContainer, styles.clientSignupItemPosition]}>
        				<Text style={styles.byCheckingThe1}>{`By checking the box you agree to our `}</Text>
        				<Text style={styles.terms}>Terms</Text>
        				<Text style={styles.byCheckingThe1}>{` and `}</Text>
        				<Text style={styles.terms}>Conditions</Text>
        				<Text style={styles.byCheckingThe1}>.</Text>
      			</Text>
      			<View style={[styles.bellaOlonjeLogo1111Parent, styles.bellaLayout]}>
        				<Image style={[styles.bellaOlonjeLogo11111, styles.bellaLayout]} resizeMode="cover" source="Bella Olonje logo 111 1.png" />
        				<Image style={styles.groupChild} resizeMode="cover" source="Vector 1.png" />
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	inputLayout: {
    		height: 50,
    		width: 300,
    		position: "absolute"
  	},
  	inputChildPosition: {
    		borderRadius: Border.br_3xs,
    		bottom: "0%",
    		top: "0%",
    		left: "0%",
    		right: "0%",
    		height: "100%",
    		position: "absolute",
    		width: "100%"
  	},
  	phoneNumberPosition: {
    		color: Color.gray_200,
    		fontSize: FontSize.size_sm,
    		left: "7.33%",
    		textAlign: "left",
    		top: "34%",
    		position: "absolute"
  	},
  	iconLayout1: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iconLayout: {
    		left: "86%",
    		right: "6%",
    		maxHeight: "100%",
    		maxWidth: "100%",
    		width: "8%",
    		height: "48%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	signupPosition: {
    		left: 221,
    		position: "absolute"
  	},
  	login1Typo: {
    		height: 28,
    		color: Color.black,
    		fontSize: FontSize.size_11xl,
    		fontFamily: FontFamily.mulishSemiBold,
    		fontWeight: "600",
    		textAlign: "left"
  	},
  	clientSignupItemPosition: {
    		top: 494,
    		position: "absolute"
  	},
  	bellaLayout: {
    		height: 159,
    		position: "absolute"
  	},
  	inputChild: {
    		backgroundColor: Color.silver
  	},
  	enterYourHall1: {
    		textAlign: "left",
    		fontFamily: FontFamily.mulishRegular
  	},
  	userIcon1: {
    		top: "26%",
    		right: "5.33%",
    		bottom: "26%",
    		left: "86.67%",
    		width: "8%",
    		height: "48%",
    		maxHeight: "100%",
    		maxWidth: "100%"
  	},
  	phoneNumber: {
    		fontWeight: "300",
    		fontFamily: FontFamily.mulishLight,
    		textAlign: "left"
  	},
  	smartphoneIcon1: {
    		bottom: "18%",
    		top: "34%",
    		right: "6%"
  	},
  	input1: {
    		top: "122%",
    		bottom: "-122%",
    		left: "0%",
    		right: "0%",
    		height: "100%",
    		position: "absolute",
    		width: "100%"
  	},
  	input: {
    		top: 307,
    		left: 29,
    		height: 50,
    		width: 300
  	},
  	lockIcon1: {
    		top: "22%",
    		bottom: "30%"
  	},
  	input2: {
    		top: 429,
    		left: 30
  	},
  	rectangleView: {
    		backgroundColor: Color.crimson
  	},
  	next: {
    		top: "28%",
    		left: "41.67%",
    		fontSize: 20,
    		color: "#fcfcfc",
    		fontFamily: FontFamily.mulishSemiBold,
    		fontWeight: "600",
    		textAlign: "left",
    		position: "absolute"
  	},
  	vectorIcon1: {
    		height: "28%",
    		width: "2.67%",
    		top: "40%",
    		right: "36%",
    		bottom: "32%",
    		left: "61.33%"
  	},
  	input3: {
    		top: 586,
    		left: 29,
    		height: 50,
    		width: 300
  	},
  	clientSignupChild: {
    		top: 271,
    		width: 90,
    		height: 3,
    		backgroundColor: Color.crimson
  	},
  	login1: {
    		width: 107
  	},
  	login: {
    		left: 57,
    		top: 231,
    		position: "absolute"
  	},
  	signup: {
    		top: 229,
    		width: 109,
    		left: 221,
    		position: "absolute"
  	},
  	clientSignupItem: {
    		left: 48,
    		borderRadius: 3,
    		borderStyle: "solid",
    		borderColor: "#cbcbcb",
    		borderWidth: 1,
    		width: 12,
    		height: 12
  	},
  	byCheckingThe1: {
    		color: Color.gray_100
  	},
  	terms: {
    		color: Color.crimson
  	},
  	byCheckingTheContainer: {
    		left: 64,
    		fontSize: 9,
    		textAlign: "left",
    		fontFamily: FontFamily.mulishRegular
  	},
  	bellaOlonjeLogo11111: {
    		top: 0,
    		left: 0,
    		width: 125
  	},
  	groupChild: {
    		top: 36,
    		left: 86,
    		width: 57,
    		height: 113,
    		position: "absolute"
  	},
  	bellaOlonjeLogo1111Parent: {
    		top: 80,
    		left: 120,
    		width: 143
  	},
  	clientSignup: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 800,
    		overflow: "hidden",
    		width: "100%"
  	}
});

export default ClientSignup;
