import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

interface MetricCardProps {
	title: string;
	value: string;
	color?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
	title,
	value,
	color = "#181111",
}) => (
	<View style={styles.metricCard}>
		<Text style={styles.metricTitle}>{title}</Text>
		<Text style={[styles.metricValue, { color }]}>{value}</Text>
	</View>
);

interface QuickActionProps {
	title: string;
	icon: string;
	onPress: () => void;
}

const QuickAction: React.FC<QuickActionProps> = ({ title, icon, onPress }) => (
	<TouchableOpacity style={styles.quickAction} onPress={onPress}>
		<Ionicons name={icon as any} size={32} color="#ea2a33" />
		<Text style={styles.quickActionText}>{title}</Text>
	</TouchableOpacity>
);

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<StatusBar style="dark" />

			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Dashboard</Text>
				<TouchableOpacity style={styles.settingsButton}>
					<Ionicons name="settings-outline" size={24} color="#181111" />
				</TouchableOpacity>
			</View>

			<ScrollView style={styles.content}>
				{/* Metrics Cards */}
				<View style={styles.metricsContainer}>
					<MetricCard title="Scans today" value="12" />
					<MetricCard title="Pending uploads" value="3" color="#ea2a33" />
					<MetricCard title="Open cases assigned" value="2" color="#f39c12" />
				</View>

				{/* App Logo/Banner */}
				<View style={styles.bannerContainer}>
					<View style={styles.bannerContent}>
						<Text style={styles.bannerTitle}>Compliance Check</Text>
						<Text style={styles.bannerSubtitle}>
							Checking for compliance with Legal Metrology requirements
						</Text>
					</View>
					<View style={styles.logoPlaceholder}>
						<Ionicons name="shield-checkmark" size={80} color="#ea2a33" />
					</View>
				</View>

				{/* Quick Actions */}
				<View style={styles.quickActionsContainer}>
					<Text style={styles.sectionTitle}>Quick Actions</Text>
					<View style={styles.quickActionsGrid}>
						<QuickAction
							title="Start Scan"
							icon="barcode-outline"
							onPress={() => router.push("/(tabs)/scan")}
						/>
						<QuickAction
							title="View Cases"
							icon="briefcase-outline"
							onPress={() => router.push("/(tabs)/cases")}
						/>
						<QuickAction
							title="Upload Data"
							icon="cloud-upload-outline"
							onPress={() => console.log("Upload pressed")}
						/>
						<QuickAction
							title="Reports"
							icon="document-text-outline"
							onPress={() => console.log("Reports pressed")}
						/>
					</View>
				</View>

				{/* Recent Activity */}
				<View style={styles.recentActivity}>
					<Text style={styles.sectionTitle}>Recent Activity</Text>
					<View style={styles.activityItem}>
						<View style={styles.activityIcon}>
							<Ionicons name="checkmark-circle" size={20} color="#27ae60" />
						</View>
						<View style={styles.activityContent}>
							<Text style={styles.activityText}>
								Scale inspection completed
							</Text>
							<Text style={styles.activityTime}>2 hours ago</Text>
						</View>
					</View>
					<View style={styles.activityItem}>
						<View style={styles.activityIcon}>
							<Ionicons name="camera" size={20} color="#ea2a33" />
						</View>
						<View style={styles.activityContent}>
							<Text style={styles.activityText}>Label scan captured</Text>
							<Text style={styles.activityTime}>4 hours ago</Text>
						</View>
					</View>
					<View style={styles.activityItem}>
						<View style={styles.activityIcon}>
							<Ionicons name="document" size={20} color="#f39c12" />
						</View>
						<View style={styles.activityContent}>
							<Text style={styles.activityText}>Case report generated</Text>
							<Text style={styles.activityTime}>1 day ago</Text>
						</View>
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
	settingsButton: {
		width: 48,
		height: 48,
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		flex: 1,
	},
	metricsContainer: {
		flexDirection: "row",
		paddingHorizontal: 16,
		paddingVertical: 16,
		gap: 12,
	},
	metricCard: {
		flex: 1,
		backgroundColor: "#f4f0f0",
		padding: 24,
		borderRadius: 12,
		minHeight: 100,
		justifyContent: "center",
	},
	metricTitle: {
		fontSize: 14,
		fontWeight: "500",
		color: "#181111",
		marginBottom: 8,
	},
	metricValue: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#181111",
	},
	bannerContainer: {
		margin: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		padding: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	bannerContent: {
		flex: 1,
		marginRight: 16,
	},
	bannerTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#181111",
		marginBottom: 8,
	},
	bannerSubtitle: {
		fontSize: 14,
		color: "#886364",
		lineHeight: 20,
	},
	logoPlaceholder: {
		alignItems: "center",
		justifyContent: "center",
	},
	quickActionsContainer: {
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#181111",
		marginBottom: 16,
	},
	quickActionsGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 12,
	},
	quickAction: {
		width: "47%",
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
		aspectRatio: 1.2,
	},
	quickActionText: {
		marginTop: 8,
		fontSize: 14,
		fontWeight: "500",
		color: "#181111",
		textAlign: "center",
	},
	recentActivity: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		paddingBottom: 32,
	},
	activityItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#f4f0f0",
	},
	activityIcon: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "#f4f0f0",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 12,
	},
	activityContent: {
		flex: 1,
	},
	activityText: {
		fontSize: 14,
		fontWeight: "500",
		color: "#181111",
		marginBottom: 2,
	},
	activityTime: {
		fontSize: 12,
		color: "#886364",
	},
});
