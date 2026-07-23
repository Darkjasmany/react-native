import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

interface FABProps {
  label: string;
  position?: "left" | "right"; // Optional prop to determine the position of the FAB

  // Methods
  onPress: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label,
  position = "right",
  onPress,
  onLongPress,
}: FABProps) {
  return (
    <Pressable
      style={(pressed) => [
        styles.floatingButton,
        position === "right" ? styles.positionRight : styles.positionLeft,
        pressed ? { opacity: 0.7 } : { opacity: 1 }, // Change opacity when pressed
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "#fff", fontWeight: "bold" }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#65558F",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },

  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
