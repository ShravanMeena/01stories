import React from "react";
import { Tag, Text } from "../../pages/Home.style";

export default function TagItem(props) {
  const { title, description, item } = props;
  return (
    <Tag>
      <Text>{item}</Text>
    </Tag>
  );
}
