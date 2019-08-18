import React from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList, Text, SafeAreaView, Linking } from 'react-native';
import axios, { AxiosResponse } from "axios";
import { Iarticle, Iarticles } from './modal';
import { NewsItem } from "./Components/NewsItem";


export default function App() {
  const [loading, setLoading] = React.useState<Boolean>(true);
  const [articles, setArticles] = React.useState<Iarticle[]>([]);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [hasErrored, setHasApiError] = React.useState<Boolean>(false);
  const [lastPageReached, setLastPageReached] = React.useState<Boolean>(false);
  React.useEffect(() => {
    getNews(setArticles, setPageNumber, setLoading, setHasApiError, pageNumber, articles, lastPageReached, setLastPageReached)
  }, [articles])
  const newgetnews = async () => {
    return await getNews(setArticles, setPageNumber, setLoading, setHasApiError, pageNumber, articles, lastPageReached, setLastPageReached)
  }
  return (
    <SafeAreaView style={styles.container}>
      {loading
        ? <ActivityIndicator size="large" />
        : hasErrored
          ? <Text>Error =(</Text>
          : < React.Fragment >
            <View style={styles.row}>
              <Text style={styles.label}>Articles Count:</Text>
              <Text style={styles.info}>{articles.length}</Text>
            </View>
            <FlatList
              data={articles}
              renderItem={({ item }) => <NewsItem articles={item} onPress={(url) => onPress(url)} />}
              onEndReached={newgetnews}
              onEndReachedThreshold={1}
              keyExtractor={(item) => `${item.title}`}
              ListFooterComponent={loading
                ? <ActivityIndicator size="large" />
                : lastPageReached
                  ? <Text>No more articles</Text>
                  : null}
            />
          </React.Fragment>
      }
    </SafeAreaView>
  );
}

const getNews = async (setArticles: Function, setPageNumber: Function, setLoading: Function, setHasApiError: Function,
  pageNumber: number, articles: Array<Iarticle>, lastPageReached: Boolean, setLastPageReached: Function) => {
  const apiKey = "285dbc41a32a4a50a1df9633171cfb0e"
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  if (lastPageReached) return;
  setLoading(true)
  try {
    const res: AxiosResponse<Iarticles> = await axios.get(url)
    let articlesData: Array<Iarticle> = res.data.articles
    const hasMoreArticles = articlesData.length > 0;
    if (hasMoreArticles) {
      const newArticleList = filterForUniqueArticles(articles.concat(articlesData));
      setArticles(newArticleList)
      setPageNumber(pageNumber + 1);
    } else {
      setLastPageReached(true);
    }
  } catch (error) {
    setHasApiError(true);
  }
  setLoading(false);
};

const filterForUniqueArticles = (arr: Array<Iarticle>) => {
  const cleaned = [];
  arr.forEach(itm => {
    let unique = true;
    cleaned.forEach(itm2 => {
      const isEqual = JSON.stringify(itm) == JSON.stringify(itm2);
      if (isEqual) unique = false;
    });
    if (unique) cleaned.push(itm);
  });
  return cleaned;
};

const onPress = url => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URL: ${url}`);
    }
  });
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
