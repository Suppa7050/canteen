import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { FontSize, FontFamily, Color } from "./PaymentSuccessStyles";

const PaymentSuccess = () => {
  	
  	return (
    		<View style={styles.paymentSuccess}>
      			<View style={[styles.confettiParent, styles.confettiLayout]}>
        				<Image style={[styles.confettiIcon, styles.confettiLayout]} resizeMode="cover" source="confetti.png" />
        				<View style={styles.successIconComponentParent}>
          					<Image style={styles.successIconComponent1} resizeMode="cover" source="success icon component.png" />
          					<View style={styles.message}>
            						<Text style={styles.paymentSuccessful}>Payment Successful</Text>
            						<Text style={[styles.thankYouFor1, styles.returnHome1Typo]}>{`Thank you for patronizing us today.
              							We value you!`}</Text>
          					</View>
        				</View>
        				{/* <LinearGradient style={styles.returnHome} locations={[0,1]} colors={['rgba(255, 255, 255, 0.4)','rgba(254, 216, 220, 0.4)']} useAngle={true} angle={90}>
          					<Text style={[styles.returnHome1, styles.returnHome1Typo]}>Return Home</Text>
        				</LinearGradient> */}
      			</View>
      			<View style={styles.paymentSuccessChild} />
      			<Text style={styles.goToMy1}>Go to my order</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	confettiLayout: {
    		height: 944,
    		width: 448,
    		position: "absolute"
  	},
  	returnHome1Typo: {
    		fontSize: FontSize.size_base,
    		textAlign: "center",
    		fontFamily: FontFamily.mulishRegular
  	},
  	confettiIcon: {
    		top: 19,
    		left: 40
  	},
  	successIconComponent1: {
    		width: 123,
    		height: 123
  	},
  	paymentSuccessful: {
    		fontSize: 24,
    		color: "#000",
    		textAlign: "left",
    		fontFamily: FontFamily.mulishRegular
  	},
  	thankYouFor1: {
    		color: "#656565",
    		width: 328,
    		marginTop: 10,
    		textAlign: "center"
  	},
  	message: {
    		marginTop: 30,
    		alignItems: "center"
  	},
  	successIconComponentParent: {
    		top: 175,
    		left: 65,
    		alignItems: "center",
    		position: "absolute"
  	},
  	returnHome1: {
    		color: Color.crimson,
    		textAlign: "center"
  	},
  	returnHome: {
    		top: 495,
    		left: 164,
    		borderRadius: 10,
    		borderStyle: "solid",
    		borderColor: "rgba(0, 0, 0, 0.2)",
    		borderWidth: 1,
    		flexDirection: "row",
    		paddingHorizontal: 20,
    		paddingVertical: 12,
    		justifyContent: "center",
    		backgroundColor: "transparent",
    		alignItems: "center",
    		position: "absolute"
  	},
  	confettiParent: {
    		top: -19,
    		left: -40
  	},
  	paymentSuccessChild: {
    		top: 466,
    		left: 35,
    		borderRadius: 30,
    		backgroundColor: Color.crimson,
    		width: 314,
    		height: 70,
    		position: "absolute"
  	},
  	goToMy1: {
    		top: 488,
    		left: 121,
    		fontSize: 20,
    		fontWeight: "700",
    		fontFamily: FontFamily.mulishBold,
    		color: "#f6f6f9",
    		textAlign: "center",
    		position: "absolute"
  	},
  	paymentSuccess: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 800,
    		overflow: "hidden"
  	}
});

export default PaymentSuccess;