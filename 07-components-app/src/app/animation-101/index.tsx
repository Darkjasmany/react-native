import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";

const Animation101Screen = () => {
  return (
    <ThemedView margin>
      <ThemedButton
        className="mt-5 mb-5"
        onPress={() => console.log("fakeInd")}
      >
        FadeIn
      </ThemedButton>
      <ThemedButton className="mb-5" onPress={() => console.log("fakeOut")}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
