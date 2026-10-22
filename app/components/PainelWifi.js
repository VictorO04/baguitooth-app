import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cores } from "../data/cores";

export default function PainelWifi({ temWifi, tipoConexao }) {
  return (
    <View style={[styles.painel, !temWifi && styles.semWifi]}>
      <Ionicons
        name={temWifi ? "wifi" : "wifi-outline"}
        size={28}
        color={cores.branco}
      />
      <View style={styles.textos}>
        <Text style={styles.titulo}>
          {temWifi ? "Wi-Fi conectado" : "Wi-Fi desconectado"}
        </Text>
        <Text style={styles.subtitulo}>Conexão: {tipoConexao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  painel: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: cores.azul,
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
  },
  semWifi: {
    backgroundColor: cores.cinza,
  },
  textos: {
    marginLeft: 14,
  },
  titulo: {
    color: cores.branco,
    fontSize: 17,
    fontWeight: "bold",
  },
  subtitulo: {
    color: cores.branco,
    fontSize: 13,
  },
});
