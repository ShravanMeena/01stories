import React from "react";
import { Tag, Text } from "../../pages/Home.style";

export default function TagItem(props) {
  const { item, key } = props;
  return (
    <Tag key={key}>
      <Text>{item}</Text>
    </Tag>
  );
}
