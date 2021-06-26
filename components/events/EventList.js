import React from "react";
import { Column } from "../../pages/Home.style";
import EventItems from "./EventItems";

export default function EventList(props) {
  const { items } = props;
  return (
    <Column>
      {items.map((item) => (
        <EventItems
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </Column>
  );
}
