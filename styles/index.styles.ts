import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  finanzappContainer: {
    marginTop: 0,
    marginBottom: 200,
  },
  inner: {
    alignItems: "center",
    transform: [{ translateY: -70 }],
  },
  finanzappText: {
    fontFamily: theme.font.family.regular,
    color: theme.colors.text,
    fontSize: theme.font.size.xl,
    fontWeight: theme.font.weight.bold,
    textAlign: "center",
  },
  emailContainer: {
    width: 300,
    height: 45,
    backgroundColor: theme.colors.inputBackground,
    borderColor: theme.colors.inputBorder,
    borderWidth: 1,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
    overflow: "hidden",
  },
  passwordContainer: {
    width: 300,
    height: 45,
    backgroundColor: theme.colors.inputBackground,
    borderColor: "rgba(202, 202, 202, 0.5)",
    borderWidth: 1,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.lg,
    overflow: "hidden",
  },
  input: {
    fontFamily: theme.font.family.regular,
    height: "100%",
    color: theme.colors.text,
    paddingLeft: 10,
    fontSize: theme.font.size.md,
    fontWeight: theme.font.weight.bold,
  },
  loginButton: {
    width: 153,
    height: 45,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.borderRadius.lg,
  },
  loginText: {
    fontFamily: theme.font.family.regular,
    color: theme.colors.text,
    fontSize: theme.font.size.lg,
    fontWeight: theme.font.weight.bold,
  },
});
