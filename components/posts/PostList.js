import React from "react";
import { Column } from "../../pages/Home.style";
import PostItem from "./PostItem";

export default function PostList(props) {
  const { items } = props;
  return (
    <Column>
      {items.map((item) => {
        return (
          <PostItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        );
      })}
    </Column>
  );
}
