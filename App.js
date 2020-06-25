import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const deleteItem = (key) => {
    setTodos((PrevTodos) => {
      return PrevTodos.filter((item) => item.key !== key);
    });
  };

  const addTodoHandler = (val) => {
    if (val.length > 3) {
      setTodos((prevTodos) => [
        { text: val, key: Math.floor(Math.random() * 2) },
        ...prevTodos,
      ]);
      setIsAddMode(false);
    } else {
      Alert.alert("OOPS", "todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  const cancelAddTodo = () => {
    setIsAddMode(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <Button title="Add New ToDo" onPress={() => setIsAddMode(true)} />
        <AddTodo
          visible={isAddMode}
          cancelAddTodo={cancelAddTodo}
          addTodoHandler={addTodoHandler}
        />
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
    </TouchableWithoutFeedback>
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
