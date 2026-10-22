import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { cores } from "../data/cores";

const textosState = {
  conectado: "Conectado",
  conectando: "Conectando...",
  desconectado: "Desconectado",
};

export default function CartaoDispositivo({ dispositivo, onPress }) {
  const conectado = dispositivo.estado === "conectado";
  const conectando = dispositivo.estado === "conectando";
  const corTexto = conectado ? cores.branco : null;

  return (
    <TouchableOpacity
      style={[styles.cartao, conectado && styles.ativo]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.topo}>
        <View style={styles.circulo}>
          <Ionicons name={dispositivo.icone} size={20} color={cores.escuro} />
        </View>
        {conectando && <ActivityIndicator color={cores.laranja} />}
      </View>
      <Text style={[styles.nome, { color: corTexto || cores.texto }]}>
        {dispositivo.nome}
      </Text>
      <Text style={[styles.detalhe, { color: corTexto || cores.textoSuave }]}>
        {dispositivo.tipo}
      </Text>
      <View style={styles.linhaSinal}>
        <Ionicons
          name="cellular"
          size={14}
          color={corTexto || cores.textoSuave}
        />
        <Text
          style={[styles.detalhe, { color: corTexto || cores.textoSuave }]}
        >
          {" "}
          {dispositivo.sinal}%
        </Text>
      </View>
      <Text style={[styles.estado, { color: corTexto || cores.escuro }]}>
        {textosState[dispositivo.estado]}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartao: {
    width: "48%",
    backgroundColor: cores.cartao,
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
  },
  ativo: {
    backgroundColor: cores.escuro,
  },
  topo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  circulo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: cores.fundo,
    alignItems: "center",
    justifyContent: "center",
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detalhe: {
    fontSize: 12,
  },
  linhaSinal: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  estado: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "600",
  },
});
