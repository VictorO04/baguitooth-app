import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { cores } from "../data/cores";

export default function BotaoSincronizar({ habilitado, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.botao, !habilitado && styles.desabilitado]}
      disabled={!habilitado}
      onPress={onPress}
    >
      <Text style={styles.texto}>Sincronizar com a nuvem</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    flex: 1,
    backgroundColor: cores.laranja,
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: "center",
  },
  desabilitado: {
    backgroundColor: cores.cinzaClaro,
  },
  texto: {
    color: cores.branco,
    fontWeight: "bold",
  },
});
