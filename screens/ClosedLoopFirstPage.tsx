import React, { useState } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { Image } from "expo-image";
import Carousel from "react-native-reanimated-carousel";
import Frame from "../components/Frame";
import EmptyState from "../components/EmptyState";
import Frame2 from "../components/Frame2";
import HRVWidget from "../components/HRVWidget";
import Frame1 from "../components/Frame1";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const ClosedLoopFirstPage = () => {
  const [frameCarouselItems, setFrameCarouselItems] = useState([
    <Frame />,
    <EmptyState />,
  ]);
  const [frameCarousel1Items, setFrameCarousel1Items] = useState([
    <Frame2 />,
    <HRVWidget />,
    <Frame1 />,
  ]);

  return (
    <View style={styles.closedLoopFirstPage}>
      <View style={[styles.iosToolBars, styles.iosToolBarsFlexBox]}>
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        <View style={styles.dynamicIsland} />
        <View style={styles.status}>
          <Image
            style={styles.cellularIcon}
            contentFit="cover"
            source={require("../assets/cellular2.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi2.png")}
          />
          <View style={styles.batteryPercentage}>
            <View style={[styles.percent, styles.percentPosition]} />
            <Image
              style={[styles.batteryIcon, styles.percentPosition]}
              contentFit="cover"
              source={require("../assets/battery3.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.navigationBottom, styles.buttonShadowBox]}>
        <View style={[styles.appNavigationBottom, styles.iosToolBarsFlexBox]}>
          <View style={styles.iconFlexBox}>
            <Image
              style={styles.iconwallet}
              contentFit="cover"
              source={require("../assets/iconwallet.png")}
            />
            <Text style={[styles.settings, styles.settingsTypo]}>Wallet</Text>
          </View>
          <View style={[styles.iconNavigationMenu1, styles.iconFlexBox]}>
            <Image
              style={styles.iconwallet}
              contentFit="cover"
              source={require("../assets/icon--finance--ecommerce1.png")}
            />
            <Text style={[styles.settings1, styles.settingsTypo]}>Wallet</Text>
          </View>
          <View style={[styles.iconNavigationMenu1, styles.iconFlexBox]}>
            <Image
              style={styles.iconwallet}
              contentFit="cover"
              source={require("../assets/icon--time-travel--weather1.png")}
            />
            <Text style={[styles.settings1, styles.settingsTypo]}>Scan QR</Text>
          </View>
          <View style={styles.iconFlexBox}>
            <Image
              style={styles.iconwallet}
              contentFit="cover"
              source={require("../assets/icon--general2.png")}
            />
            <Text style={[styles.settings3, styles.settingsTypo]}>
              Settings
            </Text>
          </View>
          <View style={[styles.iconNavigationMenu1, styles.iconFlexBox]}>
            <Image
              style={styles.iconwallet}
              contentFit="cover"
              source={require("../assets/icon--general2.png")}
            />
            <Text style={[styles.settings1, styles.settingsTypo]}>
              Settings
            </Text>
          </View>
          <View style={[styles.iconNavigationMenu1, styles.iconFlexBox]}>
            <Image
              style={styles.iconwallet}
              contentFit="cover"
              source={require("../assets/icon--general2.png")}
            />
            <Text style={[styles.settings1, styles.settingsTypo]}>
              Settings
            </Text>
          </View>
        </View>
        <View style={styles.iosToolBars1}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <View style={styles.wrapper}>
        <Carousel
          style={styles.carousel}
          width={368}
          mode="normal"
          autoPlay={true}
          loop={true}
          pagingEnabled={true}
          data={frameCarouselItems}
          renderItem={({ item }) => item}
        />
      </View>
      <View style={[styles.button, styles.buttonShadowBox]}>
        <View style={[styles.howToUse, styles.howToUsePosition]}>
          <View style={styles.howToUseChild} />
          <View style={[styles.iconunboxCoinParent, styles.howToUsePosition]}>
            <Image
              style={styles.iconunboxCoin}
              contentFit="cover"
              source={require("../assets/iconunbox-coin.png")}
            />
            <Text style={[styles.text, styles.timeTypo]}>Pay</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Carousel
          style={styles.carousel1}
          width={390}
          mode="normal"
          autoPlay={true}
          loop={true}
          pagingEnabled={true}
          data={frameCarousel1Items}
          renderItem={({ item }) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iosToolBarsFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  timeTypo: {
    textAlign: "left",
    fontSize: FontSize.bodyBody1Regular_size,
  },
  percentPosition: {
    top: "50%",
    position: "absolute",
  },
  buttonShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    position: "absolute",
  },
  settingsTypo: {
    marginTop: 3,
    textAlign: "center",
    color: Color.primaryColorWhite,
    lineHeight: 18,
    fontSize: FontSize.bodyBody4_size,
  },
  iconFlexBox: {
    opacity: 0.8,
    alignItems: "center",
  },
  howToUsePosition: {
    top: 16,
    position: "absolute",
  },
  time: {
    letterSpacing: 0,
    fontFamily: FontFamily.sFProText,
    color: Color.primaryColorBlack,
    width: 65,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.bodyBody1Regular_size,
  },
  dynamicIsland: {
    borderRadius: Border.br_lg,
    width: 125,
    height: 37,
    display: "none",
    backgroundColor: Color.primaryColorWhite,
  },
  cellularIcon: {
    width: 19,
    height: 12,
  },
  wifiIcon: {
    width: 17,
    marginLeft: 7.33,
    height: 12,
  },
  percent: {
    marginTop: -4.55,
    left: 2,
    borderRadius: 3,
    backgroundColor: Color.primaryColorBlack,
    width: 10,
    height: 9,
  },
  batteryIcon: {
    marginTop: -6.55,
    height: 13,
    width: 27,
    top: "50%",
    left: 0,
  },
  batteryPercentage: {
    height: 14,
    width: 27,
    marginLeft: 7.33,
  },
  status: {
    width: 78,
    alignItems: "center",
    flexDirection: "row",
  },
  iosToolBars: {
    top: 0,
    height: 44,
    paddingLeft: Padding.p_12xl,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_xl,
    paddingBottom: Padding.p_3xs,
    alignItems: "center",
    width: 390,
    left: 0,
    justifyContent: "space-between",
    position: "absolute",
    backgroundColor: Color.lightNeutral200,
  },
  iconwallet: {
    width: 24,
    height: 24,
    borderRadius: Border.br_9xs,
  },
  settings: {
    width: 47,
    justifyContent: "center",
    display: "flex",
    marginTop: 3,
    textAlign: "center",
    color: Color.primaryColorWhite,
    lineHeight: 18,
    fontSize: FontSize.bodyBody4_size,
    height: 14,
    alignItems: "center",
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
  },
  settings1: {
    fontFamily: FontFamily.bodyBody1Regular,
    width: 47,
    justifyContent: "center",
    display: "flex",
    marginTop: 3,
    textAlign: "center",
    color: Color.primaryColorWhite,
    lineHeight: 18,
    fontSize: FontSize.bodyBody4_size,
    height: 14,
    alignItems: "center",
  },
  iconNavigationMenu1: {
    display: "none",
  },
  settings3: {
    marginTop: 3,
    textAlign: "center",
    color: Color.primaryColorWhite,
    lineHeight: 18,
    fontSize: FontSize.bodyBody4_size,
    fontFamily: FontFamily.ubuntuBold,
    fontWeight: "700",
  },
  appNavigationBottom: {
    height: 70,
    alignItems: "flex-end",
    paddingHorizontal: 66,
    paddingVertical: Padding.p_xs,
    alignSelf: "stretch",
  },
  homeIndicator: {
    marginLeft: -70,
    bottom: 9,
    borderRadius: Border.br_81xl,
    width: 139,
    height: 5,
    left: "50%",
    backgroundColor: Color.primaryColorWhite,
    position: "absolute",
  },
  iosToolBars1: {
    height: 26,
    alignSelf: "stretch",
    display: "none",
  },
  navigationBottom: {
    bottom: 0,
    backgroundColor: Color.darkNeutral800,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 5,
    elevation: 5,
    width: 390,
  },
  carousel: {
    width: 360,
    height: 172,
  },
  wrapper: {
    top: 76,
    width: 360,
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
  howToUseChild: {
    width: 359,
    height: 64,
    zIndex: 0,
    borderRadius: Border.br_xs,
    backgroundColor: Color.lightNeutral200,
  },
  iconunboxCoin: {
    width: 32,
    height: 32,
    borderRadius: Border.br_9xs,
  },
  text: {
    lineHeight: 22,
    color: Color.primaryColorTextColor,
    marginLeft: 16,
    fontFamily: FontFamily.bodyBody1Regular,
    textAlign: "left",
    fontSize: FontSize.bodyBody1Regular_size,
  },
  iconunboxCoinParent: {
    marginLeft: -37.5,
    zIndex: 1,
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
  },
  howToUse: {
    left: 16,
  },
  button: {
    top: 287,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 43,
    elevation: 43,
    width: 391,
    height: 96,
    borderRadius: Border.br_xs,
    backgroundColor: Color.primaryColorWhite,
  },
  carousel1: {
    width: 358,
    height: 308,
  },
  container: {
    bottom: 129,
    width: 358,
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
  closedLoopFirstPage: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.lightNeutral200,
  },
});

export default ClosedLoopFirstPage;
