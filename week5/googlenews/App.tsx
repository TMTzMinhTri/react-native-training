import React from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList, Text, SafeAreaView } from 'react-native';
import axios from "axios";
import { Iarticle } from './modal';
import { NewsItem } from "./Components/NewsItem";


export default function App() {
  const [loading, setLoading] = React.useState<Boolean>(true);
  const [articles, setArticles] = React.useState<Iarticle[]>();
  const [pageNumber, setPageNumber] = React.useState<number>(1);

  React.useEffect(() => {
    const fetchdata = async () => {
      let result = await getNews()
      setArticles(result.articles)
      setPageNumber(pageNumber + 1);
      setLoading(false)
    }
    fetchdata()
  }, [getNews])

  return (
    <SafeAreaView style={styles.container}>
      {loading
        ? <ActivityIndicator size="large" />
        : <React.Fragment>
          <View style={styles.row}>
            <Text style={styles.label}>Articles Count:</Text>
            <Text style={styles.info}>{articles.length}</Text>
          </View>
          <FlatList
            data={articles}
            renderItem={({ item }) => <NewsItem articles={item} />}
            onEndReached={getNews}
            onEndReachedThreshold={1}
            keyExtractor={(item) => `${item.title}`}
            ListFooterComponent={<ActivityIndicator size="large" />}
          />
        </React.Fragment>
      }
    </SafeAreaView>
  );
}

const getNews = async () => {
  const apiKey = "285dbc41a32a4a50a1df9633171cfb0e"
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  const res = await axios.get(url)
  return res.data
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  }, info: {
    fontSize: 16,
    color: 'grey'
  }
});
