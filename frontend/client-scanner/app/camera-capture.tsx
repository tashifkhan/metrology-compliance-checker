import React, { useState, useRef } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	Alert,
} from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function CameraCaptureScreen() {
	const [facing, setFacing] = useState<CameraType>("back");
	const [flash, setFlash] = useState(false);
	const [permission, requestPermission] = useCameraPermissions();
	const cameraRef = useRef<CameraView>(null);

	if (!permission) {
		// Camera permissions are still loading
		return <View />;
	}

	if (!permission.granted) {
		// Camera permissions are not granted yet
		return (
			<View style={styles.container}>
				<Text style={styles.message}>
					We need your permission to show the camera
				</Text>
				<TouchableOpacity
					style={styles.permissionButton}
					onPress={requestPermission}
				>
					<Text style={styles.permissionButtonText}>Grant Permission</Text>
				</TouchableOpacity>
			</View>
		);
	}

	function toggleCameraFacing() {
		setFacing((current) => (current === "back" ? "front" : "back"));
	}

	function toggleFlash() {
		setFlash((current) => !current);
	}

	const takePicture = async () => {
		if (cameraRef.current) {
			try {
				const photo = await cameraRef.current.takePictureAsync({
					quality: 0.8,
					base64: false,
				});

				if (photo) {
					// Navigate to scan confirmation with the photo URI
					router.push({
						pathname: "/scan-confirmation",
						params: { photoUri: photo.uri },
					});
				}
			} catch (error) {
				Alert.alert("Error", "Failed to capture image");
			}
		}
	};

	const openGallery = () => {
		// TODO: Implement image picker from gallery
		Alert.alert("Gallery", "Image picker from gallery would open here");
	};

	const showHelp = () => {
		router.push("/pre-capture-guide");
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="light" />

			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={24} color="#ffffff" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Capture Label Block</Text>
				<TouchableOpacity onPress={showHelp}>
					<Ionicons name="help-circle" size={24} color="#ffffff" />
				</TouchableOpacity>
			</View>

			{/* Camera View */}
			<View style={styles.cameraContainer}>
				<CameraView
					style={styles.camera}
					facing={facing}
					flash={flash ? "on" : "off"}
					ref={cameraRef}
				>
					{/* Camera Overlay */}
					<View style={styles.overlay}>
						{/* Focus Frame */}
						<View style={styles.focusFrame}>
							<View style={styles.frameCorner} />
							<View style={[styles.frameCorner, styles.frameCornerTopRight]} />
							<View
								style={[styles.frameCorner, styles.frameCornerBottomLeft]}
							/>
							<View
								style={[styles.frameCorner, styles.frameCornerBottomRight]}
							/>
						</View>

						{/* Instructions */}
						<View style={styles.instructionsOverlay}>
							<Text style={styles.instructionsText}>
								Position the label within the frame
							</Text>
						</View>
					</View>
				</CameraView>
			</View>

			{/* Camera Controls */}
			<View style={styles.controls}>
				<TouchableOpacity style={styles.controlButton} onPress={openGallery}>
					<Ionicons name="images" size={24} color="#ffffff" />
				</TouchableOpacity>

				<TouchableOpacity style={styles.captureButton} onPress={takePicture}>
					<View style={styles.captureButtonInner} />
				</TouchableOpacity>

				<TouchableOpacity style={styles.controlButton} onPress={toggleFlash}>
					<Ionicons
						name={flash ? "flash" : "flash-off"}
						size={24}
						color="#ffffff"
					/>
				</TouchableOpacity>
			</View>

			{/* Bottom Controls */}
			<View style={styles.bottomControls}>
				<TouchableOpacity
					style={styles.bottomButton}
					onPress={toggleCameraFacing}
				>
					<Ionicons name="camera-reverse" size={20} color="#ffffff" />
					<Text style={styles.bottomButtonText}>Flip</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.bottomButton}>
					<Ionicons name="grid" size={20} color="#ffffff" />
					<Text style={styles.bottomButtonText}>Grid</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.bottomButton}>
					<Ionicons name="timer" size={20} color="#ffffff" />
					<Text style={styles.bottomButtonText}>Timer</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000000",
	},
	message: {
		textAlign: "center",
		paddingBottom: 10,
		color: "#ffffff",
	},
	permissionButton: {
		backgroundColor: "#ea2a33",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 8,
		alignSelf: "center",
	},
	permissionButtonText: {
		color: "#ffffff",
		fontWeight: "bold",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 16,
		backgroundColor: "rgba(0,0,0,0.3)",
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		zIndex: 10,
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#ffffff",
	},
	cameraContainer: {
		flex: 1,
	},
	camera: {
		flex: 1,
	},
	overlay: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	focusFrame: {
		width: 280,
		height: 200,
		position: "relative",
	},
	frameCorner: {
		position: "absolute",
		width: 30,
		height: 30,
		borderTopWidth: 3,
		borderLeftWidth: 3,
		borderColor: "#ea2a33",
		top: 0,
		left: 0,
	},
	frameCornerTopRight: {
		top: 0,
		right: 0,
		left: "auto",
		borderTopWidth: 3,
		borderRightWidth: 3,
		borderLeftWidth: 0,
	},
	frameCornerBottomLeft: {
		bottom: 0,
		left: 0,
		top: "auto",
		borderBottomWidth: 3,
		borderLeftWidth: 3,
		borderTopWidth: 0,
	},
	frameCornerBottomRight: {
		bottom: 0,
		right: 0,
		top: "auto",
		left: "auto",
		borderBottomWidth: 3,
		borderRightWidth: 3,
		borderTopWidth: 0,
		borderLeftWidth: 0,
	},
	instructionsOverlay: {
		position: "absolute",
		bottom: -60,
		backgroundColor: "rgba(0,0,0,0.7)",
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 20,
	},
	instructionsText: {
		color: "#ffffff",
		fontSize: 14,
		textAlign: "center",
	},
	controls: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 40,
		paddingVertical: 30,
		backgroundColor: "rgba(0,0,0,0.8)",
	},
	controlButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: "rgba(255,255,255,0.2)",
		justifyContent: "center",
		alignItems: "center",
	},
	captureButton: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: "#ffffff",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 6,
		borderColor: "rgba(255,255,255,0.3)",
	},
	captureButtonInner: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: "#ea2a33",
	},
	bottomControls: {
		flexDirection: "row",
		justifyContent: "space-around",
		paddingHorizontal: 40,
		paddingVertical: 20,
		backgroundColor: "rgba(0,0,0,0.8)",
	},
	bottomButton: {
		alignItems: "center",
		gap: 4,
	},
	bottomButtonText: {
		color: "#ffffff",
		fontSize: 12,
		fontWeight: "500",
	},
});
