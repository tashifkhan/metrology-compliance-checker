import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	Image,
	Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { router, useLocalSearchParams } from "expo-router";

export default function ScanConfirmationScreen() {
	const { photoUri } = useLocalSearchParams();
	const [isProcessing, setIsProcessing] = useState(false);

	const handleConfirm = async () => {
		setIsProcessing(true);

		// Simulate processing time
		setTimeout(() => {
			setIsProcessing(false);
			router.push("/scan-results");
		}, 3000);
	};

	const handleRetake = () => {
		router.back();
	};

	const handleEdit = () => {
		Alert.alert("Edit Image", "Image editing features would be available here");
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="dark" />

			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={24} color="#181111" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Confirm Capture</Text>
				<TouchableOpacity onPress={handleEdit}>
					<Ionicons name="create-outline" size={24} color="#181111" />
				</TouchableOpacity>
			</View>

			<ScrollView style={styles.content}>
				{/* Image Preview */}
				<View style={styles.imageContainer}>
					{photoUri ? (
						<Image
							source={{ uri: photoUri as string }}
							style={styles.capturedImage}
						/>
					) : (
						<View style={styles.imagePlaceholder}>
							<Ionicons name="image" size={80} color="#886364" />
							<Text style={styles.placeholderText}>Captured Image</Text>
						</View>
					)}

					{/* Image Quality Indicators */}
					<View style={styles.qualityIndicators}>
						<View style={styles.qualityItem}>
							<Ionicons name="checkmark-circle" size={20} color="#27ae60" />
							<Text style={styles.qualityText}>Good lighting</Text>
						</View>
						<View style={styles.qualityItem}>
							<Ionicons name="checkmark-circle" size={20} color="#27ae60" />
							<Text style={styles.qualityText}>Text readable</Text>
						</View>
						<View style={styles.qualityItem}>
							<Ionicons name="warning" size={20} color="#f39c12" />
							<Text style={styles.qualityText}>Slight blur detected</Text>
						</View>
					</View>
				</View>

				{/* Scan Information */}
				<View style={styles.infoContainer}>
					<Text style={styles.infoTitle}>Scan Details</Text>

					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Date & Time:</Text>
						<Text style={styles.infoValue}>{new Date().toLocaleString()}</Text>
					</View>

					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Location:</Text>
						<Text style={styles.infoValue}>Current Location</Text>
					</View>

					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Image Size:</Text>
						<Text style={styles.infoValue}>2.4 MB (1920x1080)</Text>
					</View>

					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Quality Score:</Text>
						<Text style={[styles.infoValue, { color: "#27ae60" }]}>85/100</Text>
					</View>
				</View>

				{/* Processing Options */}
				<View style={styles.optionsContainer}>
					<Text style={styles.optionsTitle}>Processing Options</Text>

					<TouchableOpacity style={styles.optionItem}>
						<View style={styles.optionLeft}>
							<Ionicons name="text" size={20} color="#ea2a33" />
							<Text style={styles.optionText}>Extract text automatically</Text>
						</View>
						<Ionicons name="checkmark-circle" size={20} color="#27ae60" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.optionItem}>
						<View style={styles.optionLeft}>
							<Ionicons name="analytics" size={20} color="#ea2a33" />
							<Text style={styles.optionText}>Analyze compliance data</Text>
						</View>
						<Ionicons name="checkmark-circle" size={20} color="#27ae60" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.optionItem}>
						<View style={styles.optionLeft}>
							<Ionicons name="cloud-upload" size={20} color="#ea2a33" />
							<Text style={styles.optionText}>Upload to central database</Text>
						</View>
						<Ionicons name="checkmark-circle" size={20} color="#27ae60" />
					</TouchableOpacity>
				</View>

				{/* Preview Notes */}
				<View style={styles.notesContainer}>
					<Text style={styles.notesTitle}>Preview Notes</Text>
					<Text style={styles.notesText}>
						This image will be processed to extract weight, measure, and
						certification information. Ensure all text is clearly visible before
						confirming.
					</Text>
				</View>
			</ScrollView>

			{/* Action Buttons */}
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.retakeButton} onPress={handleRetake}>
					<Ionicons name="camera" size={20} color="#ea2a33" />
					<Text style={styles.retakeButtonText}>Retake</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.confirmButton,
						isProcessing && styles.confirmButtonDisabled,
					]}
					onPress={handleConfirm}
					disabled={isProcessing}
				>
					{isProcessing ? (
						<>
							<Ionicons name="sync" size={20} color="#ffffff" />
							<Text style={styles.confirmButtonText}>Processing...</Text>
						</>
					) : (
						<>
							<Ionicons name="checkmark" size={20} color="#ffffff" />
							<Text style={styles.confirmButtonText}>Confirm & Process</Text>
						</>
					)}
				</TouchableOpacity>
			</View>
		</SafeAreaView>
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
	},
	content: {
		flex: 1,
	},
	imageContainer: {
		margin: 16,
		borderRadius: 12,
		overflow: "hidden",
		backgroundColor: "#f4f0f0",
	},
	capturedImage: {
		width: "100%",
		height: 300,
		resizeMode: "cover",
	},
	imagePlaceholder: {
		height: 300,
		justifyContent: "center",
		alignItems: "center",
	},
	placeholderText: {
		marginTop: 12,
		fontSize: 16,
		color: "#886364",
		fontWeight: "500",
	},
	qualityIndicators: {
		padding: 16,
		backgroundColor: "rgba(255,255,255,0.9)",
	},
	qualityItem: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
		gap: 8,
	},
	qualityText: {
		fontSize: 14,
		color: "#181111",
	},
	infoContainer: {
		margin: 16,
		padding: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
	},
	infoTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#181111",
		marginBottom: 12,
	},
	infoRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 8,
	},
	infoLabel: {
		fontSize: 14,
		color: "#886364",
	},
	infoValue: {
		fontSize: 14,
		fontWeight: "500",
		color: "#181111",
	},
	optionsContainer: {
		margin: 16,
	},
	optionsTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#181111",
		marginBottom: 12,
	},
	optionItem: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 12,
		paddingHorizontal: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 8,
		marginBottom: 8,
	},
	optionLeft: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
	},
	optionText: {
		fontSize: 14,
		color: "#181111",
		fontWeight: "500",
	},
	notesContainer: {
		margin: 16,
		padding: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
	},
	notesTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#181111",
		marginBottom: 8,
	},
	notesText: {
		fontSize: 14,
		color: "#886364",
		lineHeight: 20,
	},
	buttonContainer: {
		flexDirection: "row",
		paddingHorizontal: 16,
		paddingVertical: 24,
		gap: 12,
	},
	retakeButton: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		gap: 8,
	},
	retakeButtonText: {
		fontSize: 16,
		fontWeight: "600",
		color: "#ea2a33",
	},
	confirmButton: {
		flex: 2,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 16,
		backgroundColor: "#ea2a33",
		borderRadius: 12,
		gap: 8,
	},
	confirmButtonDisabled: {
		backgroundColor: "#886364",
	},
	confirmButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#ffffff",
	},
});
