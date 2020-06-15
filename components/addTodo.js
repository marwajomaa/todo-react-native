import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function AddTodo({ addTodoHandler }) {
  const [text, setText] = useState("");

  const onChangeText = (text) => {
    setText(text);
  };

  const onPressHandle = () => {
    addTodoHandler(text);
    setText("");
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={text}
        placeholder="New todo..."
      />
      <Button
        onPress={onPressHandle}
        title="Add"
        color="coral"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 40,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
