// import * as React from "react";
// import { StyleSheet, View, Text, Image, Pressable } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { FontFamily, Border, Color, FontSize } from "./AdminAddItemStyles";

// const AdminAddItem = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.adminAddItem1}>
//       <View style={styles.navigationBars}>
//         <View style={styles.handle1} />
//       </View>
//       <View style={[styles.statusBar, styles.statusLayout]}>
//         <View style={[styles.status, styles.statusLayout]}>
//           <View style={styles.timeDate1}>
//             <Text style={styles.text1}>9:30</Text>
//           </View>
//           <View style={styles.statusIcons}>
//             <View style={styles.wiFiNetwork}>
//               <Image
//                 style={styles.iconLayout}
//                 resizeMode="cover"
//                 source="Wifi.png"
//               />
//               <Image
//                 style={[styles.icSignalCellular4BarIcon1, styles.iconLayout]}
//                 resizeMode="cover"
//                 source="ic_signal_cellular_4_bar.png"
//               />
//             </View>
//             <View style={styles.battery}>
//               <Image
//                 style={styles.iconLayout}
//                 resizeMode="cover"
//                 source="Battery.png"
//               />
//             </View>
//           </View>
//           <View style={[styles.camera1, styles.cameraLayout]}>
//             <View style={[styles.camera2, styles.cameraLayout]} />
//           </View>
//         </View>
//       </View>
//       <View style={styles.autoLayoutHorizontal1}>
//         <View style={[styles.autoLayoutVertical1, styles.statusFlexBox]}>
//           <Image
//             style={styles.iconlyboldimage}
//             resizeMode="cover"
//             source="Iconly/Bold/Image.png"
//           />
//           <Text style={styles.selectImageTo1}>Select image to upload</Text>
//         </View>
//       </View>
//       <Text style={[styles.addNewItem1, styles.itemTypo]}>Add New Item</Text>
//       <View style={[styles.input, styles.inputPosition1]}>
//         <View style={[styles.inputChild, styles.inputPosition]} />
//         <Text style={[styles.enterYourHall2, styles.inStockTypo]}>
//           Item Name
//         </Text>
//         <View style={styles.user2} />
//       </View>
//       <View style={[styles.input1, styles.inputPosition1]}>
//         <View style={[styles.inputChild, styles.inputPosition]} />
//         <Text style={[styles.enterYourHall2, styles.inStockTypo]}>
//           Item Price
//         </Text>
//         <View style={styles.user2} />
//       </View>
//       <View style={[styles.item, styles.itemLayout]}>
//         <View style={[styles.itemChild, styles.itemLayout]} />
//         <Text style={[styles.inStock, styles.inStockTypo]}>In Stock?</Text>
//         <Image
//           style={styles.borderIcon1}
//           resizeMode="cover"
//           source="border.png"
//         />
//         <Image
//           style={styles.borderIcon1}
//           resizeMode="cover"
//           source="Ellipse 1.png"
//         />
//       </View>
//       <View style={[styles.input2, styles.inputPosition1]}>
//         <View style={[styles.inputInner, styles.inputPosition]} />
//         <Text style={[styles.uploadItem, styles.itemTypo]}>Upload Item</Text>
//       </View>
//       <Pressable
//         style={[styles.chevronLeft, styles.cameraLayout]}
//         onPress={() => {}}
//       >
//         <Image
//           style={styles.icon}
//           resizeMode="cover"
//           source="chevron-left.png"
//         />
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   statusLayout: {
//     height: 40,
//     flexDirection: "row",
//   },
//   iconLayout: {
//     height: 16,
//     width: 16,
//     overflow: "hidden",
//   },
//   cameraLayout: {
//     width: 24,
//     height: 24,
//     position: "absolute",
//   },
//   statusFlexBox: {
//     flex: 1,
//     alignItems: "center",
//   },
//   itemTypo: {
//     fontFamily: FontFamily.mulishSemiBold,
//     fontWeight: "600",
//     position: "absolute",
//   },
//   inputPosition1: {
//     height: 50,
//     left: 32,
//     position: "absolute",
//   },
//   inputPosition: {
//     borderRadius: Border.br_3xs,
//     left: "0%",
//     bottom: "0%",
//     right: "0%",
//     top: "0%",
//     height: "100%",
//     position: "absolute",
//     width: "100%",
//   },
//   inStockTypo: {
//     fontFamily: FontFamily.mulishRegular,
//     textAlign: "left",
//     position: "absolute",
//   },
//   itemLayout: {
//     height: 35,
//     width: 276,
//     position: "absolute",
//   },
//   handle1: {
//     marginTop: -2,
//     marginLeft: -54,
//     borderRadius: 12,
//     backgroundColor: "#202124",
//     width: 108,
//     height: 4,
//     left: "50%",
//     top: "50%",
//     position: "absolute",
//   },
//   navigationBars: {
//     top: 776,
//     right: -26,
//     left: -26,
//     height: 24,
//     position: "absolute",
//   },
//   text1: {
//     lineHeight: 20,
//     fontFamily: FontFamily.aOSPBodyMedium,
//     textAlign: "left",
//     color: Color.aOSPBlack,
//     letterSpacing: 0,
//     fontSize: FontSize.aOSPBodyMedium_size,
//   },
//   timeDate1: {
//     width: 128,
//     zIndex: 0,
//     alignSelf: "stretch",
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   icSignalCellular4BarIcon1: {
//     marginLeft: -2,
//   },
//   wiFiNetwork: {
//     flexDirection: "row",
//   },
//   battery: {
//     height: 52,
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   statusIcons: {
//     justifyContent: "flex-end",
//     zIndex: 1,
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   camera2: {
//     marginTop: -12,
//     borderRadius: 100,
//     backgroundColor: Color.aOSPBlack,
//     marginLeft: -12,
//     width: 24,
//     left: "50%",
//     top: "50%",
//   },
//   camera1: {
//     top: 8,
//     zIndex: 2,
//     marginLeft: -12,
//     width: 24,
//     left: "50%",
//   },
//   status: {
//     paddingHorizontal: 16,
//     paddingVertical: 0,
//     justifyContent: "space-between",
//     alignItems: "center",
//     flexDirection: "row",
//     flex: 1,
//   },
//   statusBar: {
//     right: 0,
//     flexDirection: "row",
//     left: 0,
//     top: 0,
//     position: "absolute",
//   },
//   iconlyboldimage: {
//     width: 28,
//     height: 28,
//   },
//   selectImageTo1: {
//     fontSize: FontSize.bodyLargeMedium_size,
//     lineHeight: 22,
//     fontWeight: "500",
//     fontFamily: FontFamily.bodyLargeMedium,
//     color: Color.greyscale500,
//     marginTop: 16,
//     textAlign: "center",
//     letterSpacing: 0,
//     alignSelf: "stretch",
//   },
//   autoLayoutVertical1: {
//     alignItems: "center",
//   },
//   autoLayoutHorizontal1: {
//     top: 163,
//     left: 16,
//     borderRadius: 32,
//     backgroundColor: Color.greyscale50,
//     width: 334,
//     height: 186,
//     paddingHorizontal: 20,
//     paddingVertical: 32,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     position: "absolute",
//   },
//   addNewItem1: {
//     top: 100,
//     fontSize: 30,
//     width: 250,
//     left: 27,
//     color: Color.aOSPBlack,
//     height: 28,
//     textAlign: "left",
//   },
//   inputChild: {
//     backgroundColor: Color.silver,
//   },
//   enterYourHall2: {
//     top: "34%",
//     left: "7.33%",
//     color: Color.gray_100,
//     fontSize: FontSize.aOSPBodyMedium_size,
//     fontFamily: FontFamily.mulishRegular,
//   },
//   user2: {
//     height: "48%",
//     width: "8%",
//     top: "26%",
//     right: "5.33%",
//     bottom: "26%",
//     left: "86.67%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   input: {
//     top: 400,
//     width: 300,
//     height: 50,
//     left: 32,
//   },
//   input1: {
//     top: 478,
//     width: 300,
//     height: 50,
//     left: 32,
//   },
//   itemChild: {
//     borderRadius: 40,
//     backgroundColor: "#f3f3f3",
//     left: 0,
//     top: 0,
//   },
//   inStock: {
//     top: 6,
//     fontSize: 15,
//     width: 77,
//     height: 19,
//     left: 27,
//     color: Color.aOSPBlack,
//   },
//   borderIcon1: {
//     top: 7,
//     left: 240,
//     width: 20,
//     height: 20,
//     position: "absolute",
//   },
//   item: {
//     top: 564,
//     left: 45,
//   },
//   inputInner: {
//     backgroundColor: "#ff3951",
//   },
//   uploadItem: {
//     marginLeft: -51.5,
//     top: "28%",
//     fontSize: 18,
//     color: Color.white,
//     textAlign: "center",
//     left: "50%",
//   },
//   input2: {
//     top: 635,
//     width: 295,
//     height: 50,
//     left: 32,
//   },
//   icon: {
//     height: "100%",
//     overflow: "hidden",
//     width: "100%",
//   },
//   chevronLeft: {
//     left: 15,
//     top: 58,
//   },
//   adminAddItem1: {
//     backgroundColor: Color.white,
//     height: 800,
//     overflow: "hidden",
//     width: "100%",
//     flex: 1,
//   },
// });

// export default AdminAddItem;


import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';
var ImagePicker = require('react-native-image-picker');
import {launchImageLibrary} from 'react-native-image-picker'
import axios from 'axios';

const AdminAddItem = () => {
  const [category, setCategory] = useState('');
  const [pic, setPic] = useState(null); // Store the selected image URI
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleImageUpload = () => {
    ImagePicker.showImagePicker({ title: 'Select Image' }, response => {
      if (!response.didCancel && response.uri) {
        setPic(response.uri);
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('category', category);
      formData.append('pic', { uri: pic, name: 'image.jpg', type: 'image/jpeg' });
      formData.append('name', name);
      formData.append('price', price);

      const response = await axios.post('http://localhost:3031/api/menu', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.message === 'Menu item added successfully') {
        Alert.alert('Success', 'Menu item added successfully');
        // Clear form fields and selected image
        setCategory('');
        setPic(null);
        setName('');
        setPrice('');
      } else {
        Alert.alert('Error', 'Failed to add menu item');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while adding the menu item');
    }
  };

  return (
    <View>
      <Text>Add New Menu Item</Text>
      <TextInput placeholder="Category" value={category} onChangeText={setCategory} />
      <TouchableOpacity onPress={handleImageUpload}>
        <Text>Select Image</Text>
      </TouchableOpacity>
      {pic && <Image source={{ uri: pic }} style={{ width: 100, height: 100 }} />}
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default AdminAddItem;
