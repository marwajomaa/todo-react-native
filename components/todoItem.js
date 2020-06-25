import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function todoItem({ item, deleteItem }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => deleteItem(item.key)}>
      <MaterialIcons name="delete" size={18} color="red" />
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
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 8,
  },
});
