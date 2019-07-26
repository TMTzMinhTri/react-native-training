import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import * as Utils from '../../utils'


export const ListNewFeed = () => {
    return <View style={styles.wrapper}>
        <View style={styles.wrapperInfo}>
            <Image source={{ uri: "https://picsum.photos/200" }} style={styles.avata} />
            <Text style={styles.name}>Trần Minh Trí</Text>
        </View>
        <View style={styles.wrapImage}>
            <Image source={{ uri: "https://picsum.photos/200/300" }} resizeMode="cover" style={styles.mainImage} />
        </View>
        <View style={styles.control}>
            <Feather name="inbox" size={27} color="black" />
            <Feather name="inbox" size={27} color="black" />
            <Feather name="inbox" size={27} color="black" />
            <Feather name="inbox" size={27} color="black" />
        </View>
    </View>
}


const styles = StyleSheet.create({
    wrapper: {
        marginTop: 30,
        flexDirection: "column"
    },
    wrapperInfo: {
        marginLeft: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    avata: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    name: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "600"
    },
    wrapImage: {
        marginVertical: 10
    },
    mainImage: {
        maxHeight: 200,
        width: "100%",
        height: "100%"
    },
    control: {
        width: 100,
        height: 100,
        // position: "absolute",
        flexDirection: "row"
    }
})