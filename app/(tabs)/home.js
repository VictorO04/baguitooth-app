import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons"
import * as Network from 'expo-network';
import { useState, useEffect } from "react";

export default function HomeScreen() {
    const [wifi, setWifi] = useState(false);

    useEffect(() => {
        Network.getNetworkStateAsync().then((state) => {
            setWifi(state.type === Network.NetworkStateType.WIFI);
        });

        const subscription = Network.addNetworkStateListener((state) => {
            setWifi(state.type === Network.NetworkStateType.WIFI);
        });

        return () => subscription.remove();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.headerTexts}>
                        <Text style={styles.headerTitle}>Hi, Goat</Text>
                        <Text style={styles.headerSubtitle}>Welcome Back</Text>
                    </View>
                    <View style={styles.headerRight}>
                        {wifi ? (
                            <Text style={styles.connected}>Connected</Text>
                        ) : (
                            <Text style={styles.disconnected}>Disconnected</Text>
                        )}
                        <View style={styles.configButton}>
                            <Ionicons name="settings-outline" size={22} color="#8B9097" />
                        </View>
                    </View>
                </View>
                <View style={styles.fCardContainer}>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30
    },
    headerTexts: {
        gap: 4
    },
    headerTitle: {
        fontWeight: "bold",
        fontSize: 25,
        letterSpacing: 1
    },
    headerSubtitle: {
        fontSize: 13,
        color: "gray"
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    connected: {
        paddingHorizontal: 15,
        paddingVertical: 4,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "green",
        color: "green",
        fontSize: 12
    },
    disconnected: {
        paddingHorizontal: 15,
        paddingVertical: 4,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "red",
        color: "red",
        fontSize: 12
    },
    configButton: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#F8F9FC",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#AEB5C0",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.22,
        shadowRadius: 12,
        elevation: 6,
    },
    fCardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        marginTop: 30,
    },
});