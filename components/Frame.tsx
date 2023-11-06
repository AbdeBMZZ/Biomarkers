import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

type FrameType = {
  style?: StyleProp<ViewStyle>;
};

const Frame = ({ style }: FrameType) => {
  return (
    <View style={[styles.rectangleParent, style]}>
      <View style={[styles.frameChild, styles.framePosition]} />
      <Image
        style={[styles.frameItem, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/group-3127840.png")}
      />
      <View style={[styles.clDropdown, styles.logoFlexBox]}>
        <View style={styles.iconclParent}>
          <Image
            style={styles.iconcl}
            contentFit="cover"
            source={require("../assets/iconcl.png")}
          />
          <Text style={styles.closedLooooooooooop}>*Closed-Loop Name*</Text>
        </View>
        <Image
          style={styles.iconchevronDown}
          contentFit="cover"
          source={require("../assets/iconchevron-down.png")}
        />
      </View>
      <View style={[styles.frameWrapper, styles.wrapperPosition]}>
        <View>
          <View style={styles.iconclParent}>
            <Text style={[styles.text, styles.textTypo]}>0</Text>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/group-10832.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.identityNameWrapper, styles.wrapperPosition]}>
        <Text style={[styles.identityName, styles.textTypo]}>
          *Identity Name*
        </Text>
      </View>
      <View style={[styles.logo, styles.logoFlexBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  logoFlexBox: {
    justifyContent: "center",
    top: 16,
    alignItems: "center",
    position: "absolute",
  },
  wrapperPosition: {
    left: 24,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.primaryColorWhite,
  },
  frameChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorDodgerblue_100,
    height: 187,
    width: 360,
  },
  frameItem: {
    width: 412,
    height: 323,
    opacity: 0.3,
  },
  iconcl: {
    width: 16,
    height: 16,
    borderRadius: Border.br_9xs,
  },
  closedLooooooooooop: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.bodyBody1Regular,
    marginLeft: 8,
    textAlign: "left",
    color: Color.primaryColorWhite,
  },
  iconclParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconchevronDown: {
    width: 24,
    height: 24,
    display: "none",
    marginLeft: 12,
    borderRadius: Border.br_9xs,
  },
  clDropdown: {
    borderRadius: Border.br_5xl,
    backgroundColor: "#006dc0",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_7xs,
    flexDirection: "row",
    justifyContent: "center",
    left: 24,
    top: 16,
  },
  text: {
    fontSize: FontSize.size_5xl,
    lineHeight: 34,
    width: 15,
  },
  frameInner: {
    width: 62,
    marginLeft: 3.82,
    height: 16,
  },
  frameWrapper: {
    top: 117,
  },
  identityName: {
    fontSize: FontSize.size_xl,
    lineHeight: 28,
  },
  identityNameWrapper: {
    top: 76,
  },
  logo: {
    left: 286,
    borderRadius: 6,
    backgroundColor: Color.primaryColorWhite,
    justifyContent: "center",
    top: 16,
  },
  rectangleParent: {
    borderRadius: Border.br_base,
    height: 172,
    overflow: "hidden",
    width: 360,
  },
});

export default Frame;
