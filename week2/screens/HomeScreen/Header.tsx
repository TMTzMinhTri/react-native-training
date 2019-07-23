import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { styleCommon } from "../Utils";

export const Header = () => {
    return <View style={styles.header}>
        <Image
            style={styles.avata}
            source={require("../../assets/avata.jpg")} />
        <View style={styles.wrapContent}>
            <Text style={styles.title}>Trần Minh Tri</Text>
            <Text style={styles.subtitle}>Frontend Developer</Text>
            <View style={styleCommon.directionRow}>
                <TouchableOpacity >
                    <View style={styles.btnFollow}>
                        <Text style={styles.btntext}>Follow</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.btnFollow}>
                        <Text style={styles.btntext}>Follow</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    header: {
        flex: 0.25,
        alignItems: "flex-end",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 5
    },
    subtitle: {
        color: "#aaa",
        fontSize: 17,
        marginBottom: 10
    },
    avata: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    wrapContent: {
        marginLeft: 30
    },
    wrapButton: {
        flexDirection: "row"
    },
    btnFollow: {
        paddingVertical: 8,
        paddingHorizontal: 7,
        backgroundColor: "blue",
        width: 80,
        alignItems: "center",
        borderRadius: 50,
        color: "#fff"
    },
    btntext: {
        color: "#fff"
    },
});
