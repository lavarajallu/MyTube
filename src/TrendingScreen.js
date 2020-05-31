import React from "react";
import { StyleSheet,StatusBar, Text, View, SafeAreaView } from "react-native";
import Header from "./components/Header"
function TrendingScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#E62116" />
            <Header />
            <View>
                <Text>SubscriptionScreen</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
    }
});

export default TrendingScreen;