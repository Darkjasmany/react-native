import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedView from "@/presentation/shared/ThemedView";
import { View, Text, Alert, Button } from "react-native";

const AlertsScreen = () => {
  const showAlert = () => {
    Alert.alert("Que Haces CTM", "No hagas eso", [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  const showAlert3Buttons = () => {
    Alert.alert("Otra Alerta", "Vale ", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => console.log("OK pressed"),
      },
    ]);
  };

  return (
    <ThemedView margin className="mt-2">
      <ThemedCard className="justify-center items-center flex-1">
        <ThemedButton onPress={showAlert}>
          Mostrar Alerta con 2 botones
        </ThemedButton>
        <ThemedButton className="mt-2" onPress={showAlert3Buttons}>
          Mostrar Alertas 3 botones
        </ThemedButton>
      </ThemedCard>
    </ThemedView>
  );
};
export default AlertsScreen;
