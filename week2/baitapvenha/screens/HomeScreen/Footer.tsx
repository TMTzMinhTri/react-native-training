import React from "react"
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';


export const Footer = () => {
    return <View style={styles.footer}>
        <TouchableOpacity onPress={() => Alert.alert('Minh Tri')}>
            <Octicons name="link" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Minh Tri')}>
            <Ionicons name="ios-add-circle-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Minh Tri')}>
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