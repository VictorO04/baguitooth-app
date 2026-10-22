import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { cores } from "../cores";

export default function WelcomeScreen({ aoEntrar }) {
    return (
        <View style={styles.tela}>
            <Text style={styles.marca}>SENAI</Text>
            <Text style={styles.titulo}>Laboratório Inteligente</Text>
            <Text style={styles.subtitulo}>Controle o laboratório de qualquer lugar.</Text>
            <TouchableOpacity style={styles.botao} onPress={aoEntrar}>
                <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: cores.escuro,
        justifyContent: "center",
        padding: 28,
        paddingBottom: 80
    },
    marca: {
        alignSelf: 'flex-start',
        backgroundColor: '#E30613',
        color: cores.branco,
        fontWeight:'bold',
        fontStyle: 'italic',
        paddingHorizontal: 15,
        paddingVertical: 2,
        marginBottom: 12
    },
    imagem: {
        width: "auto",
        height: 20
    },
    titulo: {
        color: cores.branco,
        fontSize: 34,
        fontWeight: "bold"
    },
    subtitulo: {
        color: cores.cartao,
        fontSize: 15,
        marginTop: 8,
        marginBottom: 28,
        width: "70%"
    },
    botao: {
        alignSelf: "center",
        backgroundColor: cores.laranja,
        borderRadius: 26,
        width: 200,
        paddingVertical: 10,
        alignItems: "center",
    },
    textoBotao: {
        color: cores.branco,
        fontWeight: "bold",
        fontSize: 16
    }
});