import React from "react";
import { TrendingRow } from "../../pages/Home.style";
import TrendItem from "./TrendItem";

export default function EventList(props) {
  const { items } = props;
  return (
    <TrendingRow>
      {items.map((item) => {
        return <TrendItem item={item} key={item.id} />;
      })}
    </TrendingRow>
  );
}
