import { useState, useEffect, useRef } from "react";
import { Accelerometer } from "expo-sensors";
import { useAudioPlayer } from "expo-audio";
import { listaInicial } from "../data/dispositivos";

export function useDispositivos() {
  const [dispositivos, setDispositivos] = useState(listaInicial);
  const somConectar = useAudioPlayer(require("../assets/on.wav"));
  const somDesconectar = useAudioPlayer(require("../assets/off.wav"));
  const ultimaSacudida = useRef(0);

  const tocar = (player) => {
    player.seekTo(0);
    player.play();
  };

  const atualizarEstado = (id, estado) => {
    setDispositivos((lista) =>
      lista.map((d) => (d.id === id ? { ...d, estado } : d)),
    );
  };

  const alternar = (dispositivo) => {
    if (dispositivo.estado === "conectando") return;

    if (dispositivo.estado === "conectado") {
      atualizarEstado(dispositivo.id, "desconectado");
      tocar(somDesconectar);
      return;
    }

    atualizarEstado(dispositivo.id, "conectando");
    setTimeout(() => {
      atualizarEstado(dispositivo.id, "conectado");
      tocar(somConectar);
    }, 1200);
  };

  const desconectarTodos = () => {
    setDispositivos((lista) =>
      lista.map((d) => ({ ...d, estado: "desconectado" })),
    );
    tocar(somDesconectar);
  };

  useEffect(() => {
    Accelerometer.setUpdateInterval(150);
    const assinatura = Accelerometer.addListener(({ x, y, z }) => {
      const forca = Math.sqrt(x * x + y * y + z * z);
      const agora = Date.now();
      if (forca > 2.5 && agora - ultimaSacudida.current > 1500) {
        ultimaSacudida.current = agora;
        desconectarTodos();
      }
    });
    return () => assinatura.remove();
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setDispositivos((lista) =>
        lista.map((d) => {
          const novoSinal = Math.max(
            5,
            Math.min(100, d.sinal + Math.round(Math.random() * 30 - 15)),
          );
          const perdeuSinal = novoSinal < 15 && d.estado === "conectado";
          return {
            ...d,
            sinal: novoSinal,
            estado: perdeuSinal ? "desconectado" : d.estado,
          };
        }),
      );
    }, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return { dispositivos, alternar };
}
