import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function SignInScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleSignIn = () => {
		// Handle sign in logic here
		console.log("Sign in:", { email, password });
		// Navigate to main app
		router.replace("/(tabs)");
	};

	const handleForgotPassword = () => {
		console.log("Forgot password pressed");
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="dark" />

			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Sign in</Text>
			</View>

			{/* Content */}
			<View style={styles.content}>
				{/* Logo/Banner */}
				<View style={styles.logoContainer}>
					<Ionicons name="shield-checkmark" size={80} color="#ea2a33" />
					<Text style={styles.appTitle}>Compliance Checker</Text>
					<Text style={styles.appSubtitle}>Legal Metrology Inspector App</Text>
				</View>

				{/* Email Input */}
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Email"
						placeholderTextColor="#886364"
						value={email}
						onChangeText={setEmail}
						keyboardType="email-address"
						autoCapitalize="none"
						autoComplete="email"
					/>
				</View>

				{/* Password Input */}
				<View style={styles.inputContainer}>
					<View style={styles.passwordContainer}>
						<TextInput
							style={styles.passwordInput}
							placeholder="Password"
							placeholderTextColor="#886364"
							value={password}
							onChangeText={setPassword}
							secureTextEntry={!showPassword}
							autoComplete="password"
						/>
						<TouchableOpacity
							style={styles.passwordToggle}
							onPress={() => setShowPassword(!showPassword)}
						>
							<Ionicons
								name={showPassword ? "eye-off" : "eye"}
								size={20}
								color="#886364"
							/>
						</TouchableOpacity>
					</View>
				</View>

				{/* Forgot Password */}
				<TouchableOpacity
					onPress={handleForgotPassword}
					style={styles.forgotPasswordContainer}
				>
					<Text style={styles.forgotPasswordText}>Forgot password?</Text>
				</TouchableOpacity>

				{/* Sign In Button */}
				<TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
					<Text style={styles.signInButtonText}>Sign in</Text>
				</TouchableOpacity>

				{/* Additional Options */}
				<View style={styles.additionalOptions}>
					<Text style={styles.orText}>or</Text>

					<TouchableOpacity style={styles.biometricButton}>
						<Ionicons name="finger-print" size={24} color="#181111" />
						<Text style={styles.biometricText}>Use Biometric</Text>
					</TouchableOpacity>
				</View>
			</View>

			{/* Footer */}
			<View style={styles.footer}>
				<Text style={styles.footerText}>
					Need help? Contact your administrator
				</Text>
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
		alignItems: "center",
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 8,
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#181111",
	},
	content: {
		flex: 1,
		paddingHorizontal: 16,
		justifyContent: "center",
	},
	logoContainer: {
		alignItems: "center",
		marginBottom: 48,
	},
	appTitle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#181111",
		marginTop: 16,
		marginBottom: 8,
	},
	appSubtitle: {
		fontSize: 16,
		color: "#886364",
		textAlign: "center",
	},
	inputContainer: {
		marginBottom: 16,
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
	passwordContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f4f0f0",
		borderRadius: 12,
		height: 56,
	},
	passwordInput: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 16,
		fontSize: 16,
		color: "#181111",
	},
	passwordToggle: {
		paddingHorizontal: 16,
		paddingVertical: 16,
	},
	forgotPasswordContainer: {
		alignItems: "flex-start",
		marginBottom: 24,
	},
	forgotPasswordText: {
		fontSize: 14,
		color: "#886364",
		textDecorationLine: "underline",
	},
	signInButton: {
		backgroundColor: "#ea2a33",
		borderRadius: 12,
		paddingVertical: 16,
		alignItems: "center",
		marginBottom: 32,
	},
	signInButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#ffffff",
	},
	additionalOptions: {
		alignItems: "center",
	},
	orText: {
		fontSize: 14,
		color: "#886364",
		marginBottom: 16,
	},
	biometricButton: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 24,
		paddingVertical: 12,
		backgroundColor: "#f4f0f0",
		borderRadius: 20,
		gap: 8,
	},
	biometricText: {
		fontSize: 14,
		fontWeight: "500",
		color: "#181111",
	},
	footer: {
		paddingHorizontal: 16,
		paddingVertical: 24,
		alignItems: "center",
	},
	footerText: {
		fontSize: 12,
		color: "#886364",
		textAlign: "center",
	},
});
