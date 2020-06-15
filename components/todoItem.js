import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function todoItem({ item, deleteItem }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => deleteItem(item.key)}>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
