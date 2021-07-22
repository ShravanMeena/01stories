import React from "react";
import {
  TrendColumn,
  TrendHeading,
  NumberText,
  TrendSubHeading,
} from "../../pages/Home.style";

export default function EventItems(props) {
  const { item, key } = props;
  return (
    <TrendColumn key={key}>
      <TrendHeading>
        <NumberText>0{item}</NumberText> Why I’m Leaving Mumford & Sons
      </TrendHeading>
      <TrendSubHeading>Why I’m Leaving Mumford & Sons</TrendSubHeading>
    </TrendColumn>
  );
}
