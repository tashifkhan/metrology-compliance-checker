import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function SplashScreen() {
	useEffect(() => {
		// Simulate app initialization
		const timer = setTimeout(() => {
			// Navigate to sign-in screen after 3 seconds
			router.replace("/sign-in");
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="dark" />

			{/* App Logo and Title */}
			<View style={styles.content}>
				<View style={styles.logoContainer}>
					<Ionicons name="shield-checkmark" size={120} color="#ea2a33" />
					<Text style={styles.appTitle}>Compliance Check</Text>
					<Text style={styles.appSubtitle}>
						Checking for compliance with Legal Metrology requirements
					</Text>
				</View>

				{/* Loading Indicator */}
				<View style={styles.loadingContainer}>
					<View style={styles.loadingBar}>
						<View style={styles.loadingFill} />
					</View>
					<Text style={styles.loadingText}>Initializing...</Text>
				</View>
			</View>

			{/* Footer */}
			<View style={styles.footer}>
				<Text style={styles.versionText}>Version 1.0.0</Text>
				<Text style={styles.copyrightText}>
					© 2024 Legal Metrology Division
				</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
	},
	content: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 32,
	},
	logoContainer: {
		alignItems: "center",
		marginBottom: 80,
	},
	appTitle: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#181111",
		marginTop: 24,
		marginBottom: 16,
		textAlign: "center",
	},
	appSubtitle: {
		fontSize: 16,
		color: "#886364",
		textAlign: "center",
		lineHeight: 24,
		maxWidth: 280,
	},
	loadingContainer: {
		alignItems: "center",
		width: "100%",
	},
	loadingBar: {
		width: 200,
		height: 4,
		backgroundColor: "#f4f0f0",
		borderRadius: 2,
		overflow: "hidden",
		marginBottom: 16,
	},
	loadingFill: {
		height: "100%",
		backgroundColor: "#ea2a33",
		width: "60%",
		borderRadius: 2,
	},
	loadingText: {
		fontSize: 14,
		color: "#886364",
		fontWeight: "500",
	},
	footer: {
		alignItems: "center",
		paddingVertical: 32,
		paddingHorizontal: 16,
	},
	versionText: {
		fontSize: 12,
		color: "#886364",
		marginBottom: 4,
	},
	copyrightText: {
		fontSize: 12,
		color: "#886364",
		textAlign: "center",
	},
});
