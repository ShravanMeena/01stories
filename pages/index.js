import {
  Container,
  Row,
  Column,
  SubHeading,
  Topic,
  Tag,
  Text,
  TrendingRow,
  TrendColumn,
  TrendHeading,
  TrendSubHeading,
  NumberText,
} from "./Home.style";

import EventList from "../components/events/EventList";
import TrendList from "../components/trendPosts/TrendList";
import TagList from "../components/tag/TagList";
import { getFeaturedEvents } from "../data/dummyData";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <>
      <TrendList items={[1, 2, 3, 4, 5, 6]} />
      <Container>
        <Row>
          <EventList items={featuredEvents} />
          <TagList items={[1, 2, 3, 4, 5, 6]} />
        </Row>
      </Container>
    </>
  );
}
