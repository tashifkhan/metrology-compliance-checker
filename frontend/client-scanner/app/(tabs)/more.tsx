import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

interface MenuItem {
	id: string;
	title: string;
	icon: string;
	route?: string;
	color?: string;
}

const menuItems: MenuItem[] = [
	{
		id: "profile",
		title: "Profile & Preferences",
		icon: "person-outline",
		route: "/profile",
	},
	{
		id: "help",
		title: "Help & Support",
		icon: "help-circle-outline",
		route: "/help",
	},
	{
		id: "language",
		title: "Language Selection",
		icon: "language-outline",
		route: "/language",
	},
	{
		id: "batch",
		title: "Batch Scan Management",
		icon: "folder-outline",
		route: "/batch-scan",
	},
	{
		id: "device",
		title: "Device Registration",
		icon: "phone-portrait-outline",
		route: "/device-registration",
	},
	{
		id: "reports",
		title: "Reports",
		icon: "document-outline",
		route: "/reports",
	},
	{
		id: "settings",
		title: "Settings",
		icon: "settings-outline",
		route: "/settings",
	},
	{
		id: "signout",
		title: "Sign Out",
		icon: "log-out-outline",
		color: "#ea2a33",
	},
];

export default function MoreScreen() {
	const handleMenuPress = (item: MenuItem) => {
		if (item.id === "signout") {
			// Handle sign out logic
			console.log("Sign out pressed");
		} else if (item.route) {
			router.push(item.route);
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar style="dark" />

			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.headerTitle}>More</Text>
				<TouchableOpacity style={styles.settingsButton}>
					<Ionicons
						name="information-circle-outline"
						size={24}
						color="#181111"
					/>
				</TouchableOpacity>
			</View>

			{/* User Info */}
			<View style={styles.userInfo}>
				<View style={styles.avatar}>
					<Ionicons name="person" size={32} color="#886364" />
				</View>
				<View style={styles.userDetails}>
					<Text style={styles.userName}>John Inspector</Text>
					<Text style={styles.userRole}>Field Inspector</Text>
					<Text style={styles.userLocation}>Region A - District 1</Text>
				</View>
			</View>

			{/* Menu Items */}
			<ScrollView style={styles.menuList}>
				{menuItems.map((item) => (
					<TouchableOpacity
						key={item.id}
						style={styles.menuItem}
						onPress={() => handleMenuPress(item)}
					>
						<View style={styles.menuItemLeft}>
							<Ionicons
								name={item.icon as any}
								size={24}
								color={item.color || "#181111"}
							/>
							<Text
								style={[
									styles.menuItemText,
									{ color: item.color || "#181111" },
								]}
							>
								{item.title}
							</Text>
						</View>
						<Ionicons name="chevron-forward" size={20} color="#886364" />
					</TouchableOpacity>
				))}
			</ScrollView>

			{/* App Info */}
			<View style={styles.appInfo}>
				<Text style={styles.appVersion}>Compliance Checker v1.0.0</Text>
				<Text style={styles.appBuild}>Build 2024.01.15</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 8,
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#181111",
		flex: 1,
		textAlign: "center",
		marginLeft: 48,
	},
	settingsButton: {
		width: 48,
		height: 48,
		justifyContent: "center",
		alignItems: "center",
	},
	userInfo: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
		paddingVertical: 20,
		backgroundColor: "#f4f0f0",
		marginHorizontal: 16,
		marginBottom: 16,
		borderRadius: 12,
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: "#ffffff",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 16,
	},
	userDetails: {
		flex: 1,
	},
	userName: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#181111",
		marginBottom: 2,
	},
	userRole: {
		fontSize: 14,
		color: "#886364",
		marginBottom: 2,
	},
	userLocation: {
		fontSize: 12,
		color: "#886364",
	},
	menuList: {
		flex: 1,
		paddingHorizontal: 16,
	},
	menuItem: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#f4f0f0",
	},
	menuItemLeft: {
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
	},
	menuItemText: {
		fontSize: 16,
		fontWeight: "500",
	},
	appInfo: {
		alignItems: "center",
		paddingVertical: 16,
		borderTopWidth: 1,
		borderTopColor: "#f4f0f0",
	},
	appVersion: {
		fontSize: 12,
		color: "#886364",
		marginBottom: 2,
	},
	appBuild: {
		fontSize: 12,
		color: "#886364",
	},
});
