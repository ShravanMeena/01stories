import React from "react";
import { Column, SubHeading, Topic } from "../../pages/Home.style";
import TagItem from "./TagItem";

export default function TagList(props) {
  const { items } = props;
  return (
    <Column>
      <SubHeading>RECOMMENDED TOPICS</SubHeading>
      <Topic>
        {items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <TagItem item={item} />
            </React.Fragment>
          );
        })}
      </Topic>
    </Column>
  );
}
