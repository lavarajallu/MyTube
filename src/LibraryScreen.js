import React from "react";
import { StyleSheet,StatusBar, Text, View, SafeAreaView } from "react-native";
import Header from "./components/Header";

function LibraryScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#E62116" />
            <Header />
            <View>
                <Text>LibraryScreen</Text>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'flex-start'
    }
});

export default LibraryScreen;