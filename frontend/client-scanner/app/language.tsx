import React, { useState } from "react";
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

interface Language {
	code: string;
	name: string;
	nativeName: string;
	isSelected: boolean;
}

const languages: Language[] = [
	{ code: "en", name: "English", nativeName: "English", isSelected: true },
	{ code: "es", name: "Spanish", nativeName: "Español", isSelected: false },
	{ code: "fr", name: "French", nativeName: "Français", isSelected: false },
	{ code: "de", name: "German", nativeName: "Deutsch", isSelected: false },
	{ code: "it", name: "Italian", nativeName: "Italiano", isSelected: false },
	{
		code: "pt",
		name: "Portuguese",
		nativeName: "Português",
		isSelected: false,
	},
	{ code: "zh", name: "Chinese", nativeName: "中文", isSelected: false },
	{ code: "ja", name: "Japanese", nativeName: "日本語", isSelected: false },
	{ code: "ko", name: "Korean", nativeName: "한국어", isSelected: false },
	{ code: "ar", name: "Arabic", nativeName: "العربية", isSelected: false },
	{ code: "hi", name: "Hindi", nativeName: "हिन्दी", isSelected: false },
	{ code: "ru", name: "Russian", nativeName: "Русский", isSelected: false },
];

export default function LanguageSelectionScreen() {
	const [selectedLanguage, setSelectedLanguage] = useState("en");

	const handleLanguageSelect = (languageCode: string) => {
		setSelectedLanguage(languageCode);
	};

	const handleSave = () => {
		// Save language preference
		console.log("Language saved:", selectedLanguage);
		router.back();
	};

	const handleReset = () => {
		setSelectedLanguage("en");
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="dark" />

			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={24} color="#181111" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Language Selection</Text>
				<TouchableOpacity onPress={handleReset}>
					<Text style={styles.resetText}>Reset</Text>
				</TouchableOpacity>
			</View>

			{/* Instructions */}
			<View style={styles.instructionsContainer}>
				<Ionicons name="language" size={60} color="#ea2a33" />
				<Text style={styles.instructionsTitle}>Choose Your Language</Text>
				<Text style={styles.instructionsSubtitle}>
					Select your preferred language for the application interface
				</Text>
			</View>

			{/* Language List */}
			<ScrollView style={styles.languageList}>
				{languages.map((language) => (
					<TouchableOpacity
						key={language.code}
						style={[
							styles.languageItem,
							selectedLanguage === language.code && styles.selectedLanguageItem,
						]}
						onPress={() => handleLanguageSelect(language.code)}
					>
						<View style={styles.languageInfo}>
							<Text
								style={[
									styles.languageName,
									selectedLanguage === language.code &&
										styles.selectedLanguageName,
								]}
							>
								{language.name}
							</Text>
							<Text
								style={[
									styles.languageNative,
									selectedLanguage === language.code &&
										styles.selectedLanguageNative,
								]}
							>
								{language.nativeName}
							</Text>
						</View>

						{selectedLanguage === language.code && (
							<Ionicons name="checkmark-circle" size={24} color="#ea2a33" />
						)}
					</TouchableOpacity>
				))}
			</ScrollView>

			{/* Language Information */}
			<View style={styles.languageInfo}>
				<View style={styles.infoCard}>
					<Ionicons name="information-circle" size={20} color="#886364" />
					<Text style={styles.infoText}>
						Changing language will restart the app to apply changes
					</Text>
				</View>

				<View style={styles.infoCard}>
					<Ionicons name="download" size={20} color="#886364" />
					<Text style={styles.infoText}>
						Some languages may require additional downloads
					</Text>
				</View>
			</View>

			{/* Action Buttons */}
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.cancelButton}
					onPress={() => router.back()}
				>
					<Text style={styles.cancelButtonText}>Cancel</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.saveButton} onPress={handleSave}>
					<Text style={styles.saveButtonText}>Apply Language</Text>
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
	resetText: {
		fontSize: 16,
		color: "#ea2a33",
		fontWeight: "500",
	},
	instructionsContainer: {
		alignItems: "center",
		paddingVertical: 24,
		paddingHorizontal: 16,
	},
	instructionsTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#181111",
		marginTop: 16,
		marginBottom: 8,
	},
	instructionsSubtitle: {
		fontSize: 14,
		color: "#886364",
		textAlign: "center",
		lineHeight: 20,
	},
	languageList: {
		flex: 1,
		paddingHorizontal: 16,
	},
	languageItem: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 16,
		paddingHorizontal: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		marginBottom: 8,
	},
	selectedLanguageItem: {
		backgroundColor: "#ea2a33",
	},
	languageInfo: {
		flex: 1,
	},
	languageName: {
		fontSize: 16,
		fontWeight: "600",
		color: "#181111",
		marginBottom: 2,
	},
	selectedLanguageName: {
		color: "#ffffff",
	},
	languageNative: {
		fontSize: 14,
		color: "#886364",
	},
	selectedLanguageNative: {
		color: "rgba(255,255,255,0.8)",
	},
	infoCard: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
		paddingVertical: 12,
		backgroundColor: "#f4f0f0",
		borderRadius: 8,
		marginBottom: 8,
		gap: 8,
	},
	infoText: {
		fontSize: 12,
		color: "#886364",
		flex: 1,
	},
	buttonContainer: {
		flexDirection: "row",
		paddingHorizontal: 16,
		paddingVertical: 24,
		gap: 12,
	},
	cancelButton: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 16,
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
	},
	cancelButtonText: {
		fontSize: 16,
		fontWeight: "600",
		color: "#181111",
	},
	saveButton: {
		flex: 2,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 16,
		backgroundColor: "#ea2a33",
		borderRadius: 12,
	},
	saveButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#ffffff",
	},
});
