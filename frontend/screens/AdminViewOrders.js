import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "./AdminViewOrdersStyles";

const AdminViewOrders = () => {
  	const navigation = useNavigation();
  	
  	return (
    		<View style={[styles.adminViewOrders1, styles.iconLayout1]}>
      			<View style={styles.navigationBars}>
        				<View style={styles.handle1} />
      			</View>
      			<View style={styles.statusBar}>
        				<View style={[styles.status, styles.statusFlexBox]}>
          					<View style={[styles.timeDate1, styles.statusFlexBox]}>
            						<Text style={styles.text9}>9:30</Text>
          					</View>
          					<View style={[styles.statusIcons, styles.statusFlexBox]}>
            						<View style={styles.wiFiNetwork}>
              							<Image style={[styles.wifiIcon1, styles.iconLayout]} resizeMode="cover" source="Wifi.png" />
              							<Image style={[styles.icSignalCellular4BarIcon1, styles.iconLayout]} resizeMode="cover" source="ic_signal_cellular_4_bar.png" />
            						</View>
            						<View style={[styles.battery, styles.statusFlexBox]}>
              							<Image style={[styles.wifiIcon1, styles.iconLayout]} resizeMode="cover" source="Battery.png" />
            						</View>
          					</View>
          					<View style={[styles.camera1, styles.cameraLayout]}>
            						<View style={[styles.camera2, styles.cameraLayout]} />
          					</View>
        				</View>
      			</View>
      			<Text style={styles.viewOrders}>View Orders</Text>
      			<Pressable style={[styles.chevronLeft, styles.cameraLayout]} onPress={()=>{}}>
        				<Image style={[styles.icon, styles.iconLayout1]} resizeMode="cover" source="chevron-left.png" />
      			</Pressable>
      			<View style={[styles.startersGroup, styles.bg3Layout]}>
        				<View style={[styles.bg3, styles.bg3Position]} />
        				<Image style={[styles.vectorIcon3, styles.vectorIconLayout]} resizeMode="cover" source="Vector.png" />
        				<View style={[styles.item, styles.itemLayout]}>
          					<View style={styles.itemShadowBox} />
          					<Text style={styles.tomatoSalad}>Tomato Salad</Text>
          					<Text style={styles.text10}>$130</Text>
          					<Image style={styles.maskGroupIcon} resizeMode="cover" source="Mask Group.png" />
        				</View>
        				<View style={[styles.item1, styles.itemLayout]}>
          					<View style={styles.itemShadowBox} />
          					<Text style={styles.tomatoSalad}>Manchurian</Text>
          					<Text style={styles.text10}>$69</Text>
          					<Image style={styles.maskGroupIcon} resizeMode="cover" source="Mask Group.png" />
          					<View style={[styles.addIcon, styles.addIconLayout1]}>
            						<View style={[styles.addIconChild, styles.addIconPosition]} />
            						<Text style={styles.text12}>2</Text>
            						<Text style={[styles.text13, styles.textTypo]}>-</Text>
            						<Text style={[styles.text14, styles.textTypo]}>+</Text>
          					</View>
        				</View>
        				<Text style={[styles.orderId123456, styles.mainCourse1Typo]}>Order ID #123456</Text>
        				<View style={styles.startersGroupChild} />
      			</View>
      			<View style={[styles.mainCourse, styles.bg4Layout]}>
        				<View style={[styles.bg4, styles.bg4Layout]} />
        				<Image style={[styles.vectorIcon4, styles.vectorIconLayout]} resizeMode="cover" source="Vector.png" />
        				<Text style={[styles.mainCourse1, styles.mainCourse1Typo]}>Order ID #234567</Text>
      			</View>
      			<View style={[styles.snacks, styles.bg4Layout]}>
        				<View style={[styles.bg4, styles.bg4Layout]} />
        				<Image style={[styles.vectorIcon4, styles.vectorIconLayout]} resizeMode="cover" source="Vector.png" />
        				<Text style={[styles.mainCourse1, styles.mainCourse1Typo]}>{`Order ID #345561
`}</Text>
            </View>
            <View style={[styles.addIcon1, styles.addIconLayout1]}>
                <View style={[styles.addIconChild, styles.addIconPosition]} />
                <Text style={styles.text12}>1</Text>
                <Text style={[styles.text13, styles.textTypo]}>-</Text>
                <Text style={[styles.text14, styles.textTypo]}>+</Text>
            </View>
            <View style={[styles.addIcon2, styles.addIconLayout]}>
                <View style={[styles.addIconInner, styles.addIconLayout]} />
                <Text style={styles.orderTakenSwipe1}>Order Taken (Swipe right to finish)</Text>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    iconLayout1: {
        overflow: "hidden",
        width: "100%"
    },
    statusFlexBox: {
        alignItems: "center",
        flexDirection: "row"
    },
    iconLayout: {
        width: 16,
        height: 16,
        overflow: "hidden"
    },
    cameraLayout: {
        width: 24,
        height: 24,
        position: "absolute"
    },
    bg3Layout: {
        height: 282,
        width: 317,
        position: "absolute"
    },
    bg3Position: {
        borderRadius: Border.br_xl,
        backgroundColor: Color.crimson,
        left: 0,
        top: 0
    },
    vectorIconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden"
    },
    itemLayout: {
        height: 84,
        width: 295,
        left: 9,
        position: "absolute"
    },
    addIconLayout1: {
        height: 22,
        width: 52,
        position: "absolute"
    },
    addIconPosition: {
        borderRadius: Border.br_11xl,
        left: 0,
        top: 0
    },
    textTypo: {
        color: Color.whitesmoke_100,
        textAlign: "center",
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        position: "absolute"
    },
    mainCourse1Typo: {
        width: 250,
        color: Color.mistyrose,
        left: 22,
        fontSize: FontSize.size_mid,
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        textAlign: "left",
        position: "absolute"
    },
    bg4Layout: {
        height: 50,
        width: 318,
        position: "absolute"
    },
    addIconLayout: {
        width: 225,
        height: 19,
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
    text9: {
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
    wifiIcon1: {
        height: 16
    },
    icSignalCellular4BarIcon1: {
        marginLeft: -2,
        height: 16
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
        top: "50%"
    },
    camera1: {
        top: 8,
        zIndex: 2,
        marginLeft: -12,
        width: 24,
        left: "50%"
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
        top: 0,
        position: "absolute"
    },
    viewOrders: {
        top: 100,
        left: 27,
        fontSize: 30,
        width: 220,
        height: 28,
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        textAlign: "left",
        color: Color.aOSPBlack,
        position: "absolute"
    },
    icon: {
        height: "100%"
    },
    chevronLeft: {
        top: 58,
        left: 15
    },
    bg3: {
        backgroundColor: Color.crimson,
        height: 282,
        width: 317,
        position: "absolute"
    },
    vectorIcon3: {
        height: "2.33%",
        width: "4.18%",
        top: "7.74%",
        right: "6.48%",
        bottom: "89.93%",
        left: "89.34%"
    },
    itemShadowBox: {
        shadowOpacity: 1,
        elevation: 40,
        shadowRadius: 40,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowColor: "rgba(0, 0, 0, 0.03)",
        backgroundColor: Color.whitesmoke_200,
        height: 84,
        width: 295,
        borderRadius: Border.br_xl,
        left: 0,
        top: 0,
        position: "absolute"
    },
    tomatoSalad: {
        top: 21,
        left: 97,
        width: 150,
        height: 19,
        fontSize: FontSize.size_mid,
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        textAlign: "left",
        color: Color.aOSPBlack,
        position: "absolute"
    },
    text10: {
        top: 53,
        left: 102,
        color: Color.crimson,
        width: 50,
        height: 17,
        fontSize: FontSize.size_mini,
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        textAlign: "left",
        position: "absolute"
    },
    maskGroupIcon: {
        top: -19,
        left: -25,
        width: 145,
        height: 143,
        position: "absolute"
    },
    item: {
        top: 52
    },
    addIconChild: {
        height: 22,
        width: 52,
        position: "absolute",
        backgroundColor: Color.crimson
    },
    text12: {
        top: 2,
        left: 23,
        width: 8,
        textAlign: "center",
        color: Color.whitesmoke_200,
        fontSize: FontSize.size_smi,
        height: 17,
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        position: "absolute"
    },
    text13: {
        width: 7,
        height: 21,
        top: 1,
        fontSize: FontSize.size_mini,
        color: Color.whitesmoke_100,
        left: 9
    },
    text14: {
        top: 4,
        left: 39,
        fontSize: FontSize.size_3xs,
        width: 5,
        height: 13
    },
    addIcon: {
        top: 49,
        left: 223
    },
    item1: {
        top: 146
    },
    orderId123456: {
        top: 15,
        height: 16
    },
    startersGroupChild: {
        top: 35,
        backgroundColor: Color.mistyrose,
        width: 279,
        height: 1,
        left: 22,
        position: "absolute"
    },
    startersGroup: {
        top: 167,
        left: 16
    },
    bg4: {
        backgroundColor: Color.crimson,
        borderRadius: Border.br_xl,
        left: 0,
        top: 0
    },
    vectorIcon4: {
        height: "28%",
        width: "2.11%",
        top: "41%",
        right: "7.53%",
        bottom: "31%",
        left: "90.37%"
    },
    mainCourse1: {
        top: 16,
        height: 18
    },
    mainCourse: {
        top: 458,
        left: 15
    },
    snacks: {
        top: 519,
        left: 15
    },
    addIcon1: {
        top: 265,
        left: 249
    },
    addIconInner: {
        backgroundColor: "#0dcf7e",
        borderRadius: Border.br_11xl,
        left: 0,
        top: 0
    },
    orderTakenSwipe1: {
        left: 10,
        width: 210,
        height: 15,
        top: 1,
        color: Color.whitesmoke_200,
        fontSize: FontSize.size_smi,
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        textAlign: "left",
        position: "absolute"
    },
    addIcon2: {
        top: 413,
        left: 62
    },
    adminViewOrders1: {
        backgroundColor: "#fff",
        height: 800,
        flex: 1
    }
});

export default AdminViewOrders;