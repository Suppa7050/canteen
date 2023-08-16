import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "./ClientHomeStyles";

const ClientHome = () => {
  	const navigation = useNavigation();
  	
  	return (
    		<View style={styles.clientHome}>
      			<Pressable style={styles.homeSection} onPress={()=>{}}>
        				<View style={[styles.startersGroup, styles.bg4Layout1]}>
          					<View style={[styles.bg4, styles.bg4Bg]} />
          					<View style={[styles.item, styles.itemLayout]}>
            						<View style={styles.itemShadowBox} />
            						<Text style={[styles.tomatoSalad, styles.biryaniTypo]}>Tomato Salad</Text>
            						<Text style={[styles.text7, styles.textTypo1]}>$130</Text>
            						<Image style={[styles.maskGroupIcon, styles.maskGroupPosition]} resizeMode="cover" source="Mask Group.png" />
            						<View style={[styles.addIcon, styles.addIconLayout]}>
              							<View style={[styles.addIconChild, styles.childLayout1]} />
              							<Text style={[styles.add, styles.addTypo]}>Add</Text>
            						</View>
          					</View>
          					<View style={[styles.item1, styles.itemLayout]}>
            						<View style={styles.itemShadowBox} />
            						<View style={styles.itemShadowBox} />
            						<Image style={[styles.bicreditCard2FrontFillIcon2, styles.iconLayout]} resizeMode="cover" source="bi:credit-card-2-front-fill.png" />
            						<Text style={[styles.biryani, styles.biryaniTypo]}>Biryani</Text>
            						<Text style={[styles.text8, styles.textTypo1]}>$69</Text>
            						<Image style={[styles.maskGroupIcon1, styles.maskGroupPosition]} resizeMode="cover" source="Mask Group.png" />
            						<View style={[styles.addIcon, styles.addIconLayout]}>
              							<View style={[styles.addIconChild, styles.childLayout1]} />
              							<Text style={[styles.text9, styles.addTypo]}>2</Text>
              							<Text style={[styles.text10, styles.textTypo]}>-</Text>
              							<Text style={[styles.text11, styles.textTypo]}>+</Text>
            						</View>
          					</View>
          					<View style={[styles.item2, styles.itemLayout]}>
            						<View style={styles.itemShadowBox} />
            						<Image style={[styles.bicreditCard2FrontFillIcon2, styles.iconLayout]} resizeMode="cover" source="bi:credit-card-2-front-fill.png" />
            						<Text style={[styles.manchurian, styles.biryaniTypo]}>Manchurian</Text>
            						<Text style={[styles.text8, styles.textTypo1]}>$69</Text>
            						<Image style={[styles.maskGroupIcon1, styles.maskGroupPosition]} resizeMode="cover" source="Mask Group.png" />
            						<View style={styles.addIcon2}>
              							<View style={styles.addIconInner} />
              							<Text style={[styles.outOfStock1, styles.addTypo]}>Out of Stock</Text>
            						</View>
          					</View>
          					<Text style={[styles.starters, styles.startersTypo]}>Starters</Text>
          					<View style={[styles.startersGroupChild, styles.childLayout]} />
        				</View>
        				<Text style={[styles.whatsInStore1, styles.viewCartTypo]}>What’s in store today?</Text>
          					<View style={[styles.navSection, styles.bg5Layout]}>
            						<Image style={styles.shoppingCartIcon1} resizeMode="cover" source="shopping-cart.png" />
            						<View style={[styles.search, styles.searchLayout]}>
              							<View style={[styles.searchChild, styles.searchLayout]} />
              							<Image style={styles.vectorIcon5} resizeMode="cover" source="Vector.png" />
              							<Text style={[styles.search1, styles.biryaniTypo]}>Search</Text>
            						</View>
            						<Pressable style={styles.vector} onPress={()=>{}}>
              							<Image style={styles.icon} resizeMode="cover" source="Vector.png" />
            						</Pressable>
          					</View>
          					<View style={[styles.mainCourse, styles.bg5Layout]}>
            						<View style={[styles.bg5, styles.bg5Layout]} />
            						<Image style={[styles.vectorIcon6, styles.vectorIconLayout]} resizeMode="cover" source="Vector.png" />
            						<Text style={[styles.mainCourse1, styles.startersTypo]}>Main Course</Text>
          					</View>
          					<View style={[styles.snacks, styles.bg5Layout]}>
            						<View style={[styles.bg5, styles.bg5Layout]} />
            						<Image style={[styles.vectorIcon6, styles.vectorIconLayout]} resizeMode="cover" source="Vector.png" />
            						<Text style={[styles.mainCourse1, styles.startersTypo]}>{`Snacks
`}</Text>
                </View>
                <View style={[styles.cartbottom, styles.bg7Layout]}>
                    <View style={[styles.bg7, styles.bg7Layout]} />
                    <Text style={[styles.youHave2Container, styles.viewCartPosition]}>
                        <Text style={styles.youHave}>{`You have `}</Text>
                        <Text style={styles.text13}>2</Text>
                        <Text style={styles.youHave}>{` item(s) in cart. `}</Text>
                    </Text>
                    <Text style={[styles.viewCart, styles.viewCartPosition]}>{`View Cart `}</Text>
                    <Image style={[styles.vectorIcon8, styles.vectorIconLayout]} resizeMode="cover" source="Vector.png" />
                    <View style={[styles.cartbottomChild, styles.childLayout]} />
                </View>
            </Pressable>
            <View style={styles.statusBar}>
                <View style={[styles.status, styles.statusFlexBox]}>
                    <View style={[styles.timeDate1, styles.statusFlexBox]}>
                        <Text style={[styles.text14, styles.text14FlexBox]}>9:30</Text>
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
                    <View style={styles.camera1}>
                        <View style={[styles.camera2, styles.camera2Position]} />
                    </View>
                </View>
            </View>
            <View style={styles.androidNavbar}>
                <View style={[styles.handle1, styles.camera2Position]} />
            </View>
        </View>);
};

const styles = StyleSheet.create({
    bg4Layout1: {
        height: 386,
        position: "absolute"
    },
    bg4Bg: {
        backgroundColor: Color.crimson,
        top: 0
    },
    itemLayout: {
        height: 92,
        width: 317,
        position: "absolute"
    },
    biryaniTypo: {
        height: 21,
        fontSize: FontSize.size_mid,
        textAlign: "left",
        color: Color.aOSPBlack,
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        position: "absolute"
    },
    textTypo1: {
        height: 19,
        color: Color.crimson,
        fontSize: FontSize.size_mini,
        left: 110,
        top: 58,
        textAlign: "left",
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        position: "absolute"
    },
    maskGroupPosition: {
        height: 149,
        top: -18,
        position: "absolute"
    },
    addIconLayout: {
        height: 22,
        width: 52,
        position: "absolute"
    },
    childLayout1: {
        borderRadius: Border.br_11xl,
        left: 0
    },
    addTypo: {
        height: 17,
        textAlign: "center",
        color: Color.whitesmoke_200,
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        position: "absolute"
    },
    iconLayout: {
        height: 16,
        width: 16,
        overflow: "hidden"
    },
    textTypo: {
        color: Color.whitesmoke_100,
        textAlign: "center",
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        position: "absolute"
    },
    startersTypo: {
        height: 18,
        color: Color.mistyrose,
        top: 16,
        left: 23,
        textAlign: "left",
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600",
        fontSize: FontSize.size_mid,
        position: "absolute"
    },
    childLayout: {
        height: 1,
        backgroundColor: Color.mistyrose,
        position: "absolute"
    },
    viewCartTypo: {
        fontFamily: FontFamily.mulishBold,
        fontWeight: "700"
    },
    bg5Layout: {
        height: 50,
        position: "absolute"
    },
    searchLayout: {
        width: 238,
        height: 50,
        top: 0,
        position: "absolute"
    },
    vectorIconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden"
    },
    bg7Layout: {
        height: 78,
        left: 0,
        width: 363,
        position: "absolute"
    },
    viewCartPosition: {
        height: 30,
        color: Color.white,
        top: 18,
        textAlign: "left",
        fontSize: FontSize.size_mid,
        position: "absolute"
    },
    statusFlexBox: {
        alignItems: "center",
        flexDirection: "row"
    },
    text14FlexBox: {
        textAlign: "left",
        color: Color.aOSPBlack
    },
    camera2Position: {
        top: "50%",
        left: "50%",
        position: "absolute"
    },
    bg4: {
        borderRadius: Border.br_xl,
        backgroundColor: Color.crimson,
        left: 0,
        width: 340,
        height: 386,
        position: "absolute"
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
        height: 92,
        width: 317,
        borderRadius: Border.br_xl,
        left: 0,
        top: 0,
        position: "absolute"
    },
    tomatoSalad: {
        width: 112,
        left: 104,
        top: 23,
        fontSize: FontSize.size_mid
    },
    text7: {
        width: 36
    },
    maskGroupIcon: {
        left: -19,
        width: 144
    },
    addIconChild: {
        height: 22,
        width: 52,
        position: "absolute",
        backgroundColor: Color.crimson,
        top: 0
    },
    add: {
        width: 30,
        fontSize: FontSize.size_smi,
        top: 2,
        height: 17,
        textAlign: "center",
        color: Color.whitesmoke_200,
        left: 11
    },
    addIcon: {
        left: 244,
        height: 22,
        top: 57
    },
    item: {
        left: 10,
        top: 57,
        height: 92,
        width: 317
    },
    bicreditCard2FrontFillIcon2: {
        top: 43,
        left: 64,
        position: "absolute"
    },
    biryani: {
        width: 57,
        left: 104,
        top: 23,
        fontSize: FontSize.size_mid
    },
    text8: {
        width: 27
    },
    maskGroupIcon1: {
        left: -20,
        width: 145
    },
    text9: {
        width: 8,
        left: 23,
        fontSize: FontSize.size_smi,
        top: 2,
        height: 17,
        textAlign: "center",
        color: Color.whitesmoke_200
    },
    text10: {
        left: 9,
        width: 7,
        top: 1,
        color: Color.whitesmoke_100,
        fontSize: FontSize.size_mini,
        height: 21
    },
    text11: {
        top: 4,
        left: 39,
        fontSize: 10,
        width: 5,
        height: 13
    },
    item1: {
        top: 168,
        left: 11
    },
    manchurian: {
        width: 96,
        left: 104,
        top: 23,
        fontSize: FontSize.size_mid
    },
    addIconInner: {
        backgroundColor: Color.aOSPBlack,
        top: 1,
        borderRadius: Border.br_11xl,
        height: 22,
        width: 52,
        left: 0,
        position: "absolute"
    },
    outOfStock1: {
        left: 7,
        fontSize: 9,
        width: 40,
        top: 0
    },
    addIcon2: {
        top: 56,
        height: 23,
        width: 52,
        left: 244,
        position: "absolute"
    },
    item2: {
        top: 279,
        left: 11
    },
    starters: {
        width: 66
    },
    startersGroupChild: {
        top: 38,
        width: 299,
        left: 23
    },
    startersGroup: {
        top: 137,
        width: 340,
        left: 11
    },
    whatsInStore1: {
        top: 87,
        left: 32,
        fontSize: 25,
        width: 270,
        height: 31,
        textAlign: "left",
        color: Color.aOSPBlack,
        position: "absolute"
    },
    shoppingCartIcon1: {
        top: 9,
        left: 284,
        width: 32,
        height: 32,
        opacity: 0.3,
        position: "absolute",
        overflow: "hidden"
    },
    searchChild: {
        backgroundColor: "#efeeee",
        borderRadius: Border.br_11xl,
        left: 0
    },
    vectorIcon5: {
        top: 15,
        left: 17,
        width: 20,
        height: 20,
        position: "absolute"
    },
    search1: {
        top: 14,
        left: 51,
        width: 68,
        opacity: 0.5
    },
    search: {
        left: 41
    },
    icon: {
        height: "100%",
        width: "100%"
    },
    vector: {
        left: -1,
        top: 12,
        width: 24,
        height: 17,
        position: "absolute"
    },
    navSection: {
        width: 316,
        left: 23,
        top: 0
    },
    bg5: {
        backgroundColor: Color.crimson,
        top: 0,
        borderRadius: Border.br_xl,
        left: 0,
        width: 340
    },
    vectorIcon6: {
        height: "28%",
        width: "2.07%",
        top: "41%",
        right: "7.55%",
        bottom: "31%",
        left: "90.39%"
    },
    mainCourse1: {
        width: 124
    },
    mainCourse: {
        top: 534,
        width: 340,
        left: 11
    },
    snacks: {
        top: 595,
        width: 340,
        left: 11
    },
    bg7: {
        backgroundColor: Color.crimson,
        top: 0
    },
    youHave: {
        fontFamily: FontFamily.mulishSemiBold,
        fontWeight: "600"
    },
    text13: {
        fontWeight: "800",
        fontFamily: FontFamily.mulishExtraBold
    },
    youHave2Container: {
        left: 22,
        width: 213
    },
    viewCart: {
        left: 255,
        width: 85,
        fontFamily: FontFamily.mulishBold,
        fontWeight: "700"
    },
    vectorIcon8: {
        height: "15.38%",
        width: "1.66%",
        top: "29.49%",
        right: "3.34%",
        bottom: "55.13%",
        left: "95%"
    },
    cartbottomChild: {
        top: 37,
        left: 257,
        width: 95
    },
    cartbottom: {
        top: 670
    },
    homeSection: {
        top: 52,
        left: -3,
        height: 748,
        width: 363,
        position: "absolute"
    },
    text14: {
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
        height: 24,
        marginLeft: -12,
        top: "50%",
        width: 24,
        backgroundColor: Color.aOSPBlack
    },
    camera1: {
        top: 8,
        zIndex: 2,
        height: 24,
        left: "50%",
        marginLeft: -12,
        width: 24,
        position: "absolute"
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
    handle1: {
        marginTop: -2,
        marginLeft: -54,
        borderRadius: 12,
        backgroundColor: "#202124",
        width: 108,
        height: 4
    },
    androidNavbar: {
        top: 776,
        right: -26,
        left: -26,
        height: 24,
        position: "absolute"
    },
    clientHome: {
        backgroundColor: Color.white,
        height: 800,
        overflow: "hidden",
        width: "100%",
        flex: 1
    }
});

export default ClientHome;
