import React, { useState } from "react";
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

interface GuideStepProps {
	icon: string;
	title: string;
	description: string;
	stepNumber: number;
}

const GuideStep: React.FC<GuideStepProps> = ({
	icon,
	title,
	description,
	stepNumber,
}) => (
	<View style={styles.guideStep}>
		<View style={styles.stepHeader}>
			<View style={styles.stepNumber}>
				<Text style={styles.stepNumberText}>{stepNumber}</Text>
			</View>
			<View style={styles.stepContent}>
				<View style={styles.stepTitleRow}>
					<Ionicons name={icon as any} size={24} color="#ea2a33" />
					<Text style={styles.stepTitle}>{title}</Text>
				</View>
				<Text style={styles.stepDescription}>{description}</Text>
			</View>
		</View>
	</View>
);

export default function PreCaptureGuideScreen() {
	const handleStartCapture = () => {
		router.push("/camera-capture");
	};

	const handleSkipGuide = () => {
		router.push("/camera-capture");
	};

	return (
		<View style={styles.container}>
			<StatusBar style="dark" />

			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={24} color="#181111" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Capture Guide</Text>
				<TouchableOpacity onPress={handleSkipGuide}>
					<Text style={styles.skipText}>Skip</Text>
				</TouchableOpacity>
			</View>

			<ScrollView style={styles.content}>
				{/* Introduction */}
				<View style={styles.introContainer}>
					<Ionicons name="camera" size={80} color="#ea2a33" />
					<Text style={styles.introTitle}>How to Capture Labels</Text>
					<Text style={styles.introSubtitle}>
						Follow these steps to ensure accurate label scanning for compliance
						checking
					</Text>
				</View>

				{/* Guide Steps */}
				<View style={styles.stepsContainer}>
					<GuideStep
						stepNumber={1}
						icon="sunny"
						title="Ensure Good Lighting"
						description="Make sure the label is well-lit and clearly visible. Avoid shadows and glare that might obscure text or numbers."
					/>

					<GuideStep
						stepNumber={2}
						icon="crop"
						title="Frame the Label Properly"
						description="Position the device so the entire label fits within the camera frame. Keep the device parallel to the label surface."
					/>

					<GuideStep
						stepNumber={3}
						icon="eye"
						title="Focus on Text Areas"
						description="Ensure all text, especially weight, measure, and certification information, is clearly visible and in focus."
					/>

					<GuideStep
						stepNumber={4}
						icon="hand-left"
						title="Keep Steady"
						description="Hold the device steady to avoid motion blur. Wait for the camera to focus before capturing."
					/>

					<GuideStep
						stepNumber={5}
						icon="checkmark-circle"
						title="Verify Quality"
						description="Review the captured image to ensure all important information is readable before proceeding."
					/>
				</View>

				{/* Tips Section */}
				<View style={styles.tipsContainer}>
					<Text style={styles.tipsTitle}>Pro Tips</Text>
					<View style={styles.tipItem}>
						<Ionicons name="bulb" size={16} color="#f39c12" />
						<Text style={styles.tipText}>
							Clean the camera lens for clearer images
						</Text>
					</View>
					<View style={styles.tipItem}>
						<Ionicons name="bulb" size={16} color="#f39c12" />
						<Text style={styles.tipText}>
							Capture multiple angles if needed
						</Text>
					</View>
					<View style={styles.tipItem}>
						<Ionicons name="bulb" size={16} color="#f39c12" />
						<Text style={styles.tipText}>
							Use the flash in low-light conditions
						</Text>
					</View>
				</View>
			</ScrollView>

			{/* Action Buttons */}
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.startButton}
					onPress={handleStartCapture}
				>
					<Ionicons name="camera" size={20} color="#ffffff" />
					<Text style={styles.startButtonText}>Start Capturing</Text>
				</TouchableOpacity>
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
	},
	skipText: {
		fontSize: 16,
		color: "#ea2a33",
		fontWeight: "500",
	},
	content: {
		flex: 1,
	},
	introContainer: {
		alignItems: "center",
		paddingVertical: 32,
		paddingHorizontal: 16,
	},
	introTitle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#181111",
		marginTop: 16,
		marginBottom: 8,
	},
	introSubtitle: {
		fontSize: 16,
		color: "#886364",
		textAlign: "center",
		lineHeight: 22,
	},
	stepsContainer: {
		paddingHorizontal: 16,
		paddingVertical: 16,
	},
	guideStep: {
		marginBottom: 24,
	},
	stepHeader: {
		flexDirection: "row",
		alignItems: "flex-start",
	},
	stepNumber: {
		width: 32,
		height: 32,
		borderRadius: 16,
		backgroundColor: "#ea2a33",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 16,
	},
	stepNumberText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#ffffff",
	},
	stepContent: {
		flex: 1,
	},
	stepTitleRow: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
		gap: 8,
	},
	stepTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#181111",
	},
	stepDescription: {
		fontSize: 14,
		color: "#886364",
		lineHeight: 20,
	},
	tipsContainer: {
		margin: 16,
		padding: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
	},
	tipsTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#181111",
		marginBottom: 12,
	},
	tipItem: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
		gap: 8,
	},
	tipText: {
		fontSize: 14,
		color: "#181111",
		flex: 1,
	},
	buttonContainer: {
		paddingHorizontal: 16,
		paddingVertical: 24,
	},
	startButton: {
		backgroundColor: "#ea2a33",
		borderRadius: 12,
		paddingVertical: 16,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
	},
	startButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#ffffff",
	},
});
