import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

interface ComplianceResult {
	category: string;
	status: "compliant" | "violation" | "warning";
	details: string;
	regulation?: string;
}

const mockResults: ComplianceResult[] = [
	{
		category: "Weight Declaration",
		status: "compliant",
		details: "Net weight clearly displayed: 500g",
		regulation: "WM Act Sec. 12",
	},
	{
		category: "Unit Pricing",
		status: "violation",
		details: "Price per unit not displayed",
		regulation: "WM Act Sec. 18",
	},
	{
		category: "Certification Mark",
		status: "warning",
		details: "Certification mark partially obscured",
		regulation: "WM Act Sec. 15",
	},
	{
		category: "Date Code",
		status: "compliant",
		details: "Manufacturing date clearly visible",
		regulation: "Food Safety Act",
	},
];

export default function ScanResultsScreen() {
	const [selectedTab, setSelectedTab] = useState<
		"summary" | "details" | "actions"
	>("summary");

	const getStatusColor = (status: string) => {
		switch (status) {
			case "compliant":
				return "#27ae60";
			case "violation":
				return "#ea2a33";
			case "warning":
				return "#f39c12";
			default:
				return "#886364";
		}
	};

	const getStatusIcon = (status: string) => {
		switch (status) {
			case "compliant":
				return "checkmark-circle";
			case "violation":
				return "close-circle";
			case "warning":
				return "warning";
			default:
				return "information-circle";
		}
	};

	const handleCreateCase = () => {
		Alert.alert(
			"Create Case",
			"This will create a new compliance case. Continue?",
			[
				{ text: "Cancel", style: "cancel" },
				{ text: "Create", onPress: () => router.push("/case-creation") },
			]
		);
	};

	const handleSaveReport = () => {
		Alert.alert("Success", "Scan report saved successfully");
	};

	const handleShareReport = () => {
		Alert.alert("Share", "Report sharing options would be available here");
	};

	const renderSummaryTab = () => (
		<View style={styles.tabContent}>
			{/* Overall Score */}
			<View style={styles.scoreContainer}>
				<View style={styles.scoreCircle}>
					<Text style={styles.scoreText}>75</Text>
					<Text style={styles.scoreLabel}>Score</Text>
				</View>
				<View style={styles.scoreDetails}>
					<Text style={styles.scoreTitle}>Compliance Score</Text>
					<Text style={styles.scoreSubtitle}>Requires attention</Text>
					<View style={styles.scoreBreakdown}>
						<View style={styles.scoreItem}>
							<View style={[styles.scoreDot, { backgroundColor: "#27ae60" }]} />
							<Text style={styles.scoreItemText}>2 Compliant</Text>
						</View>
						<View style={styles.scoreItem}>
							<View style={[styles.scoreDot, { backgroundColor: "#ea2a33" }]} />
							<Text style={styles.scoreItemText}>1 Violation</Text>
						</View>
						<View style={styles.scoreItem}>
							<View style={[styles.scoreDot, { backgroundColor: "#f39c12" }]} />
							<Text style={styles.scoreItemText}>1 Warning</Text>
						</View>
					</View>
				</View>
			</View>

			{/* Quick Results */}
			<View style={styles.quickResults}>
				{mockResults.map((result, index) => (
					<View key={index} style={styles.resultItem}>
						<Ionicons
							name={getStatusIcon(result.status)}
							size={24}
							color={getStatusColor(result.status)}
						/>
						<View style={styles.resultContent}>
							<Text style={styles.resultCategory}>{result.category}</Text>
							<Text style={styles.resultDetails}>{result.details}</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	);

	const renderDetailsTab = () => (
		<View style={styles.tabContent}>
			<Text style={styles.sectionTitle}>Extracted Information</Text>

			<View style={styles.extractedInfo}>
				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Product Name:</Text>
					<Text style={styles.infoValue}>Premium Coffee Beans</Text>
				</View>
				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Net Weight:</Text>
					<Text style={styles.infoValue}>500g</Text>
				</View>
				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Manufacturer:</Text>
					<Text style={styles.infoValue}>ABC Food Company</Text>
				</View>
				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Price:</Text>
					<Text style={styles.infoValue}>$12.99</Text>
				</View>
				<View style={styles.infoRow}>
					<Text style={styles.infoLabel}>Price per 100g:</Text>
					<Text style={[styles.infoValue, { color: "#ea2a33" }]}>
						Not displayed
					</Text>
				</View>
			</View>

			<Text style={styles.sectionTitle}>Compliance Checklist</Text>

			<View style={styles.checklist}>
				{mockResults.map((result, index) => (
					<View key={index} style={styles.checklistItem}>
						<Ionicons
							name={getStatusIcon(result.status)}
							size={20}
							color={getStatusColor(result.status)}
						/>
						<View style={styles.checklistContent}>
							<Text style={styles.checklistCategory}>{result.category}</Text>
							<Text style={styles.checklistDetails}>{result.details}</Text>
							{result.regulation && (
								<Text style={styles.checklistRegulation}>
									Ref: {result.regulation}
								</Text>
							)}
						</View>
					</View>
				))}
			</View>
		</View>
	);

	const renderActionsTab = () => (
		<View style={styles.tabContent}>
			<Text style={styles.sectionTitle}>Recommended Actions</Text>

			<TouchableOpacity style={styles.actionButton} onPress={handleCreateCase}>
				<Ionicons name="briefcase" size={20} color="#ea2a33" />
				<View style={styles.actionContent}>
					<Text style={styles.actionTitle}>Create Compliance Case</Text>
					<Text style={styles.actionDescription}>
						Generate a new case for the detected violation
					</Text>
				</View>
				<Ionicons name="chevron-forward" size={20} color="#886364" />
			</TouchableOpacity>

			<TouchableOpacity style={styles.actionButton}>
				<Ionicons name="warning" size={20} color="#f39c12" />
				<View style={styles.actionContent}>
					<Text style={styles.actionTitle}>Issue Warning Notice</Text>
					<Text style={styles.actionDescription}>
						Send a formal warning to the business owner
					</Text>
				</View>
				<Ionicons name="chevron-forward" size={20} color="#886364" />
			</TouchableOpacity>

			<TouchableOpacity style={styles.actionButton}>
				<Ionicons name="calendar" size={20} color="#27ae60" />
				<View style={styles.actionContent}>
					<Text style={styles.actionTitle}>Schedule Follow-up</Text>
					<Text style={styles.actionDescription}>
						Plan a return visit for re-inspection
					</Text>
				</View>
				<Ionicons name="chevron-forward" size={20} color="#886364" />
			</TouchableOpacity>

			<TouchableOpacity style={styles.actionButton}>
				<Ionicons name="document-text" size={20} color="#181111" />
				<View style={styles.actionContent}>
					<Text style={styles.actionTitle}>Generate Report</Text>
					<Text style={styles.actionDescription}>
						Create a detailed inspection report
					</Text>
				</View>
				<Ionicons name="chevron-forward" size={20} color="#886364" />
			</TouchableOpacity>
		</View>
	);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="dark" />

			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={24} color="#181111" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Scan Results</Text>
				<TouchableOpacity onPress={handleShareReport}>
					<Ionicons name="share-outline" size={24} color="#181111" />
				</TouchableOpacity>
			</View>

			{/* Tab Navigation */}
			<View style={styles.tabContainer}>
				<TouchableOpacity
					style={[styles.tab, selectedTab === "summary" && styles.activeTab]}
					onPress={() => setSelectedTab("summary")}
				>
					<Text
						style={[
							styles.tabText,
							selectedTab === "summary" && styles.activeTabText,
						]}
					>
						Summary
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.tab, selectedTab === "details" && styles.activeTab]}
					onPress={() => setSelectedTab("details")}
				>
					<Text
						style={[
							styles.tabText,
							selectedTab === "details" && styles.activeTabText,
						]}
					>
						Details
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.tab, selectedTab === "actions" && styles.activeTab]}
					onPress={() => setSelectedTab("actions")}
				>
					<Text
						style={[
							styles.tabText,
							selectedTab === "actions" && styles.activeTabText,
						]}
					>
						Actions
					</Text>
				</TouchableOpacity>
			</View>

			{/* Tab Content */}
			<ScrollView style={styles.content}>
				{selectedTab === "summary" && renderSummaryTab()}
				{selectedTab === "details" && renderDetailsTab()}
				{selectedTab === "actions" && renderActionsTab()}
			</ScrollView>

			{/* Bottom Actions */}
			<View style={styles.bottomActions}>
				<TouchableOpacity style={styles.saveButton} onPress={handleSaveReport}>
					<Ionicons name="save" size={20} color="#181111" />
					<Text style={styles.saveButtonText}>Save</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.doneButton}
					onPress={() => router.push("/(tabs)")}
				>
					<Text style={styles.doneButtonText}>Done</Text>
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
	tabContainer: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#f4f0f0",
	},
	tab: {
		flex: 1,
		paddingVertical: 16,
		alignItems: "center",
	},
	activeTab: {
		borderBottomWidth: 2,
		borderBottomColor: "#ea2a33",
	},
	tabText: {
		fontSize: 14,
		fontWeight: "500",
		color: "#886364",
	},
	activeTabText: {
		color: "#ea2a33",
		fontWeight: "600",
	},
	content: {
		flex: 1,
	},
	tabContent: {
		padding: 16,
	},
	scoreContainer: {
		flexDirection: "row",
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		padding: 20,
		marginBottom: 24,
		alignItems: "center",
	},
	scoreCircle: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: "#ea2a33",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 20,
	},
	scoreText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#ffffff",
	},
	scoreLabel: {
		fontSize: 12,
		color: "#ffffff",
	},
	scoreDetails: {
		flex: 1,
	},
	scoreTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#181111",
		marginBottom: 4,
	},
	scoreSubtitle: {
		fontSize: 14,
		color: "#886364",
		marginBottom: 12,
	},
	scoreBreakdown: {
		gap: 4,
	},
	scoreItem: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	scoreDot: {
		width: 8,
		height: 8,
		borderRadius: 4,
	},
	scoreItemText: {
		fontSize: 12,
		color: "#181111",
	},
	quickResults: {
		gap: 12,
	},
	resultItem: {
		flexDirection: "row",
		alignItems: "flex-start",
		padding: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 8,
		gap: 12,
	},
	resultContent: {
		flex: 1,
	},
	resultCategory: {
		fontSize: 16,
		fontWeight: "600",
		color: "#181111",
		marginBottom: 4,
	},
	resultDetails: {
		fontSize: 14,
		color: "#886364",
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#181111",
		marginBottom: 16,
	},
	extractedInfo: {
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		padding: 16,
		marginBottom: 24,
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
	checklist: {
		gap: 12,
	},
	checklistItem: {
		flexDirection: "row",
		alignItems: "flex-start",
		gap: 12,
	},
	checklistContent: {
		flex: 1,
	},
	checklistCategory: {
		fontSize: 16,
		fontWeight: "600",
		color: "#181111",
		marginBottom: 2,
	},
	checklistDetails: {
		fontSize: 14,
		color: "#886364",
		marginBottom: 2,
	},
	checklistRegulation: {
		fontSize: 12,
		color: "#886364",
		fontStyle: "italic",
	},
	actionButton: {
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		marginBottom: 12,
		gap: 12,
	},
	actionContent: {
		flex: 1,
	},
	actionTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#181111",
		marginBottom: 4,
	},
	actionDescription: {
		fontSize: 14,
		color: "#886364",
	},
	bottomActions: {
		flexDirection: "row",
		paddingHorizontal: 16,
		paddingVertical: 24,
		gap: 12,
	},
	saveButton: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		gap: 8,
	},
	saveButtonText: {
		fontSize: 16,
		fontWeight: "600",
		color: "#181111",
	},
	doneButton: {
		flex: 2,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 16,
		backgroundColor: "#ea2a33",
		borderRadius: 12,
	},
	doneButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#ffffff",
	},
});
