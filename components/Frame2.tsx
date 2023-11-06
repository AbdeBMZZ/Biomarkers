import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

type Frame2Type = {
  style?: StyleProp<ViewStyle>;
};

const Frame2 = ({ style }: Frame2Type) => {
  return (
    <View style={[styles.todayParent, style]}>
      <Text style={styles.today}>Today</Text>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.frameGroup}>
          <View>
            <View style={styles.parentFlexBox}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-667.png")}
              />
              <Text style={styles.deep}>DEEP</Text>
            </View>
            <View style={[styles.ellipseGroup, styles.parentFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-6671.png")}
              />
              <Text style={styles.deep}>LIGHT</Text>
            </View>
            <View style={[styles.ellipseGroup, styles.parentFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-6672.png")}
              />
              <Text style={styles.deep}>REM</Text>
            </View>
            <View style={[styles.ellipseGroup, styles.parentFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/ellipse-6673.png")}
              />
              <Text style={styles.deep}>AWAKE</Text>
            </View>
          </View>
          <View style={styles.mParent}>
            <Text style={styles.mTypo}>00m</Text>
            <Text style={[styles.h00m, styles.mTypo]}>0h 00m</Text>
            <Text style={[styles.h00m, styles.mTypo]}>0h 00m</Text>
            <Text style={[styles.h00m, styles.mTypo]}>0h 00m</Text>
          </View>
        </View>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame-3127849.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mTypo: {
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
    color: Color.colorGray_100,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  today: {
    top: 26,
    left: 12,
    letterSpacing: 0.4,
    lineHeight: 18,
    color: Color.darkNeutral600,
    textAlign: "left",
    fontFamily: FontFamily.bodyBody1Regular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frameChild: {
    width: 12,
    height: 12,
  },
  deep: {
    textAlign: "center",
    marginLeft: 4,
    color: Color.colorGray_100,
    lineHeight: 18,
    fontFamily: FontFamily.bodyBody1Regular,
    fontSize: FontSize.size_sm,
  },
  ellipseGroup: {
    marginTop: 19,
  },
  h00m: {
    marginTop: 19,
  },
  mParent: {
    marginLeft: 21,
  },
  frameGroup: {
    flexDirection: "row",
  },
  frameIcon: {
    width: 124,
    height: 124,
    marginLeft: 44,
  },
  frameParent: {
    marginTop: -59,
    marginLeft: -151,
    top: "50%",
    left: "50%",
    position: "absolute",
    alignItems: "center",
  },
  todayParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primaryColorWhite,
    width: 358,
    height: 272,
    overflow: "hidden",
  },
});

export default Frame2;
