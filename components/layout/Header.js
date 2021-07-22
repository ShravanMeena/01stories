import {
  Header,
  HeaderHeading,
  SpanText,
  RightHeader,
  Icon,
} from "../../pages/Home.style";
import { FaRegBookmark, FaSearch, FaRegBell } from "react-icons/fa";
import Link from "next/link";

export default function header() {
  return (
    <Header>
      <HeaderHeading>
        <SpanText>01</SpanText>
        Stories
      </HeaderHeading>

      <RightHeader>
        <Icon>
          <Link href={`/posts/`}>All Posts</Link>
        </Icon>

        <Icon>
          <FaRegBookmark />
        </Icon>

        <Icon>
          <FaSearch />
        </Icon>

        <Icon>
          <FaRegBell />
        </Icon>
      </RightHeader>
    </Header>
  );
}
