import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Itodo } from '../index';


interface IPropsTodoItem {
    todo: Itodo,
    onToggleTodo: Function,
    onDeleteTodo: Function
}
export enum statusItem {
    active = "Active",
    done = "Done"
}
export const TodoItem: React.SFC<IPropsTodoItem> = ({ todo: { body, id, status }, onDeleteTodo, onToggleTodo }) => {
    const statusStyle = {
        backgroundColor: status === statusItem.done ? 'blue' : 'green'
    };

    return <TouchableOpacity
        style={[styles.todoItem, statusStyle]}
        onPress={() => clickItem(id, onToggleTodo)}
        onLongPress={() => deleteTodo(id, body, onDeleteTodo)}>
        <Text style={styles.todoText}>
            {id}: {body}
        </Text>
    </TouchableOpacity>
};

const deleteTodo = (id: number, body: string, onDeleteTodo: Function) => {
    const prompt = body
    Alert.alert('Delete your todo?', prompt,
        [
            { text: "Cancel", style: "destructive" },
            { text: "OK", onPress: () => onDeleteTodo(id) }
        ], { cancelable: true })
}


const clickItem = (id: number, onToggleTodo: Function) => {
    onToggleTodo(id)
}

const styles = StyleSheet.create({
    todoItem: {
        margin: 5,
        padding: 10,
        width: '95%',
        minHeight: 20,
        color: 'white',
        borderRadius: 5,
        flexWrap: 'wrap'
    },
    todoText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }

});