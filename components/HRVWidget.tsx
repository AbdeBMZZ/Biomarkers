import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

type HRVWidgetType = {
  style?: StyleProp<ViewStyle>;
};

const HRVWidget = ({ style }: HRVWidgetType) => {
  return (
    <View style={[styles.hrvWidget, style]}>
      <Text style={styles.last7Days}>Last 7 Days</Text>
      <Text style={styles.text}>00</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={styles.xx}>xx</Text>
      <View style={[styles.hrvWidgetInner, styles.monParentFlexBox]}>
        <View style={styles.image182Parent}>
          <Image
            style={[styles.image182Icon, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/image-182.png")}
          />
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/vector-302.png")}
          />
          <View style={[styles.frameItem, styles.frameChildLayout1]} />
          <View style={[styles.frameInner, styles.frameChildLayout1]} />
          <View style={[styles.lineView, styles.frameChildLayout1]} />
          <View style={[styles.frameChild1, styles.frameChildLayout1]} />
          <View style={[styles.frameChild2, styles.frameChildLayout1]} />
          <View style={[styles.frameChild3, styles.frameChildLayout1]} />
          <View style={[styles.frameChild4, styles.frameChildLayout1]} />
          <View style={[styles.frameChild5, styles.frameChildLayout1]} />
          <View style={[styles.frameChild6, styles.frameChildLayout1]} />
          <View style={[styles.frameChild7, styles.frameChildLayout1]} />
          <View style={[styles.frameChild8, styles.frameChildLayout1]} />
          <View style={[styles.frameChild9, styles.frameChildLayout1]} />
          <View style={[styles.frameChild10, styles.frameChildLayout1]} />
          <View style={[styles.frameChild11, styles.frameChildLayout1]} />
          <View style={[styles.frameChild12, styles.frameChildLayout1]} />
          <View style={[styles.frameChild13, styles.frameChildLayout1]} />
          <View style={[styles.frameChild14, styles.frameChildLayout1]} />
          <View style={[styles.frameChild15, styles.frameChildLayout1]} />
          <View style={[styles.frameChild16, styles.frameChildLayout1]} />
          <View style={[styles.frameChild17, styles.frameChildLayout1]} />
          <View style={[styles.frameChild18, styles.frameChildLayout1]} />
          <View style={[styles.frameChild19, styles.frameChildLayout1]} />
          <View style={[styles.frameChild20, styles.frameChildLayout1]} />
          <View style={[styles.frameChild21, styles.frameChildLayout1]} />
          <View style={[styles.frameChild22, styles.frameChildLayout1]} />
          <View style={[styles.frameChild23, styles.frameChildLayout1]} />
          <View style={[styles.frameChild24, styles.frameChildLayout1]} />
          <View style={[styles.frameChild25, styles.frameChildLayout1]} />
          <View style={styles.lineParent}>
            <View style={styles.frameChildLayout} />
            <View style={[styles.frameChild27, styles.frameChildLayout]} />
            <View style={[styles.frameChild27, styles.frameChildLayout]} />
            <View style={[styles.frameChild27, styles.frameChildLayout]} />
            <View style={[styles.frameChild27, styles.frameChildLayout]} />
          </View>
          <Text style={[styles.text1, styles.textLayout]}>50</Text>
          <Text style={[styles.text2, styles.textLayout]}>30</Text>
          <Text style={[styles.text3, styles.textLayout]}>10</Text>
          <View style={[styles.monParent, styles.monParentFlexBox]}>
            <Text style={[styles.mon, styles.textLayout]}>Mon</Text>
            <Text style={[styles.mon, styles.textLayout]}>Tue</Text>
            <Text style={[styles.mon, styles.textLayout]}>Wed</Text>
            <Text style={[styles.mon, styles.textLayout]}>Thu</Text>
            <Text style={[styles.mon, styles.textLayout]}>Fri</Text>
            <Text style={[styles.mon, styles.textLayout]}>Sat</Text>
            <Text style={[styles.mon, styles.textLayout]}>Sun</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  monParentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  frameChildPosition: {
    width: 278,
    left: 22,
    position: "absolute",
  },
  frameChildLayout1: {
    height: 5,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.primaryColorTextColor,
    borderStyle: "solid",
    top: 101,
    position: "absolute",
  },
  frameChildLayout: {
    height: 1,
    width: 279,
    borderTopWidth: 1,
    borderColor: Color.primaryColorTextColor,
    borderStyle: "solid",
  },
  textLayout: {
    opacity: 0.25,
    lineHeight: 18,
    fontSize: FontSize.bodyBody4_size,
    color: Color.primaryColorTextColor,
  },
  last7Days: {
    top: 26,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    color: Color.darkNeutral600,
    textAlign: "left",
    fontFamily: FontFamily.bodyBody1Regular,
    lineHeight: 18,
    position: "absolute",
    left: 12,
  },
  text: {
    left: 265,
    fontSize: 40,
    letterSpacing: 1.2,
    lineHeight: 52,
    textTransform: "uppercase",
    color: Color.primaryColorTextColor,
    top: 10,
    textAlign: "left",
    fontFamily: FontFamily.bodyBody1Regular,
    position: "absolute",
  },
  vectorIcon: {
    top: 20,
    width: 13,
    height: 12,
    left: 316,
    position: "absolute",
  },
  xx: {
    top: 34,
    color: "#b3b3b3",
    fontSize: FontSize.bodyBody4_size,
    left: 316,
    textAlign: "left",
    fontFamily: FontFamily.bodyBody1Regular,
    lineHeight: 18,
    position: "absolute",
  },
  image182Icon: {
    top: 3,
    height: 53,
    opacity: 0.41,
  },
  frameChild: {
    top: 8,
    height: 58,
  },
  frameItem: {
    left: 30,
  },
  frameInner: {
    left: 40,
  },
  lineView: {
    left: 50,
  },
  frameChild1: {
    left: 60,
  },
  frameChild2: {
    left: 70,
  },
  frameChild3: {
    left: 80,
  },
  frameChild4: {
    left: 90,
  },
  frameChild5: {
    left: 100,
  },
  frameChild6: {
    left: 110,
  },
  frameChild7: {
    left: 120,
  },
  frameChild8: {
    left: 130,
  },
  frameChild9: {
    left: 140,
  },
  frameChild10: {
    left: 150,
  },
  frameChild11: {
    left: 160,
  },
  frameChild12: {
    left: 170,
  },
  frameChild13: {
    left: 180,
  },
  frameChild14: {
    left: 190,
  },
  frameChild15: {
    left: 200,
  },
  frameChild16: {
    left: 210,
  },
  frameChild17: {
    left: 220,
  },
  frameChild18: {
    left: 230,
  },
  frameChild19: {
    left: 240,
  },
  frameChild20: {
    left: 250,
  },
  frameChild21: {
    left: 260,
  },
  frameChild22: {
    left: 270,
  },
  frameChild23: {
    left: 280,
  },
  frameChild24: {
    left: 290,
  },
  frameChild25: {
    left: 300,
  },
  frameChild27: {
    marginTop: 19,
  },
  lineParent: {
    opacity: 0.15,
    left: 22,
    top: 10,
    position: "absolute",
  },
  text1: {
    top: 0,
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
    left: 0,
    opacity: 0.25,
    lineHeight: 18,
    textAlign: "left",
    position: "absolute",
  },
  text2: {
    top: 39,
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
    left: 0,
    opacity: 0.25,
    lineHeight: 18,
    textAlign: "left",
    position: "absolute",
  },
  text3: {
    top: 78,
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
    left: 0,
    opacity: 0.25,
    lineHeight: 18,
    textAlign: "left",
    position: "absolute",
  },
  mon: {
    textAlign: "center",
    opacity: 0.25,
    lineHeight: 18,
    fontFamily: FontFamily.bodyBody1Regular,
  },
  monParent: {
    top: 111,
    left: 14,
    width: 294,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image182Parent: {
    width: 308,
    height: 129,
  },
  hrvWidgetInner: {
    bottom: 59,
    width: 334,
    left: 12,
    alignItems: "center",
  },
  hrvWidget: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primaryColorWhite,
    width: 358,
    height: 272,
    overflow: "hidden",
  },
});

export default HRVWidget;
