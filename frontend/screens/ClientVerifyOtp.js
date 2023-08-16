import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "./ClientVerifyOtpStyles";

const ClientVerifyOTP = () => {
  	const navigation = useNavigation();
  	
  	return (
    		<View style={styles.clientVerifyOtp}>
      			<View style={styles.navigationBars}>
        				<View style={[styles.handle1, styles.verifyPosition]} />
      			</View>
      			<View style={styles.statusBar}>
        				<View style={[styles.status, styles.statusFlexBox]}>
          					<View style={[styles.timeDate1, styles.statusFlexBox]}>
            						<Text style={styles.text2}>9:30</Text>
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
          					<View style={[styles.camera1, styles.cameraPosition]}>
            						<View style={[styles.camera2, styles.cameraPosition]} />
          					</View>
        				</View>
      			</View>
      			<Text style={[styles.requestNewCode1, styles.text3Typo]}>Request new code in 00:30s</Text>
      			<Text style={styles.almostThere}>{`Almost there `}</Text>
      			<Text style={styles.pleaseEnterTheContainer}>
        				<Text style={styles.pleaseEnterThe1}>{`Please enter the 6-digit code sent to your
`}</Text>
                <Text style={[styles.phone, styles.phoneTypo]}>{`phone `}</Text>
                <Text style={styles.pleaseEnterThe1}>for verification.</Text>
            </Text>
            <View style={styles.otpInpit}>
                <View style={[styles.otpInpitChild, styles.otpChildLayout]} />
                <View style={[styles.otpInpitItem, styles.otpChildLayout]} />
                <View style={[styles.otpInpitInner, styles.otpChildLayout]} />
                <View style={[styles.rectangleView, styles.otpChildLayout]} />
                <View style={[styles.otpInpitChild1, styles.otpChildLayout]} />
                <View style={[styles.otpInpitChild2, styles.childPosition]} />
                <Text style={[styles.text3, styles.text3Typo]}>{`6          9          7           5         4          9         `}</Text>
            </View>
            <Pressable style={styles.input} onPress={()=>{}}>
                <View style={[styles.inputChild, styles.childPosition]} />
                <Text style={[styles.verify, styles.phoneTypo]}>Verify</Text>
            </Pressable>
            <View style={[styles.didntReceiveAnyCodeParent, styles.verifyPosition]}>
                <Text style={styles.resendAgainTypo}>{`Didn’t receive any code? `}</Text>
                <Text style={[styles.resendAgain, styles.resendAgainTypo]}>Resend Again</Text>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    verifyPosition: {
        left: "50%",
        position: "absolute"
    },
    statusFlexBox: {
        alignItems: "center",
        flexDirection: "row"
    },
    iconLayout: {
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
    text3Typo: {
        fontFamily: FontFamily.mulishRegular,
        textAlign: "left",
        position: "absolute"
    },
    phoneTypo: {
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600"
    },
    otpChildLayout: {
        backgroundColor: Color.silver,
        borderRadius: Border.br_8xs,
        width: "13.79%"
    },
    childPosition: {
        right: "0%",
        bottom: "0%",
        top: "0%",
        height: "100%",
        position: "absolute"
    },
    resendAgainTypo: {
        fontFamily: FontFamily.mulishBold,
        fontWeight: "700",
        color: Color.gray_100,
        fontSize: FontSize.size_smi,
        textAlign: "left"
    },
    handle1: {
        marginTop: -2,
        marginLeft: -54,
        borderRadius: 12,
        backgroundColor: "#202124",
        width: 108,
        height: 4,
        top: "50%"
    },
    navigationBars: {
        top: 776,
        right: -26,
        left: -26,
        height: 24,
        position: "absolute"
    },
    text2: {
        letterSpacing: 0,
        lineHeight: 20,
        fontFamily: FontFamily.aOSPBodyMedium,
        color: Color.aOSPBlack,
        textAlign: "left",
        fontSize: FontSize.aOSPBodyMedium_size
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
        top: "50%"
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
        top: 0,
        right: 0,
        left: 0,
        flexDirection: "row",
        height: 40,
        position: "absolute"
    },
    requestNewCode1: {
        marginLeft: -81,
        top: 502,
        color: "rgba(0, 0, 0, 0.5)",
        fontSize: FontSize.size_smi,
        fontFamily: FontFamily.mulishRegular,
        left: "50%"
    },
    almostThere: {
        top: 155,
        left: 25,
        fontSize: 24,
        fontWeight: "800",
        fontFamily: FontFamily.mulishExtraBold,
        color: Color.gray_100,
        textAlign: "left",
        position: "absolute"
    },
    pleaseEnterThe1: {
        fontWeight: "300",
        fontFamily: FontFamily.mulishLight,
        color: Color.gray_100
    },
    phone: {
        color: Color.crimson
    },
    pleaseEnterTheContainer: {
        top: 210,
        left: 26,
        width: 321,
        textAlign: "left",
        fontSize: FontSize.aOSPBodyMedium_size,
        position: "absolute"
    },
    otpInpitChild: {
        right: "86.21%",
        left: "0%",
        bottom: "0%",
        top: "0%",
        height: "100%",
        borderRadius: Border.br_8xs,
        width: "13.79%",
        position: "absolute"
    },
    otpInpitItem: {
        right: "68.97%",
        left: "17.24%",
        bottom: "0%",
        top: "0%",
        height: "100%",
        borderRadius: Border.br_8xs,
        width: "13.79%",
        position: "absolute"
    },
    otpInpitInner: {
        right: "51.72%",
        left: "34.48%",
        bottom: "0%",
        top: "0%",
        height: "100%",
        borderRadius: Border.br_8xs,
        width: "13.79%",
        position: "absolute"
    },
    rectangleView: {
        right: "34.48%",
        left: "51.72%",
        bottom: "0%",
        top: "0%",
        height: "100%",
        borderRadius: Border.br_8xs,
        width: "13.79%",
        position: "absolute"
    },
    otpInpitChild1: {
        right: "17.24%",
        left: "68.97%",
        bottom: "0%",
        top: "0%",
        height: "100%",
        borderRadius: Border.br_8xs,
        width: "13.79%",
        position: "absolute"
    },
    otpInpitChild2: {
        left: "86.21%",
        backgroundColor: Color.silver,
        borderRadius: Border.br_8xs,
        width: "13.79%",
        right: "0%"
    },
    text3: {
        top: "27.78%",
        left: "5.36%",
        color: Color.gray_100,
        fontSize: FontSize.aOSPBodyMedium_size
    },
    otpInpit: {
        top: 294,
        left: 48,
        width: 261,
        height: 36,
        position: "absolute"
    },
    inputChild: {
        borderRadius: 10,
        backgroundColor: Color.crimson,
        left: "0%",
        right: "0%",
        width: "100%"
    },
    verify: {
        marginLeft: -24.5,
        top: "28%",
        fontSize: 18,
        color: Color.white,
        textAlign: "left",
        left: "50%",
        position: "absolute"
    },
    input: {
        top: 370,
        left: 36,
        width: 295,
        height: 50,
        position: "absolute"
    },
    resendAgain: {
        marginLeft: 2
    },
    didntReceiveAnyCodeParent: {
        marginLeft: -116,
        top: 482,
        justifyContent: "center",
        flexDirection: "row"
    },
    clientVerifyOtp: {
        backgroundColor: Color.white,
        height: 800,
        overflow: "hidden",
        width: "100%",
        flex: 1
    }
});

export default ClientVerifyOTP;