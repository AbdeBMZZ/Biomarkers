import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

type EmptyStateType = {
  style?: StyleProp<ViewStyle>;
};

const EmptyState = ({ style }: EmptyStateType) => {
  return (
    <View style={[styles.emptyState, style]}>
      <View style={styles.card}>
        <View style={[styles.cardChild, styles.cardPosition]} />
        <Image
          style={[styles.cardItem, styles.cardPosition]}
          contentFit="cover"
          source={require("../assets/group-3127840.png")}
        />
        <View style={[styles.clDropdown, styles.logoFlexBox]}>
          <View style={styles.parentFlexBox}>
            <Image
              style={styles.iconcl}
              contentFit="cover"
              source={require("../assets/iconcl.png")}
            />
            <Text style={styles.closedLooooooooooop}>Closed-Loop</Text>
          </View>
          <Image
            style={styles.iconchevronDown}
            contentFit="cover"
            source={require("../assets/iconchevron-down.png")}
          />
        </View>
        <View style={[styles.cardInner, styles.cardInnerPosition]}>
          <View style={styles.frameWrapper}>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>0</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-10832.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.blueDolphinWrapper, styles.cardInnerPosition]}>
          <Text style={[styles.blueDolphin, styles.textTypo]}>-</Text>
        </View>
        <View style={[styles.logo, styles.logoFlexBox]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardPosition: {
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
  cardInnerPosition: {
    left: 24,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.primaryColorWhite,
  },
  cardChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.lightNeutral600,
    width: 360,
    height: 187,
  },
  cardItem: {
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
  iconchevronDown: {
    width: 24,
    height: 24,
    display: "none",
    marginLeft: 12,
    borderRadius: Border.br_9xs,
  },
  clDropdown: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_200,
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
  },
  frameChild: {
    width: 62,
    marginLeft: 3.82,
    height: 16,
  },
  parent: {
    width: 81,
  },
  frameWrapper: {
    width: 209,
  },
  cardInner: {
    top: 117,
    width: 209,
  },
  blueDolphin: {
    fontSize: FontSize.size_xl,
    lineHeight: 28,
  },
  blueDolphinWrapper: {
    top: 76,
  },
  logo: {
    left: 284,
    borderRadius: 6,
    backgroundColor: Color.primaryColorWhite,
    justifyContent: "center",
    top: 16,
  },
  card: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_base,
    overflow: "hidden",
    position: "absolute",
  },
  emptyState: {
    width: 358,
    height: 172,
  },
});

export default EmptyState;
