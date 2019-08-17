import * as React from 'react'
import { View, TextInput, Text, Button } from "react-native";
import axios from 'axios'

interface IStateLoginScreen {
    username: string,
    password: string,
}
export class LoginScreen extends React.Component<any, IStateLoginScreen> {
    constructor(props) {
        super(props)
        this.state = {
            username: "tmtzminhtri@gmail.com",
            password: "123456"
        }
    }
    render() {
        return <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text>Username</Text>
            <TextInput
                style={{ paddingHorizontal: 16, paddingVertical: 8, borderWidth: 2, width: "80%" }}
                onChangeText={(text) => this.setState({ username: text })}
                value={this.state.username}
            />
            <Text>password</Text>
            <TextInput
                style={{ paddingHorizontal: 16, paddingVertical: 8, borderWidth: 2, width: "80%" }}
                onChangeText={(text) => this.setState({ password: text })}
                secureTextEntry={true}
                value={this.state.password}

            />
            <Button title="Sign in" onPress={() => submit(this)} />
        </View>
    }
}

const submit = (component: LoginScreen) => {
    let { password, username } = component.state
    const url = "http://localhost:5000/api/auth"
    let data = {
        email: username,
        password
    }
    axios.post(url, data).then(res => console.log(res.data)).catch(err => console.log(err))
}

