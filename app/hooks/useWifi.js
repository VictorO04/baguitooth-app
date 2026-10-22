import { useNetworkState, NetworkStateType } from "expo-network";

const nomesConexao = {
    [NetworkStateType.WIFI]: "Wi-Fi",
    [NetworkStateType.CELLULAR]: "Dados móveis",
    [NetworkStateType.ETHERNET]: "Ethernet",
    [NetworkStateType.NONE]: "Sem conexão"
}

export function useWifi() {
    const rede = useNetworkState();
    const temWifi = rede.type === NetworkStateType.WIFI && rede.isConnected === true;
    const tipoConexao = nomesConexao[rede.type] || "Desconhecido";

    return { temWifi, tipoConexao };
}