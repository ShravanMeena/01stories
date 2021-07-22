import React from "react";
import { TrendingRow } from "../../pages/Home.style";
import TrendItem from "./TrendItem";

export default function EventList(props) {
  const { items } = props;
  return (
    <TrendingRow>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <TrendItem item={item} key={index} />
        </React.Fragment>
      ))}
    </TrendingRow>
  );
}
