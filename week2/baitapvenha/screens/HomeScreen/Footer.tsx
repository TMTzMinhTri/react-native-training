import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';


export const Footer = () => {
    return <View style={styles.footer}>
        <TouchableOpacity>
            <Octicons name="link" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons name="ios-add-circle-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
            <MaterialIcons name="person-outline" size={30} />
        </TouchableOpacity>
    </View>
}
const styles = StyleSheet.create({
    footer: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 50
    }
})