import * as React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { TodoItem, statusItem } from "./todoItem";
import { TODOS } from "./data";

export interface Itodo {
    id: number;
    status: string;
    body: string
}
interface IStateAllScreen {
    todoList: Itodo[],
    todoBody: string
}


export class AllScreen extends React.Component<any, IStateAllScreen>{
    constructor(props) {
        super(props)
        this.state = {
            todoList: TODOS,
            todoBody: ""
        }
    }
    static navigationOptions = {
        title: 'TodoList',
    };

    render() {
        let { todoList, todoBody } = this.state
        return (
            <ImageBackground style={styles.container} source={{}}>
                <KeyboardAvoidingView
                    enabled
                    behavior="padding"
                    style={{}}>
                    <View style={styles.container}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={todoBody}
                                style={styles.todoInput}
                                onChangeText={text => this.setState({ todoBody: text })}
                            />
                            <TouchableOpacity style={styles.button} onPress={() => onSubmitTodo(this)}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={styles.scrollView}>

                            {todoList.map((todo, index) =>
                                <TodoItem
                                    key={index}
                                    todo={todo}
                                    onToggleTodo={(id) => onToggleTodo(this, id)}
                                    onDeleteTodo={(id) => onDeleteTodo(this, id)} />
                            )}
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const onDeleteTodo = (component: AllScreen, id) => {
    let { todoList } = component.state
    let newtodo = todoList.filter(item => item.id !== id)
    component.setState({ todoList: newtodo })
}

const onToggleTodo = (component: AllScreen, id: number) => {
    let { todoList } = component.state
    const todo = todoList.find(todo => todo.id === id)
    todo.status = todo.status === statusItem.done ? statusItem.active : statusItem.done
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo
    const newTodoList = [...todoList];
    component.setState({ todoList: newTodoList }, () => {
        setTimeout(() => {
            component.props.navigation.navigate('SingleTodo', {
                updatedTodo: todo
            });
        }, 1000);
    })
}
const onSubmitTodo = (component: AllScreen, ) => {
    let { todoBody, todoList } = component.state
    const newTodo = {
        body: todoBody,
        status: statusItem.active,
        id: todoList.length + 1
    };
    const newTodoList = [...todoList, newTodo];
    component.setState({ todoList: newTodoList, todoBody: "" })
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'black',
      justifyContent: 'center'
    },
    todoInput: {
      width: '95%',
      minHeight: 30,
      color: 'white',
      borderWidth: 1,
      marginBottom: '5%',
      borderColor: 'grey'
    },
    inputContainer: {
      flex: 0.3,
      width: '90%',
      marginBottom: '10%',
      marginTop: '10%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      height: 50,
      width: '50%',
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: 'blue',
      justifyContent: 'center'
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold'
    },
    scrollView: {
      flex: 0.7,
    //   paddingTop: 1000
    }
  });

