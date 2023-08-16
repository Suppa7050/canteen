import * as React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "./ClientMenuStyles";

const ClientMenu = () => {
  	const navigation = useNavigation();
  	
  	return (
    		<View style={styles.clientMenu}>
      			<View style={styles.navigationBars}>
        				<View style={styles.handle1} />
      			</View>
      			<View style={[styles.statusBar, styles.childPosition]}>
        				<View style={[styles.status, styles.statusFlexBox]}>
          					<View style={[styles.timeDate1, styles.statusFlexBox]}>
            						<Text style={styles.text10}>9:30</Text>
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
          					<View style={[styles.camera1, styles.cameraIconLayout]}>
            						<View style={[styles.camera2, styles.cameraIconLayout]} />
          					</View>
        				</View>
      			</View>
      			<Image style={styles.image11Icon} resizeMode="cover" source="image 11.png" />
      			<View style={[styles.home, styles.homeLayout]}>
        				<View style={[styles.homeChild, styles.homeLayout]} />
        				<View style={styles.navSection}>
          					<Image style={styles.shoppingCartIcon1} resizeMode="cover" source="shopping-cart.png" />
          					<View style={[styles.search, styles.searchLayout]}>
            						<View style={[styles.searchChild, styles.searchLayout]} />
            						<Image style={styles.vectorIcon3} resizeMode="cover" source="Vector.png" />
            						<Text style={[styles.search1, styles.search1Typo]}>Search</Text>
          					</View>
          					<Pressable style={[styles.vector, styles.vectorPosition]} onPress={()=>{}}>
            						<Image style={styles.icon} resizeMode="cover" source="Vector.png" />
          					</Pressable>
        				</View>
        				<Text style={styles.whatsInStore1}>What’s in store today?</Text>
          					<View style={styles.startersGroup}>
            						<View style={styles.bg2} />
            						<View style={styles.bg2} />
            						<Image style={styles.vectorIcon4} resizeMode="cover" source="Vector.png" />
            						<View style={[styles.item, styles.itemLayout]}>
              							<View style={styles.itemShadowBox} />
              							<Text style={[styles.tomatoSalad, styles.biryaniTypo]}>Tomato Salad</Text>
              							<Text style={[styles.text11, styles.textTypo1]}>$130</Text>
              							<Image style={[styles.maskGroupIcon, styles.maskGroupPosition]} resizeMode="cover" source="Mask Group.png" />
              							<View style={[styles.addIcon, styles.addIconLayout]}>
                								<View style={[styles.addIconChild, styles.addIconLayout]} />
                								<Text style={[styles.add, styles.addTypo]}>Add</Text>
              							</View>
            						</View>
            						<View style={[styles.item1, styles.itemPosition]}>
              							<View style={styles.itemShadowBox} />
              							<Image style={styles.bicreditCard2FrontFillIcon2} resizeMode="cover" source="bi:credit-card-2-front-fill.png" />
              							<Text style={[styles.biryani, styles.biryaniTypo]}>Biryani</Text>
              							<Text style={[styles.text12, styles.textTypo1]}>$69</Text>
              							<Image style={[styles.maskGroupIcon1, styles.maskGroupPosition]} resizeMode="cover" source="Mask Group.png" />
              							<View style={[styles.addIcon, styles.addIconLayout]}>
                								<View style={[styles.addIconChild, styles.addIconLayout]} />
                								<Text style={[styles.text13, styles.startersPosition]}>1</Text>
                								<Text style={[styles.text14, styles.textTypo]}>-</Text>
                								<Text style={[styles.text15, styles.textTypo]}>+</Text>
              							</View>
            						</View>
            						<View style={[styles.item2, styles.itemPosition]}>
              							<View style={styles.itemShadowBox} />
              							<Image style={styles.bicreditCard2FrontFillIcon2} resizeMode="cover" source="bi:credit-card-2-front-fill.png" />
              							<Text style={[styles.manchurian, styles.biryaniTypo]}>Manchurian</Text>
              							<Text style={[styles.text12, styles.textTypo1]}>$69</Text>
              							<Image style={[styles.maskGroupIcon1, styles.maskGroupPosition]} resizeMode="cover" source="Mask Group.png" />
              							<View style={[styles.addIcon, styles.addIconLayout]}>
                								<View style={[styles.addIconChild, styles.addIconLayout]} />
                								<Text style={[styles.text13, styles.startersPosition]}>1</Text>
                								<Text style={[styles.text14, styles.textTypo]}>-</Text>
                								<Text style={[styles.text15, styles.textTypo]}>+</Text>
              							</View>
            						</View>
            						<Text style={[styles.starters, styles.startersPosition]}>Starters</Text>
            						<View style={[styles.startersGroupChild, styles.startersPosition]} />
          					</View>
          					</View>
          					<View style={styles.menuOptions}>
            						<Text style={[styles.profile, styles.cartTypo]}>Profile</Text>
            						<Text style={[styles.cart, styles.cartPosition]}>Cart</Text>
            						<Text style={[styles.signOut, styles.cartTypo]}>Sign Out</Text>
            						<Text style={[styles.orders, styles.cartTypo]}>Orders</Text>
            						<View style={[styles.menuOptionsChild, styles.menuLayout]} />
            						<View style={[styles.menuOptionsItem, styles.menuLayout]} />
            						<View style={[styles.menuOptionsInner, styles.menuLayout]} />
            						<View style={[styles.lineView, styles.menuLayout]} />
            						<Image style={[styles.ggprofileIcon1, styles.cameraIconLayout]} resizeMode="cover" source="gg:profile.png" />
            						<Image style={[styles.icons8buy1, styles.cartPosition]} resizeMode="cover" source="icons8:buy.png" />
            						<Image style={[styles.icoutlineLocalOfferIcon1, styles.cameraIconLayout]} resizeMode="cover" source="ic:outline-local-offer.png" />
            						<Image style={[styles.icoutlineStickyNote2Icon1, styles.cameraIconLayout]} resizeMode="cover" source="ic:outline-sticky-note-2.png" />
          					</View>
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
          					iconLayout: {
            						width: 16,
            						height: 16,
            						overflow: "hidden"
          					},
          					cameraIconLayout: {
            						width: 24,
            						height: 24,
            						position: "absolute"
          					},
          					homeLayout: {
            						height: 521,
            						position: "absolute"
          					},
          					searchLayout: {
            						width: 197,
            						height: 39,
            						top: 0,
            						position: "absolute"
          					},
          					search1Typo: {
            						fontFamily: FontFamily.mulishSemiBold,
            						fontWeight: "600",
            						fontSize: FontSize.size_mid,
            						height: 16,
            						textAlign: "left"
          					},
          					vectorPosition: {
            						top: 11,
            						position: "absolute"
          					},
          					itemLayout: {
            						height: 81,
            						width: 295
          					},
          					biryaniTypo: {
            						height: 19,
            						left: 97,
            						top: 20,
            						fontFamily: FontFamily.mulishSemiBold,
            						fontWeight: "600",
            						fontSize: FontSize.size_mid,
            						textAlign: "left",
            						color: Color.aOSPBlack,
            						position: "absolute"
          					},
          					textTypo1: {
            						height: 17,
            						color: Color.crimson,
            						left: 102,
            						top: 51,
            						fontSize: FontSize.size_mini,
            						fontFamily: FontFamily.mulishSemiBold,
            						fontWeight: "600",
            						textAlign: "left",
            						position: "absolute"
          					},
          					maskGroupPosition: {
            						height: 141,
            						left: -25,
            						top: -19,
            						position: "absolute"
          					},
          					addIconLayout: {
            						width: 49,
            						height: 19,
            						position: "absolute"
          					},
          					addTypo: {
            						height: 15,
            						color: Color.whitesmoke_200,
            						fontSize: FontSize.size_smi,
            						top: 2,
            						textAlign: "center",
            						fontFamily: FontFamily.mulishSemiBold,
            						fontWeight: "600"
          					},
          					itemPosition: {
            						left: 10,
            						position: "absolute"
          					},
          					startersPosition: {
            						left: 22,
            						position: "absolute"
          					},
          					textTypo: {
            						color: Color.whitesmoke_100,
            						textAlign: "center",
            						fontFamily: FontFamily.mulishSemiBold,
            						fontWeight: "600",
            						position: "absolute"
          					},
          					cartTypo: {
            						color: Color.white,
            						fontFamily: FontFamily.poppinsSemiBold,
            						left: 36,
            						fontWeight: "600",
            						fontSize: FontSize.size_mid
          					},
          					cartPosition: {
            						top: 78,
            						position: "absolute"
          					},
          					menuLayout: {
            						height: 0,
            						width: 132,
            						borderTopWidth: 0.3,
            						borderColor: "#f4f4f8",
            						borderStyle: "solid",
            						left: 36,
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
          					text10: {
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
            						position: "absolute"
          					},
          					image11Icon: {
            						top: 145,
            						left: 220,
            						width: 246,
            						height: 531,
            						opacity: 0.2,
            						borderRadius: Border.br_11xl,
            						position: "absolute"
          					},
          					homeChild: {
            						borderRadius: 40,
            						backgroundColor: Color.white,
            						width: 267,
            						left: 0,
            						top: 0
          					},
          					shoppingCartIcon1: {
            						top: 167,
            						left: 500,
            						width: 27,
            						height: 25,
            						opacity: 0.3,
            						position: "absolute",
            						overflow: "hidden"
          					},
          					searchChild: {
            						backgroundColor: "#efeeee",
            						borderRadius: Border.br_11xl,
            						left: 0
          					},
          					vectorIcon3: {
            						top: 12,
            						left: 14,
            						width: 17,
            						height: 16,
            						position: "absolute"
          					},
          					search1: {
            						left: 43,
            						width: 57,
            						opacity: 0.5,
            						top: 11,
            						position: "absolute",
            						color: Color.aOSPBlack
          					},
          					search: {
            						left: 34
          					},
          					icon: {
            						height: "100%",
            						width: "100%"
          					},
          					vector: {
            						left: -1,
            						width: 20,
            						height: 13
          					},
          					navSection: {
            						top: 22,
            						left: 30,
            						width: 263,
            						height: 39,
            						position: "absolute"
          					},
          					whatsInStore1: {
            						top: 85,
            						left: 39,
            						fontSize: 25,
            						fontWeight: "700",
            						fontFamily: FontFamily.mulishBold,
            						width: 366,
            						height: 27,
            						textAlign: "left",
            						color: Color.aOSPBlack,
            						position: "absolute"
          					},
          					bg2: {
            						borderRadius: Border.br_xl,
            						height: 341,
            						width: 317,
            						left: 0,
            						top: 0,
            						position: "absolute",
            						backgroundColor: Color.crimson
          					},
          					vectorIcon4: {
            						height: "3.3%",
            						width: "1.39%",
            						top: "85.51%",
            						right: "-74.32%",
            						bottom: "11.19%",
            						left: "172.92%",
            						maxWidth: "100%",
            						maxHeight: "100%",
            						position: "absolute",
            						overflow: "hidden"
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
            						height: 81,
            						width: 295,
            						borderRadius: Border.br_xl,
            						left: 0,
            						top: 0,
            						position: "absolute"
          					},
          					tomatoSalad: {
            						width: 104
          					},
          					text11: {
            						width: 34
          					},
          					maskGroupIcon: {
            						width: 123
          					},
          					addIconChild: {
            						borderRadius: Border.br_11xl,
            						left: 0,
            						top: 0,
            						backgroundColor: Color.crimson
          					},
          					add: {
            						width: 28,
            						left: 10,
            						position: "absolute"
          					},
          					addIcon: {
            						left: 227,
            						top: 50
          					},
          					item: {
            						left: 9,
            						top: 50,
            						position: "absolute"
          					},
          					bicreditCard2FrontFillIcon2: {
            						top: 38,
            						left: 60,
            						width: 15,
            						height: 14,
            						position: "absolute",
            						overflow: "hidden"
          					},
          					biryani: {
            						width: 53
          					},
          					text12: {
            						width: 25
          					},
          					maskGroupIcon1: {
            						width: 122
          					},
          					text13: {
            						width: 8,
            						height: 15,
            						color: Color.whitesmoke_200,
            						fontSize: FontSize.size_smi,
            						top: 2,
            						textAlign: "center",
            						fontFamily: FontFamily.mulishSemiBold,
            						fontWeight: "600"
          					},
          					text14: {
            						left: 8,
            						width: 7,
            						height: 18,
            						top: 1,
            						fontSize: FontSize.size_mini,
            						color: Color.whitesmoke_100
          					},
          					text15: {
            						top: 4,
            						left: 37,
            						fontSize: FontSize.size_3xs,
            						width: 5,
            						height: 12
          					},
          					item1: {
            						top: 148,
            						height: 81,
            						width: 295
          					},
          					manchurian: {
            						width: 89
          					},
          					item2: {
            						top: 247,
            						height: 81,
            						width: 295
          					},
          					starters: {
            						top: 14,
            						color: Color.mistyrose,
            						width: 100,
            						fontFamily: FontFamily.mulishSemiBold,
            						fontWeight: "600",
            						fontSize: FontSize.size_mid,
            						height: 16,
            						textAlign: "left"
          					},
          					startersGroupChild: {
            						top: 34,
            						backgroundColor: Color.mistyrose,
            						width: 279,
            						height: 1
          					},
          					startersGroup: {
            						top: 134,
            						left: 19,
            						height: 341,
            						width: 317,
            						position: "absolute"
          					},
          					home: {
            						top: 136,
            						left: 234,
            						width: 405
          					},
          					profile: {
            						textAlign: "center",
            						fontFamily: FontFamily.poppinsSemiBold,
            						left: 36,
            						top: 0,
            						position: "absolute"
          					},
          					cart: {
            						color: Color.white,
            						fontFamily: FontFamily.poppinsSemiBold,
            						left: 36,
            						fontWeight: "600",
            						fontSize: FontSize.size_mid,
            						textAlign: "left"
          					},
          					signOut: {
            						top: 234,
            						textAlign: "left",
            						position: "absolute"
          					},
          					orders: {
            						top: 156,
            						textAlign: "left",
            						position: "absolute"
          					},
          					menuOptionsChild: {
            						top: 52
          					},
          					menuOptionsItem: {
            						top: 130
          					},
          					menuOptionsInner: {
            						top: 208
          					},
          					lineView: {
            						top: 286
          					},
          					ggprofileIcon1: {
            						top: 1,
            						left: 0,
            						overflow: "hidden"
          					},
          					icons8buy1: {
            						width: 26,
            						height: 26,
            						left: 0,
            						overflow: "hidden"
          					},
          					icoutlineLocalOfferIcon1: {
            						top: 158,
            						left: 0,
            						overflow: "hidden"
          					},
          					icoutlineStickyNote2Icon1: {
            						top: 236,
            						left: 0,
            						overflow: "hidden"
          					},
          					menuOptions: {
            						top: 170,
            						left: 24,
            						width: 168,
            						height: 286,
            						position: "absolute"
          					},
          					clientMenu: {
            						height: 800,
            						overflow: "hidden",
            						width: "100%",
            						flex: 1,
            						backgroundColor: Color.crimson
          					}
        				});
        				
        				export default ClientMenu;
        				