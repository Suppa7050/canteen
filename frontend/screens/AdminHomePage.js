import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "./AdminHomePageStyles";

const AdminHomePage = () => {
  	const navigation = useNavigation();
  	
  	return (
    		<View style={styles.adminHomePage1}>
      			<View style={styles.navigationBars}>
        				<View style={styles.handle1} />
      			</View>
      			<View style={[styles.statusBar, styles.statusBarPosition]}>
        				<View style={[styles.status, styles.statusFlexBox]}>
          					<View style={[styles.timeDate1, styles.statusFlexBox]}>
            						<Text style={styles.text1}>9:30</Text>
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
      			<Text style={styles.whatWouldYou1}>What would you like to do?</Text>
        				<Pressable style={[styles.input, styles.inputLayout]} onPress={()=>{}}>
          					<View style={styles.inputChild} />
          					<Text style={styles.addNewItem1}>Add New Item</Text>
        				</Pressable>
        				<Pressable style={[styles.input1, styles.inputPosition]} onPress={()=>{}}>
          					<View style={styles.inputChild} />
          					<Text style={styles.addNewItem1}>Manage Stock</Text>
        				</Pressable>
        				<Pressable style={[styles.input2, styles.inputLayout]} onPress={()=>{}}>
          					<View style={styles.inputChild} />
          					<Text style={[styles.viewOrders, styles.signOutTypo]}>View Orders</Text>
        				</Pressable>
        				<Pressable style={[styles.input3, styles.inputPosition]} onPress={()=>{}}>
          					<View style={styles.inputChild} />
          					<Text style={[styles.signOut, styles.signOutTypo]}>{`Sign Out
`}</Text>
            </Pressable>
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
    inputLayout: {
        height: 50,
        width: 295,
        left: 36,
        position: "absolute"
    },
    inputPosition: {
        left: 33,
        height: 50,
        width: 295,
        position: "absolute"
    },
    signOutTypo: {
        top: "26%",
        color: Color.white,
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        fontSize: FontSize.size_lg,
        textAlign: "center",
        left: "50%",
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
        fontSize: FontSize.aOSPBodyMedium_size,
        letterSpacing: 0,
        lineHeight: 20,
        fontFamily: FontFamily.aOSPBodyMedium,
        textAlign: "left",
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
    whatWouldYou1: {
        top: 277,
        left: 47,
        fontSize: 30,
        fontWeight: "700",
        fontFamily: FontFamily.mulishBold,
        width: 273,
        height: 61,
        textAlign: "center",
        color: Color.aOSPBlack,
        position: "absolute"
    },
    inputChild: {
        height: "100%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        borderRadius: Border.br_3xs,
        backgroundColor: Color.crimson,
        position: "absolute",
        width: "100%"
    },
    addNewItem1: {
        marginLeft: -60.5,
        top: "28%",
        color: Color.white,
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        fontSize: FontSize.size_lg,
        textAlign: "center",
        left: "50%",
        position: "absolute"
    },
    input: {
        top: 465
    },
    input1: {
        top: 545
    },
    viewOrders: {
        marginLeft: -52.5
    },
    input2: {
        top: 387
    },
    signOut: {
        marginLeft: -37.5
    },
    input3: {
        top: 683
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
        top: 79,
        left: 120,
        width: 143
    },
    adminHomePage1: {
        backgroundColor: Color.white,
        height: 800,
        overflow: "hidden",
        width: "100%",
        flex: 1
    }
});

export default AdminHomePage;