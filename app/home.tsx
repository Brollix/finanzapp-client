import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { theme } from "@/styles/theme";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bienvenido a</Text>
        <Text style={styles.brand}>FinanzApp</Text>
      </View>

      <View style={styles.chartArea}>
        <Text style={styles.placeholder}>📈 Gráfica de gastos (próximamente)</Text>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.fab}          
        >
          <MaterialIcons name="add" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 24,
  },
  header: {
    alignItems: "center",
    marginTop: 60,
  },
  title: {
    fontFamily: theme.font.family.regular,
    fontSize: 20,
    color: theme.colors.text,
  },
  brand: {
    fontFamily: theme.font.family.regular,
    fontSize: theme.font.size.xl,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 24,
  },
  chartArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 12,
    marginVertical: 16,
  },
  placeholder: {
    fontFamily: theme.font.family.regular,
    color: theme.colors.text,
    fontStyle: "italic",
  },
  bottomBar: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  fab: {
    backgroundColor: theme.colors.primary,
    borderRadius: 32,
    padding: 16,
    elevation: 4,
  },
});
