import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

type Frame1Type = {
  style?: StyleProp<ViewStyle>;
};

const Frame1 = ({ style }: Frame1Type) => {
  return (
    <View style={[styles.frameParent, style]}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/frame-3127853.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    width: 178,
    height: 178,
  },
  frameParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primaryColorWhite,
    width: 358,
    height: 272,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Frame1;
