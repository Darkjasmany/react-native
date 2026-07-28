import { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import "../global.css";

SplashScreen.preventAutoHideAsync(); // Esto evita que la pantalla de inicio se oculte automáticamente hasta que las fuentes estén cargadas

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync(); // Oculta la pantalla de inicio una vez que las fuentes estén cargadas
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null; // Si hay o no hay un error al cargar las fuentes, no renderiza nada

  return <Slot />;
};

export default RootLayout;
