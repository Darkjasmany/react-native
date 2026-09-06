import { useThemeColor } from "@/hooks/useThemeColor";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";

const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor(
    {
      dark: "dark",
      light: "light",
    },
    "background",
  );
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    // Todo: Usamos el ScrollView para poder hacer un pull to refresh, y le pasamos el componente RefreshControl como prop, que es el que se encarga de manejar la lógica del pull to refresh
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[primaryColor, "red", "green", "blue"]} // Todo: Cambiamos el color del spinner de carga según lo indicado en el arreglo colors solo funciona en Android, en iOS se usa el color del tema del sistema operativo
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
