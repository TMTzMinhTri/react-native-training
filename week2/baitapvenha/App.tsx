import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Header, Footer } from "./screens/HomeScreen";

let images = [
    { imgSrc: "https://picsum.photos/200/300" },
    { imgSrc: "https://picsum.photos/200/300" },
    { imgSrc: "https://picsum.photos/200/300" },
    { imgSrc: "https://picsum.photos/200/300" },
    { imgSrc: "https://picsum.photos/200/300" },
    { imgSrc: "https://picsum.photos/200/300" },
    { imgSrc: "https://picsum.photos/200/300" },
    { imgSrc: "https://picsum.photos/200/300" },
]
export interface Iimages{
    imgSrc: string
}

export default class App extends React.Component<{}, {}> {
    render() {
        return <View style={styles.container}>
            <Header />
            <Body images={images} />
            <Footer />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
