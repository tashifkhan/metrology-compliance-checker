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

interface CaseItem {
	id: string;
	title: string;
	status: "open" | "pending" | "closed";
	priority: "high" | "medium" | "low";
	date: string;
}

const mockCases: CaseItem[] = [
	{
		id: "1",
		title: "Weights & Measures Violation - Scale #1234",
		status: "open",
		priority: "high",
		date: "2024-01-15",
	},
	{
		id: "2",
		title: "Fuel Dispenser Inspection Required",
		status: "pending",
		priority: "medium",
		date: "2024-01-14",
	},
	{
		id: "3",
		title: "Scanner Calibration Check",
		status: "open",
		priority: "low",
		date: "2024-01-13",
	},
];

export default function CasesScreen() {
	const getStatusColor = (status: string) => {
		switch (status) {
			case "open":
				return "#ea2a33";
			case "pending":
				return "#f39c12";
			case "closed":
				return "#27ae60";
			default:
				return "#886364";
		}
	};

	const getPriorityIcon = (priority: string) => {
		switch (priority) {
			case "high":
				return "warning";
			case "medium":
				return "information-circle";
			case "low":
				return "checkmark-circle";
			default:
				return "information-circle";
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar style="dark" />

			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Cases</Text>
				<TouchableOpacity style={styles.settingsButton}>
					<Ionicons name="settings-outline" size={24} color="#181111" />
				</TouchableOpacity>
			</View>

			{/* Filter Tabs */}
			<View style={styles.filterContainer}>
				<TouchableOpacity style={[styles.filterTab, styles.activeTab]}>
					<Text style={[styles.filterText, styles.activeFilterText]}>All</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.filterTab}>
					<Text style={styles.filterText}>Open</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.filterTab}>
					<Text style={styles.filterText}>Pending</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.filterTab}>
					<Text style={styles.filterText}>Closed</Text>
				</TouchableOpacity>
			</View>

			{/* Cases List */}
			<ScrollView style={styles.casesList}>
				{mockCases.map((caseItem) => (
					<TouchableOpacity key={caseItem.id} style={styles.caseCard}>
						<View style={styles.caseHeader}>
							<View style={styles.caseInfo}>
								<Text style={styles.caseTitle}>{caseItem.title}</Text>
								<Text style={styles.caseDate}>{caseItem.date}</Text>
							</View>
							<Ionicons
								name={getPriorityIcon(caseItem.priority)}
								size={20}
								color={getStatusColor(caseItem.status)}
							/>
						</View>
						<View style={styles.caseFooter}>
							<View
								style={[
									styles.statusBadge,
									{ backgroundColor: getStatusColor(caseItem.status) },
								]}
							>
								<Text style={styles.statusText}>
									{caseItem.status.toUpperCase()}
								</Text>
							</View>
							<Text style={styles.priorityText}>
								{caseItem.priority} priority
							</Text>
						</View>
					</TouchableOpacity>
				))}
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
	filterContainer: {
		flexDirection: "row",
		paddingHorizontal: 16,
		paddingVertical: 8,
		gap: 8,
	},
	filterTab: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 20,
		backgroundColor: "#f4f0f0",
	},
	activeTab: {
		backgroundColor: "#ea2a33",
	},
	filterText: {
		fontSize: 14,
		fontWeight: "500",
		color: "#886364",
	},
	activeFilterText: {
		color: "#ffffff",
	},
	casesList: {
		flex: 1,
		paddingHorizontal: 16,
	},
	caseCard: {
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		padding: 16,
		marginBottom: 12,
	},
	caseHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		marginBottom: 12,
	},
	caseInfo: {
		flex: 1,
		marginRight: 12,
	},
	caseTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#181111",
		marginBottom: 4,
	},
	caseDate: {
		fontSize: 14,
		color: "#886364",
	},
	caseFooter: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	statusBadge: {
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 12,
	},
	statusText: {
		fontSize: 12,
		fontWeight: "bold",
		color: "#ffffff",
	},
	priorityText: {
		fontSize: 12,
		color: "#886364",
		textTransform: "capitalize",
	},
});
