import { useRef, useState } from "react";
import {
  View,
  ImageSourcePropType,
  FlatList,
  useWindowDimensions,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { router } from "expo-router";

import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../../../assets/images/slides/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../../../assets/images/slides/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../../../assets/images/slides/slide-3.png"),
  },
];

const SlidesScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // estado para guardar el indice de la imagen actual
  const flatListRef = useRef<FlatList>(null); // obtenemos la referencia del Flatlist
  const { width } = useWindowDimensions(); // Obtenemos el ancho de la pantalla para el cálculo

  // TODO: Función que calcula la posición actual al hacer scroll, para saber que tipo es el event solo se deja el curso encima del onScroll del FlatList
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    // Dividimos el desplazamiento entre el ancho de la pantalla y redondeamos
    const index = Math.round(offsetX / width);
    // Solo actualizamos el estado si el indice cambio y el indice es mayor o iogual a 0
    if (index !== currentIndex && index >= 0 && index < items.length) {
      setCurrentIndex(index);
    }
  };

  // TODO: Funciones para navegar programáticamente con los botones
  const scrollToSlide = (index: number) => {
    flatListRef.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      scrollToSlide(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToSlide(currentIndex - 1);
    }
  };

  const handleFinish = () => {
    router.dismiss(); // cierra la pantalla actual o modal actual
    // router.canDismiss() || router.canGoBack() //TODO se recomienda cualquiera de estas dos ya que si no hay una pantalla anterior sacaria de nuestra aplicacion el .dismis()
  };

  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex === items.length - 1;
  return (
    <ThemedView className="flex-1">
      <FlatList
        ref={flatListRef}
        data={items}
        horizontal
        pagingEnabled // Hace que se ajuste como páginas independientes
        scrollEnabled={true} // bloquea el scroll
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          // <ThemedText className="w-[250px]">{item.title}</ThemedText>
          <SlideItem item={item} />
        )}
        scrollEventThrottle={16} // Controla la frecuencia de actualización del evento (16ms)
        // Esto le indica a la lista el ancho exacto de cada diapositiva para que no pierda la posición al navegar.
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      {/* Contenedor de Botones */}
      <View className="absolute bottom-10 left-0 right-0 flex-row justify-between px-8">
        {/* Mostrar 'Anterior' solo si NO es la primera diapositiva */}
        {
          !isFirstItem ? (
            <ThemedButton onPress={handlePrev} className="relative">
              Anterior
            </ThemedButton>
          ) : (
            <View />
          ) /* Espaciador para mantener alineación si se usa flex justify-between */
        }
        {!isLastItem ? (
          <ThemedButton onPress={handleNext} className="relative">
            Siguiente
          </ThemedButton>
        ) : (
          <ThemedButton onPress={handleFinish} className="relative">
            Finalizar
          </ThemedButton>
        )}
      </View>
    </ThemedView>
  );
};
export default SlidesScreen;

interface SlideItemsProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemsProps) => {
  const { width } = useWindowDimensions(); // dimenciones de la pantalla descrtucturamos el ancho
  const { title, desc, img } = item;

  return (
    <ThemedView
      className="flex-1 rounded p-10 justify-center bg-red-500"
      style={{ width }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: "center",
          alignSelf: "center",
        }}
      />

      <ThemedText
        type="h1"
        className="text-light-primary dark:text-dark-primary"
      >
        {title}
      </ThemedText>

      <ThemedText className="mt-10">{desc}</ThemedText>
    </ThemedView>
  );
};
