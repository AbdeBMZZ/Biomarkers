const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ClosedLoopFirstPage from "./screens/ClosedLoopFirstPage";
import EmptyState from "./components/EmptyState";
import Frame from "./components/Frame";
import Frame1 from "./components/Frame1";
import HRVWidget from "./components/HRVWidget";
import Frame2 from "./components/Frame2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

import {
  deeplinkingConfigScreen,
  MyUnboxAuthProvider,
} from '@unbox-infinity/clx-auth-myunbox-react-native';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Medium": require("./assets/fonts/Ubuntu-Medium.ttf"),
    "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  console.log("App.tsx: hideSplashScreen: ", hideSplashScreen);
  console.log("deepLinkingConfigScreen: ", deeplinkingConfigScreen);

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer
          fallback={<Text>Loading...</Text>}
          linking={{
            enabled: true,
            prefixes: ['AppNameHere://', 'appnamehere://'],
            config: {
              screens: {
                ...deeplinkingConfigScreen, // --> add the deeplinking config for myunbox here
              },
            },
          }}
          >          
          
          <MyUnboxAuthProvider>

            {hideSplashScreen ? (
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                  name="ClosedLoopFirstPage"
                  component={ClosedLoopFirstPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="EmptyState"
                  component={EmptyState}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Frame"
                  component={Frame}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Frame1"
                  component={Frame1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HRVWidget"
                  component={HRVWidget}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Frame2"
                  component={Frame2}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            ) : null}

          </MyUnboxAuthProvider>

        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};
export default App;
