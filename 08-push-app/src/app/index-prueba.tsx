import Constants, { ExecutionEnvironment } from "expo-constants";
import { useEffect, useState } from "react";
import { Button, Platform, Text, View } from "react-native";

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState<any>(undefined);

  useEffect(() => {
    async function setupNotifications() {
      const isExpoGo =
        Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

      if (isExpoGo) {
        setExpoPushToken("ExponentPushToken[SimuladoExpoGo]");
        return;
      }

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
          const token = (
            await Notifications.getExpoPushTokenAsync({ projectId })
          ).data;
          setExpoPushToken(token);
        } catch (e) {
          console.error(e);
        }
      }
    }

    setupNotifications();
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
      <Text style={{ textAlign: "center" }}>
        Your Expo push token: {expoPushToken}
      </Text>
      <Button
        title="Press to Send Notification"
        onPress={() => alert("Notificación enviada")}
      />
    </View>
  );
}
