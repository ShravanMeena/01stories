import PostList from "../../components/posts/PostList";
import { getAllEvents } from "../../data/dummyData";
import { Posts, PostMainTitle } from "../Home.style";
export default function AllPosts() {
  const allPosts = getAllEvents();
  return (
    <>
      <PostMainTitle>All Posts ({allPosts.length})</PostMainTitle>
      <Posts>
        <PostList items={allPosts} />
      </Posts>
    </>
  );
}
