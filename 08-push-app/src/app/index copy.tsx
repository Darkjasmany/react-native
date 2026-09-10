import Constants, { ExecutionEnvironment } from "expo-constants";
import { useEffect, useState } from "react";
import { Button, Platform, Text, View } from "react-native";

export default function PushApp() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState<any>(undefined);

  useEffect(() => {
    async function initNotifications() {
      // Si estamos en Expo Go, evitamos cargar el módulo nativo que causa el crash
      const isExpoGo =
        Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

      if (isExpoGo) {
        console.warn(
          "Notificaciones en Expo Go deshabilitadas por restricciones del SDK 53.",
        );
        setExpoPushToken("ExponentPushToken[TokenSimuladoParaCurso]");
        return;
      }

      // Carga dinámica del módulo solo fuera de Expo Go
      const Notifications = await import("expo-notifications");

      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldPlaySound: true,
          shouldSetBadge: true,
          shouldShowBanner: true,
          shouldShowList: true,
        }),
      });

      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }

      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus === "granted") {
        const projectId =
          Constants?.expoConfig?.extra?.eas?.projectId ??
          Constants?.easConfig?.projectId;

        try {
          const pushTokenString = (
            await Notifications.getExpoPushTokenAsync({ projectId })
          ).data;
          setExpoPushToken(pushTokenString);
        } catch (e) {
          console.error("Error al obtener token:", e);
        }
      }

      const notificationListener =
        Notifications.addNotificationReceivedListener((notification) => {
          setNotification(notification);
        });

      return () => {
        notificationListener.remove();
      };
    }

    initNotifications();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        padding: 20,
      }}
    >
      <Text style={{ fontWeight: "bold", textAlign: "center" }}>
        Your Expo push token:
      </Text>
      <Text style={{ textAlign: "center", fontSize: 12, color: "#666" }}>
        {expoPushToken}
      </Text>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Title: {notification && notification.request.content.title}</Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>
          Data:{" "}
          {notification && JSON.stringify(notification.request.content.data)}
        </Text>
      </View>

      <Button
        title="Press to Send Notification"
        onPress={() => {
          alert("Simulación de notificación enviada");
        }}
      />
    </View>
  );
}
