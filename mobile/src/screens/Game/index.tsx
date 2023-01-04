import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameParams } from "../../@types/navigation";
import logoImage from "../../assets/logo-nlw-esports.png";
import { Background } from '../../components/Background';
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { DuoMatch } from "../../components/DuoMatch";
import { Heading } from "../../components/Heading";
import { THEME } from "../../theme";
import { styles } from "./styles";

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');

  const navigation = useNavigation();

  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsID: string) {
    axios(`http://192.168.0.8:3333/ads/${adsID}/discord`).then(response => {
      setDiscordDuoSelected(response.data.discord);
    });
  }

  useEffect(() => {
    axios(`http://192.168.0.8:3333/games/${game.id}/ads`).then(response => {
      setDuos(response.data);
    });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImage}
            style={styles.logo}
          />

          <View style={styles.rightPlaceholder}></View>
        </View>

        <Image
          style={styles.cover}
          source={{ uri: game.bannerUrl }}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConnect={() => getDiscordUser(item.id)}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={
            duos.length > 0
              ? styles.contentList
              : styles.emptyListContent
          }
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios.
            </Text>
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />
      </SafeAreaView>
    </Background >
  );
}