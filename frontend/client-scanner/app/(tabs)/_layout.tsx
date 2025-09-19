import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { HapticTab } from "@/components/haptic-tab";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const activeTintColor = "#181111";
	const inactiveTintColor = "#886364";

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: activeTintColor,
				tabBarInactiveTintColor: inactiveTintColor,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarStyle: {
					backgroundColor: "#ffffff",
					borderTopColor: "#f4f0f0",
					borderTopWidth: 1,
					paddingBottom: 20,
					height: 90,
				},
				tabBarLabelStyle: {
					fontSize: 12,
					fontWeight: "500",
					fontFamily: "Plus Jakarta Sans",
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "home" : "home-outline"}
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="scan"
				options={{
					title: "Scan",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "barcode" : "barcode-outline"}
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="cases"
				options={{
					title: "Cases",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "briefcase" : "briefcase-outline"}
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="map"
				options={{
					title: "Map",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "map" : "map-outline"}
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="more"
				options={{
					title: "More",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "list" : "list-outline"}
							size={24}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
