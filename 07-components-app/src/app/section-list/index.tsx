import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { SectionList } from "react-native";

interface Houses {
  title: string;
  data: string[];
}

const houses: Houses[] = [
  {
    title: "DC Comics",
    data: [
      "Superman",
      "Batman",
      "Wonder Woman (Mujer Maravilla)",
      "The Flash (Flash)",
      "Aquaman",
      "Green Lantern (Linterna Verde)",
      "Cyborg",
      "Shazam",
      "Green Arrow (Flecha Verde)",
      "Batgirl (Batichica)",
      "Nightwing (Ala Nocturna)",
      "Supergirl",
      "Martian Manhunter (Detective Marciano)",
      "Harley Quinn",
      "Joker",
      "Catwoman (Gata Salvaje)",
      "Lex Luthor",
      "Poison Ivy (Hiedra Venenosa)",
      "Robin",
      "Deathstroke (Deathstroke el Terminator)",
    ],
  },
  {
    title: "Marvel Comics",
    data: [
      "Spider-Man (Hombre Araña)",
      "Iron Man (Hombre de Hierro)",
      "Captain America (Capitán América)",
      "Thor",
      "Black Widow (Viuda Negra)",
      "Hulk",
      "Doctor Strange (Doctor Extraño)",
      "Black Panther (Pantera Negra)",
      "Captain Marvel (Capitana Marvel)",
      "Wolverine",
      "Deadpool",
      "Scarlet Witch (Bruja Escarlata)",
      "Ant-Man (Hombre Hormiga)",
      "Wasp (Avispa)",
      "Groot",
      "Rocket Raccoon (Mapache Cohete)",
      "Gamora",
      "Drax the Destroyer (Drax el Destructor)",
    ],
  },
  {
    title: "Anime",
    data: [
      "Son Goku (Dragon Ball)",
      "Naruto Uzumaki (Naruto)",
      "Monkey D. Luffy (One Piece)",
      "Sailor Moon (Sailor Moon)",
      "Kenshin Himura (Rurouni Kenshin)",
      "Edward Elric (Fullmetal Alchemist)",
      "Inuyasha (Inuyasha)",
      "Sakura Kinomoto (Cardcaptor Sakura)",
      "Light Yagami (Death Note)",
      "Eren Yeager (Attack on Titan)",
      "Lelouch Lamperouge (Code Geass)",
      "Vegeta (Dragon Ball)",
      "Ichigo Kurosaki (Bleach)",
      "Kaneki Ken (Tokyo Ghoul)",
      "Gon Freecss (Hunter x Hunter)",
      "Asuka Langley Soryu (Neon Genesis Evangelion)",
      "Saitama (One Punch Man)",
      "Mikasa Ackerman (Attack on Titan)",
      "Natsu Dragneel (Fairy Tail)",
      "Usagi Tsukino (Sailor Moon)",
      "Sasuke Uchiha (Naruto)",
    ],
  },
];

const SectionListScreen = () => {
  return (
    <ThemedView margin>
      <ThemedCard>
        <SectionList
          sections={houses}
          keyExtractor={(item) => item} // va ayudar a react para saber cuando un elemento cambia
          // renderItem={(entry) => <ThemedText>{entry.item}</ThemedText>} // Aqui se puede personalizar el renderizado de cada elemento de la lista
          renderItem={({ item }) => <ThemedText>{item}</ThemedText>} // Aqui se puede personalizar el renderizado de cada elemento de la lista
          ListHeaderComponent={() => (
            <ThemedText type="h1" className="font-bold mb-3">
              Personajes de DC Comics, Marvel y Anime
            </ThemedText>
          )}
          renderSectionHeader={({ section }) => (
            <ThemedText
              type="h2"
              className="bg-light-background dark:bg-dark-background p-2 rounded"
            >
              {section.title}
            </ThemedText>
          )}
          stickySectionHeadersEnabled // Esto hace que los encabezados de sección se queden pegados en la parte superior mientras se desplaza la lista valor booleano por defecto es true
          ListFooterComponent={() => (
            <ThemedText
              type="h1"
              className="font-bold mb-10 bg-light-background dark:bg-dark-background p-2 rounded"
            >
              Secciones: {houses.length}
            </ThemedText>
          )}
          showsVerticalScrollIndicator={false} // Elimina la barra de desplazamiento vertical
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default SectionListScreen;
