import { Container, Row, ColumnFirst } from "./Home.style";

import PostList from "../components/posts/PostList";
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
          <ColumnFirst>
            <PostList items={featuredEvents} />
          </ColumnFirst>
          <TagList items={[1, 2, 3, 4, 5, 6]} />
        </Row>
      </Container>
    </>
  );
}
