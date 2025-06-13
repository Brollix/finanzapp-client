import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { CameraView } from "expo-camera";
import { useRef, useState } from "react";
import type { CameraCapturedPicture } from "expo-camera";

export default function Capture() {
	const cameraRef = useRef<CameraView>(null);
	const [photoUri, setPhotoUri] = useState<string | null>(null);

	const router = useRouter();

	const handleCapture = async () => {
		if (cameraRef.current) {
			try {
				const photo: CameraCapturedPicture =
					await cameraRef.current.takePictureAsync();
				setPhotoUri(photo.uri);
				console.log("📸 Foto capturada:", photo.uri);
				Alert.alert("Foto capturada", photo.uri);
				router.push("/home");
			} catch (error) {
				console.error("Error al capturar la foto:", error);
			}
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<CameraView ref={cameraRef} style={{ flex: 1 }} />
			<View style={styles.overlay}>
				<TouchableOpacity onPress={handleCapture} style={styles.captureButton}>
					<Text style={styles.text}>📸 Capturar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	overlay: {
		position: "absolute",
		bottom: 50,
		width: "100%",
		alignItems: "center",
	},
	captureButton: {
		backgroundColor: "white",
		padding: 16,
		borderRadius: 50,
		elevation: 4,
	},
	text: {
		color: "black",
		fontWeight: "bold",
	},
});
