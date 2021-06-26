import React from "react";
import {
  TrendColumn,
  TrendHeading,
  NumberText,
  TrendSubHeading,
} from "../../pages/Home.style";

export default function EventItems(props) {
  const { item } = props;
  return (
    <TrendColumn>
      <TrendHeading>
        <NumberText>0{item}</NumberText> Why I’m Leaving Mumford & Sons
      </TrendHeading>
      <TrendSubHeading>Why I’m Leaving Mumford & Sons</TrendSubHeading>
    </TrendColumn>
  );
}
