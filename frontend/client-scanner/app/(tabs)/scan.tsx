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

export default function ScanScreen() {
	const handleStartScan = () => {
		router.push("/pre-capture-guide");
	};

	const handleQuickScan = () => {
		router.push("/camera-capture");
	};

	return (
		<View style={styles.container}>
			<StatusBar style="dark" />

			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Scan</Text>
				<TouchableOpacity
					style={styles.helpButton}
					onPress={() => router.push("/help")}
				>
					<Ionicons name="help-circle-outline" size={24} color="#181111" />
				</TouchableOpacity>
			</View>

			<ScrollView style={styles.content}>
				{/* Main Scan Action */}
				<View style={styles.mainScanContainer}>
					<View style={styles.scanIconContainer}>
						<Ionicons name="scan" size={80} color="#ea2a33" />
					</View>
					<Text style={styles.scanTitle}>Ready to Scan</Text>
					<Text style={styles.scanSubtitle}>
						Capture product labels to check compliance with Legal Metrology
						requirements
					</Text>

					<TouchableOpacity
						style={styles.startScanButton}
						onPress={handleStartScan}
					>
						<Ionicons name="camera" size={20} color="#ffffff" />
						<Text style={styles.startScanButtonText}>Start Guided Scan</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.quickScanButton}
						onPress={handleQuickScan}
					>
						<Ionicons name="flash" size={20} color="#ea2a33" />
						<Text style={styles.quickScanButtonText}>Quick Scan</Text>
					</TouchableOpacity>
				</View>

				{/* Scan Options */}
				<View style={styles.optionsContainer}>
					<Text style={styles.optionsTitle}>Scan Options</Text>

					<TouchableOpacity style={styles.optionCard}>
						<Ionicons name="barcode" size={32} color="#ea2a33" />
						<View style={styles.optionContent}>
							<Text style={styles.optionTitle}>Barcode Scanner</Text>
							<Text style={styles.optionDescription}>
								Scan barcodes and QR codes for quick product identification
							</Text>
						</View>
						<Ionicons name="chevron-forward" size={20} color="#886364" />
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.optionCard}
						onPress={() => router.push("/batch-scan")}
					>
						<Ionicons name="layers" size={32} color="#ea2a33" />
						<View style={styles.optionContent}>
							<Text style={styles.optionTitle}>Batch Scanning</Text>
							<Text style={styles.optionDescription}>
								Scan multiple items in sequence for bulk processing
							</Text>
						</View>
						<Ionicons name="chevron-forward" size={20} color="#886364" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.optionCard}>
						<Ionicons name="document-text" size={32} color="#ea2a33" />
						<View style={styles.optionContent}>
							<Text style={styles.optionTitle}>Manual Entry</Text>
							<Text style={styles.optionDescription}>
								Enter product information manually when scanning isn't possible
							</Text>
						</View>
						<Ionicons name="chevron-forward" size={20} color="#886364" />
					</TouchableOpacity>
				</View>

				{/* Recent Scans */}
				<View style={styles.recentContainer}>
					<Text style={styles.recentTitle}>Recent Scans</Text>

					<View style={styles.recentItem}>
						<View style={styles.recentIcon}>
							<Ionicons name="checkmark-circle" size={20} color="#27ae60" />
						</View>
						<View style={styles.recentContent}>
							<Text style={styles.recentText}>Coffee Beans - 500g</Text>
							<Text style={styles.recentTime}>2 hours ago</Text>
						</View>
						<TouchableOpacity>
							<Ionicons name="eye" size={16} color="#886364" />
						</TouchableOpacity>
					</View>

					<View style={styles.recentItem}>
						<View style={styles.recentIcon}>
							<Ionicons name="warning" size={20} color="#f39c12" />
						</View>
						<View style={styles.recentContent}>
							<Text style={styles.recentText}>Rice Package - 1kg</Text>
							<Text style={styles.recentTime}>4 hours ago</Text>
						</View>
						<TouchableOpacity>
							<Ionicons name="eye" size={16} color="#886364" />
						</TouchableOpacity>
					</View>

					<View style={styles.recentItem}>
						<View style={styles.recentIcon}>
							<Ionicons name="close-circle" size={20} color="#ea2a33" />
						</View>
						<View style={styles.recentContent}>
							<Text style={styles.recentText}>Cooking Oil - 2L</Text>
							<Text style={styles.recentTime}>1 day ago</Text>
						</View>
						<TouchableOpacity>
							<Ionicons name="eye" size={16} color="#886364" />
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
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
	helpButton: {
		width: 48,
		height: 48,
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		flex: 1,
	},
	mainScanContainer: {
		alignItems: "center",
		paddingVertical: 40,
		paddingHorizontal: 16,
	},
	scanIconContainer: {
		width: 120,
		height: 120,
		borderRadius: 60,
		backgroundColor: "#f4f0f0",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 24,
	},
	scanTitle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#181111",
		marginBottom: 8,
	},
	scanSubtitle: {
		fontSize: 16,
		color: "#886364",
		textAlign: "center",
		lineHeight: 22,
		marginBottom: 32,
		maxWidth: 280,
	},
	startScanButton: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 16,
		paddingHorizontal: 32,
		backgroundColor: "#ea2a33",
		borderRadius: 12,
		marginBottom: 12,
		gap: 8,
		width: "100%",
		maxWidth: 280,
	},
	startScanButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#ffffff",
	},
	quickScanButton: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 16,
		paddingHorizontal: 32,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		gap: 8,
		width: "100%",
		maxWidth: 280,
	},
	quickScanButtonText: {
		fontSize: 16,
		fontWeight: "600",
		color: "#ea2a33",
	},
	optionsContainer: {
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	optionsTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#181111",
		marginBottom: 16,
	},
	optionCard: {
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		marginBottom: 12,
		gap: 16,
	},
	optionContent: {
		flex: 1,
	},
	optionTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#181111",
		marginBottom: 4,
	},
	optionDescription: {
		fontSize: 14,
		color: "#886364",
		lineHeight: 18,
	},
	recentContainer: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		paddingBottom: 32,
	},
	recentTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#181111",
		marginBottom: 16,
	},
	recentItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#f4f0f0",
	},
	recentIcon: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "#f4f0f0",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 12,
	},
	recentContent: {
		flex: 1,
	},
	recentText: {
		fontSize: 14,
		fontWeight: "500",
		color: "#181111",
		marginBottom: 2,
	},
	recentTime: {
		fontSize: 12,
		color: "#886364",
	},
});
