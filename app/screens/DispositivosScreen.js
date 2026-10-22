import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useWifi } from "../hooks/useWifi";
import { useDispositivos } from "../hooks/useDispositivos";
import PainelWifi from "../components/PainelWifi";
import BotaoSincronizar from "../components/BotaoSincronizar";
import { cores } from "../data/cores";
import CartaoDispositivo from "../components/CartaoDispositivo";

export default function DispositivosScreen({ aoVoltar }) {
  const [ordenar, setOrdenar] = useState(false);
  const { temWifi, tipoConexao } = useWifi();
  const { dispositivos, alternar } = useDispositivos();

  const lista = ordenar
    ? [...dispositivos].sort((a, b) => b.sinal - a.sinal)
    : dispositivos;

  const sincronizar = () => {
    Alert.alert("Nuvem", "Dispositivos sincronizados com sucesso.");
  };

  return (
    <View style={styles.tela}>
      <View style={styles.cabecalho}>
        <TouchableOpacity onPress={aoVoltar}>
          <Ionicons name="chevron-back" size={26} color={cores.texto} />
        </TouchableOpacity>
        <Text style={styles.titulo}>BaguiTooth</Text>
      </View>
      <Text style={styles.dica}>Sacuda o celular para deconectar tudo</Text>

      <PainelWifi temWifi={temWifi} tipoConexao={tipoConexao} />

      <View style={styles.linhaBotoes}>
        <BotaoSincronizar habilitado={temWifi} onPress={sincronizar} />
        <TouchableOpacity
          style={styles.botaoOrdenar}
          onPress={() => setOrdenar(!ordenar)}
        >
          <Ionicons
            name="swap-vertical"
            size={20}
            color={ordenar ? cores.laranja : cores.escuro}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartaoDispositivo
            dispositivo={item}
            onPress={() => alternar(item)}
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.colunas}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
    paddingTop: 60,
    paddingHorizontal: 18,
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: cores.texto,
    marginLeft: 6,
  },
  dica: {
    fontSize: 13,
    color: cores.textoSuave,
    marginBottom: 16,
    marginLeft: 32,
  },
  linhaBotoes: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  botaoOrdenar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: cores.cartao,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  colunas: {
    justifyContent: "space-between",
  },
});
