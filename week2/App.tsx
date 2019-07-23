import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Header, Footer } from "./screens/HomeScreen";


export default function App() {
    return <View style={styles.container}>
        <Header />
        <Body />
        <Footer />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
