
import React from "react";
import axios from "axios";
import AppContainer from './navigation'

export default class App extends React.Component {
  componentDidMount() {
    let url = "http://localhost:5000/api/profile"
    axios.get(url).then(res => console.log(res.data))
  }
  render() {
    return <AppContainer />;
  }
}
