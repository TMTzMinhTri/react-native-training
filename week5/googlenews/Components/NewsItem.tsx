import React from "react";
import { StyleSheet, Text, View, } from "react-native";
import { Card, Icon, Button } from "react-native-elements";
import moment from 'moment'
import { Iarticle } from "../modal";


interface IPropsNewsItem {
    articles: Iarticle
}

export const NewsItem: React.FC<IPropsNewsItem> = ({ articles }) => {
    return <Card title={articles.title} image={{ uri: articles.urlToImage }}>
        <View style={styles.row}>
            <Text style={styles.label}>Source</Text>
            <Text style={styles.info}>{articles.source.name}</Text>
        </View>
        <Text>{articles.content}</Text>
        <View style={styles.row}>
            <Text style={styles.label}>Published</Text>
            <Text style={styles.info}>
                {moment(articles.publishedAt).format('LLL')}
            </Text>
        </View>
        <Button
            title="Read more"
            icon={<Icon name="rowing" />} />
    </Card>
}

const styles = StyleSheet.create({
    containerFlex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    header: {
        height: 30,
        width: '100%',
        backgroundColor: 'pink'
    },
    row: {
        flexDirection: 'row'
    },
    label: {
        fontSize: 16,
        color: 'black',
        marginRight: 10,
        fontWeight: 'bold'
    },
    info: {
        fontSize: 16,
        color: 'grey'
    }
});