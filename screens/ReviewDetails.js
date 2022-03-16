import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import Card from '../shared/Card';

export default function ReviewDetails({ route }) {
  const item = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
        <Text>{item.rating}</Text>
      </Card>
    </View>
  );
}