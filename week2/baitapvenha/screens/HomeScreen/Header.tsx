import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { styleCommon } from "../../Utils";
import { MaterialIcons } from '@expo/vector-icons';

export const Header = () => {
    return <View style={styles.header}>
        <Image
            style={styles.avata}
            source={require("../../assets/avata.jpg")} />
        <View style={styleCommon.marginLeft30}>
            <Text style={styles.title}>Trần Minh Tri</Text>
            <Text style={styles.subtitle}>Frontend Developer</Text>
            <View style={styleCommon.directionRow}>
                <TouchableOpacity >
                    <View style={styles.btnFollow}>
                        <Text style={styleCommon.colorWhite}>Follow</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.btnShare}>
                        <MaterialIcons name="send" size={18} color="#fff" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    header: {
        flex: 0.2,
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
    btnFollow: {
        paddingVertical: 8,
        paddingHorizontal: 7,
        backgroundColor: "#3b71ff",
        width: 100,
        alignItems: "center",
        borderRadius: 50,
        color: "#fff"
    },
    btnShare: {
        paddingVertical: 8,
        paddingHorizontal: 7,
        backgroundColor: "#56d8fe",
        width: 60,
        borderRadius: 50,
        alignItems: "center",
        marginLeft:10
    }
});
