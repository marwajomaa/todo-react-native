import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export default function AddTodo({ addTodoHandler, visible, cancelAddTodo }) {
  const [text, setText] = useState("");

  const onChangeText = (text) => {
    setText(text);
  };

  const onPressHandle = () => {
    addTodoHandler(text);
    setText("");
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={text}
          placeholder="New todo..."
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button onPress={cancelAddTodo} title="Cancel" color="gray" />
          </View>
          <View style={styles.btn}>
            <Button onPress={onPressHandle} title="Add" color="coral" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomWidth: 1.5,
    borderBottomColor: "#ddd",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  Btn: {
    width: "40%",
  },
});
