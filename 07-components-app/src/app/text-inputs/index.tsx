import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";

const TextInputsScreen = () => {
  const isIOS = Platform.OS === "ios";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    // TODO: KeyboardAvoidingView: Permite que el contenido se desplace hacia arriba cuando el teclado está activo, evitando que los campos de entrada queden ocultos por el teclado
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined}>
      // TODO: Permite que el contenido sea desplazable si es necesario,
      especialmente útil en dispositivos con pantallas más pequeñas o cuando el
      teclado está activo
      <ScrollView>
        <ThemedView margin className="flex flex-col gap-3">
          <ThemedCard>
            <ThemedTextInput
              placeholder="Ingresa tu nombre"
              autoCapitalize="words"
              autoCorrect={false} // Para que no corrija el texto
              autoComplete="name"
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
          </ThemedCard>
          <ThemedCard>
            <ThemedTextInput
              placeholder="Ingresa tu email "
              autoCorrect={false} // Para que no corrija el texto
              autoComplete="email"
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </ThemedCard>
          <ThemedCard>
            <ThemedTextInput
              placeholder="Ingresa tu phone "
              autoCorrect={false} // Para que no corrija el texto
              keyboardType="phone-pad"
              maxLength={10}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>

          <ThemedCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
