import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { FontSize, Border, Color, FontFamily } from "./AdminLoginStyles";

const AdminLogin = () => {
  	const navigation = useNavigation();
  	
  	return (
    		<View style={styles.adminLogin1}>
      			<View style={styles.navigationBars}>
        				<View style={styles.handle1} />
      			</View>
      			<View style={[styles.statusBar, styles.statusBarPosition]}>
        				<View style={[styles.status, styles.statusFlexBox]}>
          					<View style={[styles.timeDate1, styles.statusFlexBox]}>
            						<Text style={[styles.text1, styles.text1Typo]}>9:30</Text>
          					</View>
          					<View style={[styles.statusIcons, styles.statusFlexBox]}>
            						<View style={styles.wiFiNetwork}>
              							<Image style={styles.iconLayout3} resizeMode="cover" source="Wifi.png" />
              							<Image style={[styles.icSignalCellular4BarIcon1, styles.iconLayout3]} resizeMode="cover" source="ic_signal_cellular_4_bar.png" />
            						</View>
            						<View style={[styles.battery, styles.statusFlexBox]}>
              							<Image style={styles.iconLayout3} resizeMode="cover" source="Battery.png" />
            						</View>
          					</View>
          					<View style={[styles.camera1, styles.cameraPosition]}>
            						<View style={[styles.camera2, styles.cameraPosition]} />
          					</View>
        				</View>
      			</View>
      			<View style={[styles.input, styles.inputLayout]}>
        				<View style={[styles.inputChild, styles.inputPosition]} />
        				<Text style={[styles.enterYourHall1, styles.text1Typo]}>Admin ID</Text>
        				<Image style={[styles.userIcon1, styles.iconLayout]} resizeMode="cover" source="user.png" />
      			</View>
      			<View style={[styles.input1, styles.inputLayout]}>
        				<View style={[styles.inputChild, styles.inputPosition]} />
        				<Text style={[styles.enterYourHall1, styles.text1Typo]}>Password</Text>
        				<Image style={[styles.lockIcon1, styles.iconLayout]} resizeMode="cover" source="lock.png" />
      			</View>
      			<Pressable style={[styles.input2, styles.inputLayout]} onPress={()=>{}}>
        				<View style={[styles.inputInner, styles.inputInnerBg]} />
        				<Text style={[styles.next, styles.nextTypo]}>Next</Text>
        				<Image style={[styles.vectorIcon1, styles.iconLayout]} resizeMode="cover" source="Vector.png" />
      			</Pressable>
      			<View style={[styles.adminLoginChild, styles.inputInnerBg]} />
      			<Text style={[styles.adminLogin2, styles.nextTypo]}>Admin Login</Text>
      			<View style={[styles.bellaOlonjeLogo1111Parent, styles.bellaLayout]}>
        				<Image style={[styles.bellaOlonjeLogo11111, styles.bellaLayout]} resizeMode="cover" source="Bella Olonje logo 111 1.png" />
        				<Image style={styles.groupChild} resizeMode="cover" source="Vector 1.png" />
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	statusBarPosition: {
    		left: 0,
    		top: 0
  	},
  	statusFlexBox: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	text1Typo: {
    		textAlign: "left",
    		fontSize: FontSize.aOSPBodyMedium_size
  	},
  	iconLayout3: {
    		height: 16,
    		width: 16,
    		overflow: "hidden"
  	},
  	cameraPosition: {
    		width: 24,
    		marginLeft: -12,
    		left: "50%",
    		height: 24,
    		position: "absolute"
  	},
  	inputLayout: {
    		height: 50,
    		width: 300,
    		position: "absolute"
  	},
  	inputPosition: {
    		borderRadius: Border.br_3xs,
    		left: "0%",
    		bottom: "0%",
    		right: "0%",
    		top: "0%",
    		height: "100%",
    		width: "100%"
  	},
  	iconLayout: {
    		maxHeight: "100%",
    		maxWidth: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	inputInnerBg: {
    		backgroundColor: Color.crimson,
    		position: "absolute"
  	},
  	nextTypo: {
    		fontFamily: FontFamily.mulishSemiBold,
    		fontWeight: "600",
    		textAlign: "left",
    		position: "absolute"
  	},
  	bellaLayout: {
    		height: 159,
    		position: "absolute"
  	},
  	handle1: {
    		marginTop: -2,
    		marginLeft: -54,
    		borderRadius: 12,
    		backgroundColor: "#202124",
    		width: 108,
    		height: 4,
    		left: "50%",
    		top: "50%",
    		position: "absolute"
  	},
  	navigationBars: {
    		top: 776,
    		right: -26,
    		left: -26,
    		height: 24,
    		position: "absolute"
  	},
  	text1: {
    		letterSpacing: 0,
    		lineHeight: 20,
    		fontFamily: FontFamily.aOSPBodyMedium,
    		color: Color.aOSPBlack
  	},
  	timeDate1: {
    		alignSelf: "stretch",
    		width: 128,
    		zIndex: 0
  	},
  	icSignalCellular4BarIcon1: {
    		marginLeft: -2
  	},
  	wiFiNetwork: {
    		flexDirection: "row"
  	},
  	battery: {
    		height: 52
  	},
  	statusIcons: {
    		justifyContent: "flex-end",
    		zIndex: 1
  	},
  	camera2: {
    		marginTop: -12,
    		borderRadius: 100,
    		backgroundColor: Color.aOSPBlack,
    		top: "50%",
    		width: 24,
    		marginLeft: -12
  	},
  	camera1: {
    		top: 8,
    		zIndex: 2
  	},
  	status: {
    		paddingHorizontal: 16,
    		paddingVertical: 0,
    		justifyContent: "space-between",
    		height: 40,
    		flex: 1,
    		alignItems: "center"
  	},
  	statusBar: {
    		right: 0,
    		flexDirection: "row",
    		height: 40,
    		position: "absolute"
  	},
  	inputChild: {
    		backgroundColor: Color.silver,
    		position: "absolute"
  	},
  	enterYourHall1: {
    		top: "34%",
    		left: "7.33%",
    		fontFamily: FontFamily.mulishRegular,
    		color: Color.gray_100,
    		position: "absolute"
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
  	input: {
    		top: 334,
    		left: 41,
    		height: 50,
    		width: 300
  	},
  	lockIcon1: {
    		top: "22%",
    		right: "6%",
    		bottom: "30%",
    		left: "86%",
    		width: "8%",
    		height: "48%",
    		maxHeight: "100%",
    		maxWidth: "100%"
  	},
  	input1: {
    		top: 409,
    		left: 42
  	},
  	inputInner: {
    		borderRadius: Border.br_3xs,
    		left: "0%",
    		bottom: "0%",
    		right: "0%",
    		top: "0%",
    		height: "100%",
    		width: "100%"
  	},
  	next: {
    		top: "28%",
    		left: "41.67%",
    		fontSize: 20,
    		color: "#fcfcfc"
  	},
  	vectorIcon1: {
    		height: "28%",
    		width: "2.67%",
    		top: "40%",
    		right: "36%",
    		bottom: "32%",
    		left: "61.33%"
  	},
  	input2: {
    		top: 600,
    		left: 41,
    		height: 50,
    		width: 300
  	},
  	adminLoginChild: {
    		top: 283,
    		left: 90,
    		width: 185,
    		height: 3
  	},
  	adminLogin2: {
    		top: 248,
    		left: 93,
    		fontSize: 30,
    		width: 200,
    		height: 28,
    		color: Color.aOSPBlack
  	},
  	bellaOlonjeLogo11111: {
    		width: 125,
    		left: 0,
    		top: 0
  	},
  	groupChild: {
    		top: 36,
    		left: 86,
    		width: 57,
    		height: 113,
    		position: "absolute"
  	},
  	bellaOlonjeLogo1111Parent: {
    		top: 64,
    		left: 111,
    		width: 143
  	},
  	adminLogin1: {
    		backgroundColor: "#fff",
    		height: 800,
    		overflow: "hidden",
    		width: "100%",
    		flex: 1
  	}
});

export default AdminLogin;