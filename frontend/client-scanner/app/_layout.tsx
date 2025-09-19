import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
	initialRouteName: "splash",
};

export default function RootLayout() {
	const colorScheme = useColorScheme();

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen name="splash" options={{ headerShown: false }} />
				<Stack.Screen name="sign-in" options={{ headerShown: false }} />
				<Stack.Screen
					name="device-registration"
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen
					name="pre-capture-guide"
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="camera-capture" options={{ headerShown: false }} />
				<Stack.Screen
					name="scan-confirmation"
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="scan-results" options={{ headerShown: false }} />
				<Stack.Screen name="help" options={{ headerShown: false }} />
				<Stack.Screen name="language" options={{ headerShown: false }} />
				<Stack.Screen name="batch-scan" options={{ headerShown: false }} />
				<Stack.Screen
					name="modal"
					options={{ presentation: "modal", title: "Modal" }}
				/>
			</Stack>
			<StatusBar style="auto" />
		</ThemeProvider>
	);
}
