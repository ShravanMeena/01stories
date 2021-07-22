import React from "react";
import { Column, SubHeading, Topic } from "../../pages/Home.style";
import TagItem from "./TagItem";

export default function TagList(props) {
  const { items } = props;
  return (
    <Column>
      <SubHeading>RECOMMENDED TOPICS</SubHeading>
      <Topic>
        {items.map((item) => {
          return <TagItem item={item} key={item.id} />;
        })}
      </Topic>
    </Column>
  );
}
