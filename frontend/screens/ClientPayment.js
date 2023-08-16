import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "./ClientPaymentStyles";

const ClientPayment = () => {
  	const navigation = useNavigation();
  	
  	return (
    		<View style={styles.clientPayment}>
      			<View style={styles.navigationBars}>
        				<View style={styles.handle1} />
      			</View>
      			<View style={[styles.statusBar, styles.childPosition]}>
        				<View style={[styles.status, styles.statusFlexBox]}>
          					<View style={[styles.timeDate1, styles.statusFlexBox]}>
            						<Text style={[styles.text3, styles.paymentFlexBox]}>9:30</Text>
          					</View>
          					<View style={[styles.statusIcons, styles.statusFlexBox]}>
            						<View style={styles.wiFiNetwork}>
              							<Image style={styles.iconLayout} resizeMode="cover" source="Wifi.png" />
              							<Image style={[styles.icSignalCellular4BarIcon1, styles.iconLayout]} resizeMode="cover" source="ic_signal_cellular_4_bar.png" />
            						</View>
            						<View style={[styles.battery, styles.statusFlexBox]}>
              							<Image style={styles.iconLayout} resizeMode="cover" source="Battery.png" />
            						</View>
          					</View>
          					<View style={[styles.camera1, styles.cameraLayout]}>
            						<View style={[styles.camera2, styles.cameraLayout]} />
          					</View>
        				</View>
      			</View>
      			<View style={[styles.grouptotal, styles.grouptotalLayout1]}>
        				<View style={[styles.grouptotalChild, styles.grouptotalLayout1]} />
        				<View style={styles.totalGroup}>
          					<Text style={[styles.yourPaymentTotal1, styles.paymentFlexBox]}>{`Your payment total is : `}</Text>
          					<Text style={styles.text4}>$274</Text>
        				</View>
        				<View style={[styles.grouptotalItem, styles.grouptotalLayout]} />
        				<View style={[styles.grouptotalInner, styles.grouptotalLayout]} />
      			</View>
      			<Image style={[styles.vectorIcon2, styles.cameraLayout]} resizeMode="cover" source="Vector.png" />
      			<Pressable style={styles.clientPaymentChild} onPress={()=>{}} />
      			<Pressable style={styles.clientPaymentChild} onPress={()=>{}} />
      			<Text style={styles.proceedToPayment1}>Proceed to payment</Text>
      			<Text style={[styles.chooseAPaymentContainer, styles.upiIconLayout]}>
        				<Text style={styles.chooseAPayment1}>Choose a payment method</Text>
        				<Text style={styles.text5}>{` `}</Text>
      			</Text>
      			<View style={[styles.startersGroup, styles.bg1Layout]}>
        				<View style={[styles.bg1, styles.bg1Layout]} />
        				<Image style={styles.vectorIcon3} resizeMode="cover" source="Vector.png" />
        				<View style={[styles.item, styles.itemLayout]}>
          					<View style={[styles.itemChild, styles.itemLayout]} />
          					<Text style={[styles.sxcdaicici, styles.abcdesbiTypo]}>sxcda@icici</Text>
          					<Image style={styles.borderIcon3} resizeMode="cover" source="border.png" />
          					<Image style={[styles.upiIcon, styles.upiIconLayout]} resizeMode="cover" source="UPI.png" />
        				</View>
        				<View style={[styles.item1, styles.itemPosition]}>
          					<View style={[styles.itemChild, styles.itemLayout]} />
          					<Text style={[styles.abcdesbi, styles.abcdesbiTypo]}>abcde@sbi</Text>
          					<Image style={styles.borderIcon3} resizeMode="cover" source="border.png" />
          					<Image style={styles.borderIcon3} resizeMode="cover" source="Ellipse 1.png" />
          					<Image style={[styles.upiIcon, styles.upiIconLayout]} resizeMode="cover" source="UPI.png" />
        				</View>
        				<View style={[styles.item2, styles.itemPosition]}>
          					<View style={[styles.itemChild, styles.itemLayout]} />
          					<Text style={[styles.addNewUpi, styles.abcdesbiTypo]}>Add new UPI id</Text>
          					<Image style={styles.borderIcon3} resizeMode="cover" source="border.png" />
        				</View>
        				<Text style={[styles.upi, styles.upiTypo]}>UPI</Text>
        				<View style={styles.startersGroupChild} />
      			</View>
      			<Text style={[styles.text6, styles.upiTypo]}>+</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	childPosition: {
    		top: 0,
    		left: 0
  	},
  	statusFlexBox: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	paymentFlexBox: {
    		textAlign: "left",
    		color: Color.aOSPBlack
  	},
  	iconLayout: {
    		height: 16,
    		width: 16,
    		overflow: "hidden"
  	},
  	cameraLayout: {
    		width: 24,
    		position: "absolute"
  	},
  	grouptotalLayout1: {
    		height: 84,
    		width: 329,
    		position: "absolute"
  	},
  	grouptotalLayout: {
    		height: 2,
    		width: 304,
    		backgroundColor: Color.darkslategray,
    		left: 16,
    		position: "absolute"
  	},
  	upiIconLayout: {
    		height: 31,
    		position: "absolute"
  	},
  	bg1Layout: {
    		height: 229,
    		width: 338,
    		position: "absolute"
  	},
  	itemLayout: {
    		height: 35,
    		width: 276,
    		position: "absolute"
  	},
  	abcdesbiTypo: {
    		height: 19,
    		fontSize: FontSize.size_mini,
    		left: 53,
    		top: 7,
    		fontFamily: FontFamily.mulishRegular,
    		textAlign: "left",
    		color: Color.aOSPBlack,
    		position: "absolute"
  	},
  	itemPosition: {
    		left: 35,
    		height: 35,
    		width: 276,
    		position: "absolute"
  	},
  	upiTypo: {
    		fontSize: FontSize.size_mid,
    		fontFamily: FontFamily.mulishSemiBold,
    		fontWeight: "600",
    		textAlign: "left",
    		position: "absolute"
  	},
  	handle1: {
    		marginTop: -2,
    		marginLeft: -54,
    		borderRadius: 12,
    		backgroundColor: "#202124",
    		height: 4,
    		left: "50%",
    		width: 108,
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
  	text3: {
    		fontSize: FontSize.aOSPBodyMedium_size,
    		letterSpacing: 0,
    		lineHeight: 20,
    		fontFamily: FontFamily.aOSPBodyMedium
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
    		marginLeft: -12,
    		width: 24,
    		left: "50%",
    		height: 24,
    		top: "50%"
  	},
  	camera1: {
    		zIndex: 2,
    		top: 8,
    		marginLeft: -12,
    		width: 24,
    		left: "50%",
    		height: 24
  	},
  	status: {
    		paddingHorizontal: 16,
    		paddingVertical: 0,
    		justifyContent: "space-between",
    		height: 40,
    		flex: 1
  	},
  	statusBar: {
    		right: 0,
    		flexDirection: "row",
    		height: 40,
    		left: 0,
    		position: "absolute"
  	},
  	grouptotalChild: {
    		left: 0,
    		top: 0,
    		backgroundColor: Color.white
  	},
  	yourPaymentTotal1: {
    		width: 210,
    		fontFamily: FontFamily.mulishRegular,
    		fontSize: FontSize.size_xl,
    		top: 2,
    		left: 0,
    		position: "absolute"
  	},
  	text4: {
    		left: 233,
    		fontSize: 22,
    		width: 77,
    		fontFamily: FontFamily.mulishSemiBold,
    		fontWeight: "600",
    		textAlign: "left",
    		color: Color.aOSPBlack,
    		top: 0,
    		position: "absolute"
  	},
  	totalGroup: {
    		top: 27,
    		left: 19,
    		width: 310,
    		height: 28,
    		position: "absolute"
  	},
  	grouptotalItem: {
    		top: 11
  	},
  	grouptotalInner: {
    		top: 69
  	},
  	grouptotal: {
    		top: 140,
    		left: 11
  	},
  	vectorIcon2: {
    		top: 76,
    		left: 29,
    		height: 17
  	},
  	clientPaymentChild: {
    		top: 687,
    		left: 22,
    		borderRadius: Border.br_11xl,
    		width: 314,
    		height: 70,
    		backgroundColor: Color.crimson,
    		position: "absolute"
  	},
  	proceedToPayment1: {
    		top: 708,
    		left: 83,
    		fontWeight: "700",
    		fontFamily: FontFamily.mulishBold,
    		color: "#f6f6f9",
    		textAlign: "center",
    		fontSize: FontSize.size_xl,
    		position: "absolute"
  	},
  	chooseAPayment1: {
    		fontWeight: "800",
    		fontFamily: FontFamily.mulishExtraBold
  	},
  	text5: {
    		fontFamily: FontFamily.mulishRegular
  	},
  	chooseAPaymentContainer: {
    		top: 257,
    		left: 47,
    		width: 266,
    		fontSize: FontSize.size_xl,
    		textAlign: "left",
    		color: Color.aOSPBlack
  	},
  	bg1: {
    		borderRadius: 20,
    		backgroundColor: Color.crimson,
    		left: 0,
    		top: 0
  	},
  	vectorIcon3: {
    		height: "3.05%",
    		width: "4.14%",
    		top: "10.45%",
    		right: "6.51%",
    		bottom: "86.5%",
    		left: "89.35%",
    		maxWidth: "100%",
    		maxHeight: "100%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	itemChild: {
    		borderRadius: Border.br_21xl,
    		left: 0,
    		top: 0,
    		backgroundColor: Color.white
  	},
  	sxcdaicici: {
    		width: 81
  	},
  	borderIcon3: {
    		left: 240,
    		width: 20,
    		height: 20,
    		top: 8,
    		position: "absolute"
  	},
  	upiIcon: {
    		left: 9,
    		width: 27,
    		top: 2
  	},
  	item: {
    		top: 67,
    		left: 33
  	},
  	abcdesbi: {
    		width: 77
  	},
  	item1: {
    		top: 117
  	},
  	addNewUpi: {
    		width: 108,
    		fontSize: FontSize.size_mini,
    		left: 53,
    		top: 7
  	},
  	item2: {
    		top: 167
  	},
  	upi: {
    		top: 16,
    		color: Color.mistyrose,
    		width: 66,
    		height: 18,
    		left: 23
  	},
  	startersGroupChild: {
    		top: 38,
    		backgroundColor: Color.mistyrose,
    		width: 297,
    		height: 1,
    		left: 23,
    		position: "absolute"
  	},
  	startersGroup: {
    		top: 302,
    		left: 7
  	},
  	text6: {
    		top: 475,
    		left: 288,
    		width: 7,
    		color: Color.aOSPBlack,
    		fontSize: FontSize.size_mid,
    		height: 4
  	},
  	clientPayment: {
    		width: "100%",
    		height: 800,
    		overflow: "hidden",
    		flex: 1,
    		backgroundColor: Color.white
  	}
});

export default ClientPayment;
