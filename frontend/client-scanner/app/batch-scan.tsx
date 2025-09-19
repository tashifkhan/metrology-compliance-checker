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

interface BatchScan {
	id: string;
	name: string;
	status: "pending" | "processing" | "completed" | "failed";
	itemCount: number;
	createdDate: string;
	uploadProgress?: number;
}

const mockBatches: BatchScan[] = [
	{
		id: "1",
		name: "Downtown Market Inspection",
		status: "completed",
		itemCount: 25,
		createdDate: "2024-01-15",
	},
	{
		id: "2",
		name: "Shopping Mall Survey",
		status: "processing",
		itemCount: 12,
		createdDate: "2024-01-14",
		uploadProgress: 75,
	},
	{
		id: "3",
		name: "Grocery Store Chain",
		status: "pending",
		itemCount: 8,
		createdDate: "2024-01-13",
	},
];

export default function BatchScanManagementScreen() {
	const [selectedTab, setSelectedTab] = useState<"active" | "completed">(
		"active"
	);

	const getStatusColor = (status: string) => {
		switch (status) {
			case "completed":
				return "#27ae60";
			case "processing":
				return "#f39c12";
			case "pending":
				return "#886364";
			case "failed":
				return "#ea2a33";
			default:
				return "#886364";
		}
	};

	const getStatusIcon = (status: string) => {
		switch (status) {
			case "completed":
				return "checkmark-circle";
			case "processing":
				return "sync";
			case "pending":
				return "time";
			case "failed":
				return "close-circle";
			default:
				return "information-circle";
		}
	};

	const handleBatchAction = (batch: BatchScan, action: string) => {
		switch (action) {
			case "upload":
				Alert.alert("Upload Batch", `Upload ${batch.name}?`);
				break;
			case "delete":
				Alert.alert("Delete Batch", `Delete ${batch.name}?`);
				break;
			case "retry":
				Alert.alert("Retry Upload", `Retry uploading ${batch.name}?`);
				break;
			case "view":
				Alert.alert("View Details", `Details for ${batch.name}`);
				break;
		}
	};

	const handleCreateBatch = () => {
		Alert.alert("Create Batch", "Create a new batch scan session?");
	};

	const renderBatchItem = (batch: BatchScan) => (
		<View key={batch.id} style={styles.batchItem}>
			<View style={styles.batchHeader}>
				<View style={styles.batchInfo}>
					<Text style={styles.batchName}>{batch.name}</Text>
					<Text style={styles.batchDetails}>
						{batch.itemCount} items • {batch.createdDate}
					</Text>
				</View>
				<View style={styles.batchStatus}>
					<Ionicons
						name={getStatusIcon(batch.status)}
						size={20}
						color={getStatusColor(batch.status)}
					/>
					<Text
						style={[styles.statusText, { color: getStatusColor(batch.status) }]}
					>
						{batch.status.toUpperCase()}
					</Text>
				</View>
			</View>

			{batch.uploadProgress && (
				<View style={styles.progressContainer}>
					<View style={styles.progressBar}>
						<View
							style={[
								styles.progressFill,
								{ width: `${batch.uploadProgress}%` },
							]}
						/>
					</View>
					<Text style={styles.progressText}>{batch.uploadProgress}%</Text>
				</View>
			)}

			<View style={styles.batchActions}>
				{batch.status === "pending" && (
					<>
						<TouchableOpacity
							style={styles.actionButton}
							onPress={() => handleBatchAction(batch, "upload")}
						>
							<Ionicons name="cloud-upload" size={16} color="#ea2a33" />
							<Text style={styles.actionButtonText}>Upload</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.actionButton}
							onPress={() => handleBatchAction(batch, "delete")}
						>
							<Ionicons name="trash" size={16} color="#ea2a33" />
							<Text style={styles.actionButtonText}>Delete</Text>
						</TouchableOpacity>
					</>
				)}

				{batch.status === "failed" && (
					<TouchableOpacity
						style={styles.actionButton}
						onPress={() => handleBatchAction(batch, "retry")}
					>
						<Ionicons name="refresh" size={16} color="#ea2a33" />
						<Text style={styles.actionButtonText}>Retry</Text>
					</TouchableOpacity>
				)}

				<TouchableOpacity
					style={styles.actionButton}
					onPress={() => handleBatchAction(batch, "view")}
				>
					<Ionicons name="eye" size={16} color="#ea2a33" />
					<Text style={styles.actionButtonText}>View</Text>
				</TouchableOpacity>
			</View>
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
				<Text style={styles.headerTitle}>Batch Scan Management</Text>
				<TouchableOpacity onPress={handleCreateBatch}>
					<Ionicons name="add" size={24} color="#ea2a33" />
				</TouchableOpacity>
			</View>

			{/* Summary Cards */}
			<View style={styles.summaryContainer}>
				<View style={styles.summaryCard}>
					<Text style={styles.summaryValue}>3</Text>
					<Text style={styles.summaryLabel}>Active Batches</Text>
				</View>
				<View style={styles.summaryCard}>
					<Text style={styles.summaryValue}>45</Text>
					<Text style={styles.summaryLabel}>Total Items</Text>
				</View>
				<View style={styles.summaryCard}>
					<Text style={styles.summaryValue}>75%</Text>
					<Text style={styles.summaryLabel}>Upload Progress</Text>
				</View>
			</View>

			{/* Tab Navigation */}
			<View style={styles.tabContainer}>
				<TouchableOpacity
					style={[styles.tab, selectedTab === "active" && styles.activeTab]}
					onPress={() => setSelectedTab("active")}
				>
					<Text
						style={[
							styles.tabText,
							selectedTab === "active" && styles.activeTabText,
						]}
					>
						Active Batches
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.tab, selectedTab === "completed" && styles.activeTab]}
					onPress={() => setSelectedTab("completed")}
				>
					<Text
						style={[
							styles.tabText,
							selectedTab === "completed" && styles.activeTabText,
						]}
					>
						Completed
					</Text>
				</TouchableOpacity>
			</View>

			{/* Batch List */}
			<ScrollView style={styles.batchList}>
				{mockBatches
					.filter((batch) =>
						selectedTab === "active"
							? batch.status !== "completed"
							: batch.status === "completed"
					)
					.map(renderBatchItem)}
			</ScrollView>

			{/* Create New Batch Button */}
			<View style={styles.bottomContainer}>
				<TouchableOpacity
					style={styles.createButton}
					onPress={handleCreateBatch}
				>
					<Ionicons name="add" size={20} color="#ffffff" />
					<Text style={styles.createButtonText}>Create New Batch</Text>
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
	summaryContainer: {
		flexDirection: "row",
		paddingHorizontal: 16,
		paddingVertical: 16,
		gap: 12,
	},
	summaryCard: {
		flex: 1,
		backgroundColor: "#f4f0f0",
		padding: 16,
		borderRadius: 12,
		alignItems: "center",
	},
	summaryValue: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#ea2a33",
		marginBottom: 4,
	},
	summaryLabel: {
		fontSize: 12,
		color: "#886364",
		textAlign: "center",
	},
	tabContainer: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderBottomColor: "#f4f0f0",
		marginHorizontal: 16,
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
	batchList: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 16,
	},
	batchItem: {
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		padding: 16,
		marginBottom: 12,
	},
	batchHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		marginBottom: 12,
	},
	batchInfo: {
		flex: 1,
		marginRight: 12,
	},
	batchName: {
		fontSize: 16,
		fontWeight: "600",
		color: "#181111",
		marginBottom: 4,
	},
	batchDetails: {
		fontSize: 14,
		color: "#886364",
	},
	batchStatus: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	statusText: {
		fontSize: 12,
		fontWeight: "bold",
	},
	progressContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 12,
		gap: 8,
	},
	progressBar: {
		flex: 1,
		height: 4,
		backgroundColor: "#ffffff",
		borderRadius: 2,
		overflow: "hidden",
	},
	progressFill: {
		height: "100%",
		backgroundColor: "#ea2a33",
		borderRadius: 2,
	},
	progressText: {
		fontSize: 12,
		color: "#886364",
		fontWeight: "500",
	},
	batchActions: {
		flexDirection: "row",
		gap: 8,
	},
	actionButton: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 12,
		paddingVertical: 8,
		backgroundColor: "#ffffff",
		borderRadius: 8,
		gap: 4,
	},
	actionButtonText: {
		fontSize: 12,
		fontWeight: "500",
		color: "#ea2a33",
	},
	bottomContainer: {
		paddingHorizontal: 16,
		paddingVertical: 24,
	},
	createButton: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 16,
		backgroundColor: "#ea2a33",
		borderRadius: 12,
		gap: 8,
	},
	createButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#ffffff",
	},
});
