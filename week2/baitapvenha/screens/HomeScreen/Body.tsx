import React from "react"
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Iimages } from "../../App";

let items = [
    { name: "Photos", value: "210" },
    { name: "Followers", value: "15K" },
    { name: "Following", value: "650" },
]

interface IBodyProp {
    images: Iimages[]
}
export const Body: React.FC<IBodyProp> = ({ images }) => {
    let item = items.map((item, index) =>
        <View key={index} style={styles.wrapItem} >
            <Text style={styles.value}>{item.value}</Text>
            <Text>{item.name}</Text>
        </View>
    )
    let image = images.map((item, index) => (
        <View key={index} style={{ padding: 10 }} >
            <Image source={{ uri: item.imgSrc }} style={{ width: 100, minHeight: 100, borderRadius: 10 }} />
        </View>
    ))
    return <View style={styles.body}>
        <View style={styles.wrap}>{item}</View>
        <ScrollView>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                {image}
            </View>
        </ScrollView>
    </View>
}
const styles = StyleSheet.create({
    body: {
        flex: 0.7,
    },
    wrap: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    wrapItem: {
        alignItems: "center"
    },
    value: {
        fontSize: 18,
        fontWeight: "600"
    }

})