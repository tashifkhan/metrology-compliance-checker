import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

interface HelpItemProps {
	title: string;
	description: string;
	icon: string;
}

const HelpItem: React.FC<HelpItemProps> = ({ title, description, icon }) => (
	<TouchableOpacity style={styles.helpItem}>
		<Ionicons name={icon as any} size={24} color="#ea2a33" />
		<View style={styles.helpContent}>
			<Text style={styles.helpTitle}>{title}</Text>
			<Text style={styles.helpDescription}>{description}</Text>
		</View>
		<Ionicons name="chevron-forward" size={20} color="#886364" />
	</TouchableOpacity>
);

export default function HelpScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="dark" />

			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={24} color="#181111" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Help & Support</Text>
				<View style={styles.headerSpacer} />
			</View>

			<ScrollView style={styles.content}>
				{/* Getting Started */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Getting Started</Text>

					<HelpItem
						icon="play-circle"
						title="Quick Start Guide"
						description="Learn the basics of using the Compliance Checker app"
					/>

					<HelpItem
						icon="camera"
						title="How to Scan Labels"
						description="Step-by-step guide for capturing compliance information"
					/>

					<HelpItem
						icon="briefcase"
						title="Managing Cases"
						description="Create, track, and resolve compliance cases"
					/>
				</View>

				{/* Features */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Features</Text>

					<HelpItem
						icon="barcode"
						title="Barcode Scanning"
						description="How to scan barcodes and QR codes"
					/>

					<HelpItem
						icon="map"
						title="Location Mapping"
						description="Using the map for inspection routes"
					/>

					<HelpItem
						icon="analytics"
						title="Reports & Analytics"
						description="Generate and export compliance reports"
					/>
				</View>

				{/* Troubleshooting */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Troubleshooting</Text>

					<HelpItem
						icon="warning"
						title="Common Issues"
						description="Solutions to frequently encountered problems"
					/>

					<HelpItem
						icon="wifi"
						title="Connection Problems"
						description="Resolve sync and connectivity issues"
					/>

					<HelpItem
						icon="refresh"
						title="App Updates"
						description="How to update and reset the app"
					/>
				</View>

				{/* Contact */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Contact Support</Text>

					<TouchableOpacity style={styles.contactItem}>
						<Ionicons name="call" size={24} color="#ea2a33" />
						<View style={styles.contactContent}>
							<Text style={styles.contactTitle}>Phone Support</Text>
							<Text style={styles.contactDetails}>
								1-800-WEIGHTS (1-800-934-4487)
							</Text>
							<Text style={styles.contactHours}>Mon-Fri 8AM-5PM</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity style={styles.contactItem}>
						<Ionicons name="mail" size={24} color="#ea2a33" />
						<View style={styles.contactContent}>
							<Text style={styles.contactTitle}>Email Support</Text>
							<Text style={styles.contactDetails}>support@metrology.gov</Text>
							<Text style={styles.contactHours}>Response within 24 hours</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity style={styles.contactItem}>
						<Ionicons name="chatbubble" size={24} color="#ea2a33" />
						<View style={styles.contactContent}>
							<Text style={styles.contactTitle}>Live Chat</Text>
							<Text style={styles.contactDetails}>
								Available during business hours
							</Text>
							<Text style={styles.contactHours}>Mon-Fri 9AM-4PM</Text>
						</View>
					</TouchableOpacity>
				</View>

				{/* App Info */}
				<View style={styles.appInfo}>
					<Text style={styles.appInfoTitle}>App Information</Text>
					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Version:</Text>
						<Text style={styles.infoValue}>1.0.0</Text>
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Build:</Text>
						<Text style={styles.infoValue}>2024.01.15</Text>
					</View>
					<View style={styles.infoRow}>
						<Text style={styles.infoLabel}>Platform:</Text>
						<Text style={styles.infoValue}>iOS 17.0</Text>
					</View>
				</View>
			</ScrollView>
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
	},
	section: {
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#181111",
		marginBottom: 16,
		marginTop: 8,
	},
	helpItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 16,
		paddingHorizontal: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		marginBottom: 8,
		gap: 12,
	},
	helpContent: {
		flex: 1,
	},
	helpTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#181111",
		marginBottom: 4,
	},
	helpDescription: {
		fontSize: 14,
		color: "#886364",
	},
	contactItem: {
		flexDirection: "row",
		alignItems: "flex-start",
		paddingVertical: 16,
		paddingHorizontal: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		marginBottom: 8,
		gap: 12,
	},
	contactContent: {
		flex: 1,
	},
	contactTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#181111",
		marginBottom: 4,
	},
	contactDetails: {
		fontSize: 14,
		color: "#ea2a33",
		fontWeight: "500",
		marginBottom: 2,
	},
	contactHours: {
		fontSize: 12,
		color: "#886364",
	},
	appInfo: {
		margin: 16,
		padding: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
	},
	appInfoTitle: {
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
});
