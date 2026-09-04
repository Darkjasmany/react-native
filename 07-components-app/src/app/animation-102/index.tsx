import useAnimation from "@/hooks/useAnimation";
import { View, Text, Animated } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Animation102Screen = () => {
  const { pan, panResponder } = useAnimation();
  return (
    <SafeAreaProvider>
      <SafeAreaView className="justify-center items-center flex-1">
        <Animated.View
          {...panResponder.panHandlers}
          className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
          style={[
            pan.getLayout(),
            {
              width: 150,
              height: 150,
            },
          ]}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default Animation102Screen;
