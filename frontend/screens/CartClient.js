import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "./CartClientStyles";

const CartClient = () => {
  	const navigation = useNavigation();
  	
  	return (
    		<View style={styles.cartClient}>
      			<View style={styles.navigationBars}>
        				<View style={styles.handle1} />
      			</View>
      			<View style={styles.statusBar}>
        				<View style={[styles.status, styles.statusFlexBox]}>
          					<View style={[styles.timeDate1, styles.statusFlexBox]}>
            						<Text style={[styles.text18, styles.textClr]}>9:30</Text>
          					</View>
          					<View style={[styles.statusIcons, styles.statusFlexBox]}>
            						<View style={styles.wiFiNetwork}>
              							<Image style={styles.iconLayout1} resizeMode="cover" source="Wifi.png" />
              							<Image style={[styles.icSignalCellular4BarIcon1, styles.iconLayout1]} resizeMode="cover" source="ic_signal_cellular_4_bar.png" />
            						</View>
            						<View style={[styles.battery, styles.statusFlexBox]}>
              							<Image style={styles.iconLayout1} resizeMode="cover" source="Battery.png" />
            						</View>
          					</View>
          					<View style={[styles.camera1, styles.cameraPosition]}>
            						<View style={[styles.camera2, styles.cameraPosition]} />
          					</View>
        				</View>
      			</View>
      			<Text style={[styles.cart, styles.textTypo1]}>Cart</Text>
      			<View style={[styles.clickOnTheTrashIconToDelParent, styles.iconLayout]}>
        				<Text style={[styles.clickOnThe1, styles.totalTypo1]}>Click on the trash icon to delete items.</Text>
        				<Image style={[styles.iwwaswipeIcon1, styles.iconLayout]} resizeMode="cover" source="iwwa:swipe.png" />
      			</View>
      			<View style={[styles.item, styles.itemLayout]}>
        				<View style={styles.itemChildShadowBox} />
        				<View style={styles.itemChildShadowBox} />
        				<Image style={[styles.bicreditCard2FrontFillIcon4, styles.iconLayout1]} resizeMode="cover" source="bi:credit-card-2-front-fill.png" />
        				<Text style={[styles.biryani, styles.textTypo1]}>Biryani</Text>
        				<Text style={[styles.text19, styles.textTypo1]}>$69</Text>
        				<Image style={styles.maskGroupIcon} resizeMode="cover" source="Mask Group.png" />
        				<View style={[styles.addIcon, styles.addIconLayout]}>
          					<View style={[styles.addIconChild, styles.addIconChildBg]} />
          					<Text style={[styles.text20, styles.text20Layout]}>1</Text>
          					<Text style={[styles.text21, styles.textTypo]}>-</Text>
          					<Text style={[styles.text22, styles.textTypo]}>+</Text>
        				</View>
      			</View>
      			<View style={[styles.item1, styles.itemLayout]}>
        				<View style={styles.itemChildShadowBox} />
        				<Image style={[styles.bicreditCard2FrontFillIcon4, styles.iconLayout1]} resizeMode="cover" source="bi:credit-card-2-front-fill.png" />
        				<Text style={[styles.biryani, styles.textTypo1]}>Manchurian</Text>
        				<Text style={[styles.text19, styles.textTypo1]}>$69</Text>
        				<Image style={styles.maskGroupIcon} resizeMode="cover" source="Mask Group.png" />
        				<View style={[styles.addIcon, styles.addIconLayout]}>
          					<View style={[styles.addIconChild, styles.addIconChildBg]} />
          					<Text style={[styles.text20, styles.text20Layout]}>2</Text>
          					<Text style={[styles.text21, styles.textTypo]}>-</Text>
          					<Text style={[styles.text22, styles.textTypo]}>+</Text>
        				</View>
      			</View>
      			<View style={[styles.item2, styles.itemLayout]}>
        				<View style={styles.itemChildShadowBox} />
        				<Image style={[styles.bicreditCard2FrontFillIcon4, styles.iconLayout1]} resizeMode="cover" source="bi:credit-card-2-front-fill.png" />
        				<Text style={[styles.biryani, styles.textTypo1]}>Chicken 65</Text>
        				<Text style={[styles.text19, styles.textTypo1]}>$69</Text>
        				<Image style={styles.maskGroupIcon} resizeMode="cover" source="Mask Group.png" />
        				<View style={[styles.addIcon, styles.addIconLayout]}>
          					<View style={[styles.addIconChild, styles.addIconChildBg]} />
          					<Text style={[styles.text20, styles.text20Layout]}>1</Text>
          					<Text style={[styles.text21, styles.textTypo]}>-</Text>
          					<Text style={[styles.text22, styles.textTypo]}>+</Text>
        				</View>
      			</View>
      			<View style={[styles.item3, styles.itemLayout]}>
        				<View style={styles.itemChildShadowBox} />
        				<Image style={[styles.bicreditCard2FrontFillIcon4, styles.iconLayout1]} resizeMode="cover" source="bi:credit-card-2-front-fill.png" />
        				<Text style={[styles.biryani, styles.textTypo1]}>Pulao Veg.</Text>
        				<Text style={[styles.text19, styles.textTypo1]}>$69</Text>
        				<Image style={styles.maskGroupIcon} resizeMode="cover" source="Mask Group.png" />
        				<View style={[styles.addIcon, styles.addIconLayout]}>
          					<View style={[styles.addIconChild, styles.addIconChildBg]} />
          					<Text style={[styles.text20, styles.text20Layout]}>1</Text>
          					<Text style={[styles.text21, styles.textTypo]}>-</Text>
          					<Text style={[styles.text22, styles.textTypo]}>+</Text>
        				</View>
      			</View>
      			<View style={styles.cartClientChild} />
      			<View style={styles.grouptotal}>
        				<View style={styles.totalParent}>
          					<Text style={[styles.total, styles.totalTypo]}>Total</Text>
          					<Text style={[styles.text35, styles.textTypo1]}>$274</Text>
        				</View>
        				<View style={[styles.grouptotalChild, styles.grouptotalLayout]} />
        				<View style={[styles.grouptotalItem, styles.grouptotalLayout]} />
      			</View>
      			<Pressable style={[styles.vector, styles.text20Layout]} onPress={()=>{}}>
        				<Image style={styles.icon} resizeMode="cover" source="Vector.png" />
      			</Pressable>
      			<Pressable style={[styles.cartClientItem, styles.addIconChildBg]} onPress={()=>{}} />
      			<Text style={[styles.proceedToPayment1, styles.totalTypo]}>Proceed to payment</Text>
    		</View>);
};

const styles = StyleSheet.create({
  	statusFlexBox: {
    		alignItems: "center",
    		flexDirection: "row"
  	},
  	textClr: {
    		color: Color.aOSPBlack,
    		textAlign: "left"
  	},
  	iconLayout1: {
    		height: 16,
    		width: 16,
    		overflow: "hidden"
  	},
  	cameraPosition: {
    		marginLeft: -12,
    		width: 24,
    		left: "50%",
    		height: 24,
    		position: "absolute"
  	},
  	textTypo1: {
    		fontFamily: FontFamily.mulishSemiBold,
    		fontWeight: "600"
  	},
  	iconLayout: {
    		height: 20,
    		position: "absolute"
  	},
  	totalTypo1: {
    		fontFamily: FontFamily.mulishRegular,
    		textAlign: "left",
    		color: Color.aOSPBlack
  	},
  	itemLayout: {
    		height: 92,
    		width: 315,
    		left: 25,
    		position: "absolute"
  	},
  	addIconLayout: {
    		height: 22,
    		width: 52
  	},
  	addIconChildBg: {
    		backgroundColor: Color.crimson,
    		borderRadius: Border.br_11xl,
    		position: "absolute"
  	},
  	text20Layout: {
    		height: 17,
    		position: "absolute"
  	},
  	textTypo: {
    		color: Color.whitesmoke_100,
    		textAlign: "center",
    		fontFamily: FontFamily.mulishSemiBold,
    		fontWeight: "600",
    		position: "absolute"
  	},
  	totalTypo: {
    		fontSize: FontSize.size_xl,
    		position: "absolute"
  	},
  	grouptotalLayout: {
    		height: 2,
    		width: 304,
    		backgroundColor: Color.darkslategray,
    		left: 0,
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
  	text18: {
    		fontSize: FontSize.aOSPBodyMedium_size,
    		letterSpacing: 0,
    		lineHeight: 20,
    		fontFamily: FontFamily.aOSPBodyMedium,
    		textAlign: "left"
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
    		width: 24,
    		top: "50%",
    		marginLeft: -12
  	},
  	camera1: {
    		top: 8,
    		zIndex: 2,
    		width: 24
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
  	cart: {
    		top: 115,
    		left: 149,
    		fontSize: 30,
    		textAlign: "left",
    		color: Color.aOSPBlack,
    		position: "absolute"
  	},
  	clickOnThe1: {
    		fontSize: FontSize.size_3xs,
    		top: 4,
    		left: 25,
    		fontFamily: FontFamily.mulishRegular,
    		position: "absolute"
  	},
  	iwwaswipeIcon1: {
    		width: 20,
    		left: 0,
    		top: 0,
    		overflow: "hidden"
  	},
  	clickOnTheTrashIconToDelParent: {
    		top: 179,
    		left: 82,
    		width: 199
  	},
  	itemChildShadowBox: {
    		shadowOpacity: 1,
    		elevation: 40,
    		shadowRadius: 40,
    		shadowOffset: {
      			width: 0,
      			height: 10
    		},
    		shadowColor: "rgba(0, 0, 0, 0.03)",
    		backgroundColor: Color.whitesmoke_200,
    		borderRadius: Border.br_xl,
    		height: 92,
    		width: 315,
    		left: 0,
    		top: 0,
    		position: "absolute"
  	},
  	bicreditCard2FrontFillIcon4: {
    		top: 43,
    		left: 64,
    		position: "absolute"
  	},
  	biryani: {
    		top: 23,
    		left: 103,
    		fontSize: FontSize.size_mid,
    		textAlign: "left",
    		color: Color.aOSPBlack,
    		position: "absolute"
  	},
  	text19: {
    		left: 109,
    		color: Color.crimson,
    		fontSize: FontSize.size_mini,
    		top: 58,
    		textAlign: "left",
    		position: "absolute"
  	},
  	maskGroupIcon: {
    		top: -18,
    		left: -24,
    		width: 149,
    		height: 149,
    		position: "absolute"
  	},
  	addIconChild: {
    		height: 22,
    		width: 52,
    		left: 0,
    		top: 0
  	},
  	text20: {
    		left: 23,
    		fontSize: FontSize.size_smi,
    		color: Color.whitesmoke_200,
    		width: 8,
    		textAlign: "center",
    		top: 2,
    		fontFamily: FontFamily.mulishSemiBold,
    		fontWeight: "600"
  	},
  	text21: {
    		top: 1,
    		left: 9,
    		width: 7,
    		height: 21,
    		fontSize: FontSize.size_mini
  	},
  	text22: {
    		left: 39,
    		width: 5,
    		height: 13,
    		fontSize: FontSize.size_3xs,
    		top: 4,
    		color: Color.whitesmoke_100
  	},
  	addIcon: {
    		top: 57,
    		left: 242,
    		position: "absolute"
  	},
  	item: {
    		top: 227
  	},
  	item1: {
    		top: 336
  	},
  	item2: {
    		top: 445
  	},
  	item3: {
    		top: 554
  	},
  	cartClientChild: {
    		top: 606,
    		left: 15,
    		width: 329,
    		height: 84,
    		position: "absolute",
    		backgroundColor: Color.white
  	},
  	total: {
    		width: 83,
    		top: 2,
    		fontFamily: FontFamily.mulishRegular,
    		textAlign: "left",
    		color: Color.aOSPBlack,
    		left: 0
  	},
  	text35: {
    		left: 233,
    		fontSize: 22,
    		width: 77,
    		textAlign: "left",
    		color: Color.aOSPBlack,
    		top: 0,
    		position: "absolute"
  	},
  	totalParent: {
    		top: 16,
    		left: 3,
    		width: 310,
    		height: 28,
    		position: "absolute"
  	},
  	grouptotalChild: {
    		top: 0
  	},
  	grouptotalItem: {
    		top: 58
  	},
  	grouptotal: {
    		top: 617,
    		left: 31,
    		width: 313,
    		height: 60,
    		position: "absolute"
  	},
  	icon: {
    		height: "100%",
    		width: "100%"
  	},
  	vector: {
    		left: 29,
    		top: 76,
    		width: 24
  	},
  	cartClientItem: {
    		top: 687,
    		left: 22,
    		width: 314,
    		height: 70
  	},
  	proceedToPayment1: {
    		top: 708,
    		left: 83,
    		fontWeight: "700",
    		fontFamily: FontFamily.mulishBold,
    		color: "#f6f6f9",
    		textAlign: "center"
  	},
  	cartClient: {
    		height: 800,
    		overflow: "hidden",
    		width: "100%",
    		flex: 1,
    		backgroundColor: Color.white
  	}
});

export default CartClient;
