import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function DeviceRegistrationScreen() {
	const [deviceName, setDeviceName] = useState("");
	const [serialNumber, setSerialNumber] = useState("");
	const [inspectorId, setInspectorId] = useState("");
	const [region, setRegion] = useState("");
	const [isRegistering, setIsRegistering] = useState(false);

	const handleRegister = async () => {
		if (!deviceName || !serialNumber || !inspectorId || !region) {
			Alert.alert("Error", "Please fill in all required fields");
			return;
		}

		setIsRegistering(true);

		// Simulate registration process
		setTimeout(() => {
			setIsRegistering(false);
			Alert.alert(
				"Registration Successful",
				"Your device has been registered successfully!",
				[
					{
						text: "Continue",
						onPress: () => router.replace("/(tabs)"),
					},
				]
			);
		}, 2000);
	};

	const handleScanQR = () => {
		Alert.alert("QR Scanner", "QR code scanner would open here");
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="dark" />

			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={24} color="#181111" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Device Registration</Text>
				<View style={styles.headerSpacer} />
			</View>

			<ScrollView style={styles.content}>
				{/* Instructions */}
				<View style={styles.instructionsContainer}>
					<Ionicons name="phone-portrait" size={60} color="#ea2a33" />
					<Text style={styles.instructionsTitle}>Register Your Device</Text>
					<Text style={styles.instructionsText}>
						Please register this device to enable compliance checking features
						and sync with the central system.
					</Text>
				</View>

				{/* Registration Form */}
				<View style={styles.formContainer}>
					{/* Device Name */}
					<View style={styles.inputGroup}>
						<Text style={styles.inputLabel}>Device Name *</Text>
						<TextInput
							style={styles.input}
							placeholder="Enter device name"
							placeholderTextColor="#886364"
							value={deviceName}
							onChangeText={setDeviceName}
						/>
					</View>

					{/* Serial Number */}
					<View style={styles.inputGroup}>
						<Text style={styles.inputLabel}>Device Serial Number *</Text>
						<View style={styles.inputWithButton}>
							<TextInput
								style={styles.inputWithButtonText}
								placeholder="Enter or scan serial number"
								placeholderTextColor="#886364"
								value={serialNumber}
								onChangeText={setSerialNumber}
							/>
							<TouchableOpacity
								style={styles.scanButton}
								onPress={handleScanQR}
							>
								<Ionicons name="qr-code" size={20} color="#ea2a33" />
							</TouchableOpacity>
						</View>
					</View>

					{/* Inspector ID */}
					<View style={styles.inputGroup}>
						<Text style={styles.inputLabel}>Inspector ID *</Text>
						<TextInput
							style={styles.input}
							placeholder="Enter your inspector ID"
							placeholderTextColor="#886364"
							value={inspectorId}
							onChangeText={setInspectorId}
						/>
					</View>

					{/* Region */}
					<View style={styles.inputGroup}>
						<Text style={styles.inputLabel}>Assigned Region *</Text>
						<TextInput
							style={styles.input}
							placeholder="Enter your assigned region"
							placeholderTextColor="#886364"
							value={region}
							onChangeText={setRegion}
						/>
					</View>

					{/* Device Info */}
					<View style={styles.deviceInfoContainer}>
						<Text style={styles.deviceInfoTitle}>Device Information</Text>
						<View style={styles.deviceInfoRow}>
							<Text style={styles.deviceInfoLabel}>OS:</Text>
							<Text style={styles.deviceInfoValue}>iOS 17.0</Text>
						</View>
						<View style={styles.deviceInfoRow}>
							<Text style={styles.deviceInfoLabel}>Model:</Text>
							<Text style={styles.deviceInfoValue}>iPhone 15 Pro</Text>
						</View>
						<View style={styles.deviceInfoRow}>
							<Text style={styles.deviceInfoLabel}>App Version:</Text>
							<Text style={styles.deviceInfoValue}>1.0.0</Text>
						</View>
					</View>
				</View>
			</ScrollView>

			{/* Register Button */}
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={[
						styles.registerButton,
						isRegistering && styles.registerButtonDisabled,
					]}
					onPress={handleRegister}
					disabled={isRegistering}
				>
					{isRegistering ? (
						<Text style={styles.registerButtonText}>Registering...</Text>
					) : (
						<Text style={styles.registerButtonText}>Register Device</Text>
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
	},
	headerSpacer: {
		width: 24,
	},
	content: {
		flex: 1,
		paddingHorizontal: 16,
	},
	instructionsContainer: {
		alignItems: "center",
		paddingVertical: 32,
	},
	instructionsTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#181111",
		marginTop: 16,
		marginBottom: 8,
	},
	instructionsText: {
		fontSize: 14,
		color: "#886364",
		textAlign: "center",
		lineHeight: 20,
		maxWidth: 280,
	},
	formContainer: {
		paddingVertical: 16,
	},
	inputGroup: {
		marginBottom: 20,
	},
	inputLabel: {
		fontSize: 14,
		fontWeight: "600",
		color: "#181111",
		marginBottom: 8,
	},
	input: {
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		paddingHorizontal: 16,
		paddingVertical: 16,
		fontSize: 16,
		color: "#181111",
		height: 56,
	},
	inputWithButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		height: 56,
	},
	inputWithButtonText: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 16,
		fontSize: 16,
		color: "#181111",
	},
	scanButton: {
		paddingHorizontal: 16,
		paddingVertical: 16,
	},
	deviceInfoContainer: {
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		padding: 16,
		marginTop: 16,
	},
	deviceInfoTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#181111",
		marginBottom: 12,
	},
	deviceInfoRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 8,
	},
	deviceInfoLabel: {
		fontSize: 14,
		color: "#886364",
	},
	deviceInfoValue: {
		fontSize: 14,
		fontWeight: "500",
		color: "#181111",
	},
	buttonContainer: {
		paddingHorizontal: 16,
		paddingVertical: 24,
	},
	registerButton: {
		backgroundColor: "#ea2a33",
		borderRadius: 12,
		paddingVertical: 16,
		alignItems: "center",
	},
	registerButtonDisabled: {
		backgroundColor: "#886364",
	},
	registerButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#ffffff",
	},
});
