# Navegación App

App del curso de React Native + TypeScript usando Expo SDK 57 y React Navigation.

## Requisitos

- Node.js
- JDK 17 (no sirve Java 25 ni 26 con Gradle 9.x)
- Android Studio (para el emulador)
- SDKMAN (opcional, para gestionar versiones de Java)

## Instalar JDK 17 con SDKMAN

```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install java 17.0.12-tem
sdk default java 17.0.12-tem
```

## Primera vez — Compilar dev build

Esta app usa drawer navigation con `react-native-reanimated`, que **NO funciona en Expo Go** (crash nativo en `libworklets.so` para Android x86_64). Hay que compilar un **development build**:

```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"  # asegurar JDK 17
npx expo run:android
```

Esto:
1. Genera la carpeta `android/`
2. Compila el APK con las librerías nativas correctas
3. Lo instala en el emulador

Tarda ~5-10 min la primera vez.

## Desarrollo normal (después del primer build)

Solo necesitas:

```bash
npx expo start
```

La app ya instalada en el emulador se conecta automáticamente.
No necesitas Expo Go ni volver a compilar.

## Cuándo volver a compilar

Solo si:
- Agregas una librería nativa nueva (gesture-handler, reanimated, etc.)
- Borras la carpeta `android/`

```bash
npx expo run:android
```

## Notas

- **babel.config.js**: tiene `worklets: false` solo si usas Expo Go (no recomendado porque igual crashea). Para dev build está comentado/quitado.
- **Java**: Fedora 44 trae Java 25, pero Gradle 9.3.1 no lo soporta para toolchains. Usa SDKMAN para mantener JDK 17 como default.
- **Expo Go**: El drawer con reanimated no funciona en Expo Go en emulador x86_64. Si pruebas en dispositivo físico ARM64 puede funcionar, pero no está garantizado.
