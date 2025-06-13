import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk: require("@/assets/fonts/space-grotesk.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();

      // Aplicar fuente global a todos los <Text />
      Text.defaultProps = Text.defaultProps || {};
      Text.defaultProps.style = {
        fontFamily: "SpaceGrotesk",
      };
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
