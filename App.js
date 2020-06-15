import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const deleteItem = (key) => {
    setTodos((PrevTodos) => {
      return PrevTodos.filter((item) => item.key !== key);
    });
  };

  const addTodoHandler = (val) => {
    if (val.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: val, key: Math.floor(Math.random() * 2) },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert("OOPS", "todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddTodo addTodoHandler={addTodoHandler} />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} deleteItem={deleteItem} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
