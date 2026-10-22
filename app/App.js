import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./screens/WelcomeScreen";
import DispositivosScreen from "./screens/DispositivosScreen";

export default function App() {
    const [telaAtual, setTelaAtual] = useState("welcome");

    return (
        <>
            <StatusBar style="auto" />
            {telaAtual === "welcome" ? <WelcomeScreen aoEntrar={() => setTelaAtual("dispositivos")} /> : <DispositivosScreen aoVoltar={() => setTelaAtual("welcome")} />}
        </>
    );
}