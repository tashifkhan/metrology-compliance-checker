import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function MapScreen() {
	return (
		<View style={styles.container}>
			<StatusBar style="dark" />

			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Inspection Map</Text>
				<TouchableOpacity style={styles.settingsButton}>
					<Ionicons name="layers-outline" size={24} color="#181111" />
				</TouchableOpacity>
			</View>

			{/* Map Container */}
			<View style={styles.mapContainer}>
				<View style={styles.mapPlaceholder}>
					<Ionicons name="map" size={80} color="#886364" />
					<Text style={styles.mapText}>Map View</Text>
					<Text style={styles.mapSubtext}>
						Showing nearby compliance locations
					</Text>
				</View>
			</View>

			{/* Map Controls */}
			<View style={styles.controls}>
				<TouchableOpacity style={styles.controlButton}>
					<Ionicons name="locate" size={20} color="#181111" />
					<Text style={styles.controlText}>My Location</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.controlButton}>
					<Ionicons name="filter" size={20} color="#181111" />
					<Text style={styles.controlText}>Filter</Text>
				</TouchableOpacity>
			</View>

			{/* Legend */}
			<View style={styles.legend}>
				<Text style={styles.legendTitle}>Legend</Text>
				<View style={styles.legendItems}>
					<View style={styles.legendItem}>
						<View style={[styles.legendDot, { backgroundColor: "#ea2a33" }]} />
						<Text style={styles.legendText}>Violations</Text>
					</View>
					<View style={styles.legendItem}>
						<View style={[styles.legendDot, { backgroundColor: "#f39c12" }]} />
						<Text style={styles.legendText}>Pending</Text>
					</View>
					<View style={styles.legendItem}>
						<View style={[styles.legendDot, { backgroundColor: "#27ae60" }]} />
						<Text style={styles.legendText}>Compliant</Text>
					</View>
				</View>
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
	mapContainer: {
		flex: 1,
		margin: 16,
		borderRadius: 12,
		overflow: "hidden",
		backgroundColor: "#f4f0f0",
	},
	mapPlaceholder: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	mapText: {
		marginTop: 12,
		fontSize: 18,
		color: "#181111",
		fontWeight: "600",
	},
	mapSubtext: {
		marginTop: 4,
		fontSize: 14,
		color: "#886364",
	},
	controls: {
		flexDirection: "row",
		paddingHorizontal: 16,
		paddingVertical: 8,
		gap: 12,
	},
	controlButton: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
		paddingVertical: 10,
		backgroundColor: "#f4f0f0",
		borderRadius: 20,
		gap: 8,
	},
	controlText: {
		fontSize: 14,
		fontWeight: "500",
		color: "#181111",
	},
	legend: {
		paddingHorizontal: 16,
		paddingBottom: 24,
	},
	legendTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#181111",
		marginBottom: 8,
	},
	legendItems: {
		flexDirection: "row",
		gap: 16,
	},
	legendItem: {
		flexDirection: "row",
		alignItems: "center",
		gap: 6,
	},
	legendDot: {
		width: 12,
		height: 12,
		borderRadius: 6,
	},
	legendText: {
		fontSize: 12,
		color: "#886364",
	},
});
