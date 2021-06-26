import {
  Header,
  HeaderHeading,
  SpanText,
  RightHeader,
  Icon,
} from "../../pages/Home.style";
import { FaRegBookmark, FaSearch, FaRegBell } from "react-icons/fa";

export default function header() {
  return (
    <Header>
      <HeaderHeading>
        <SpanText>01</SpanText>
        Stories
      </HeaderHeading>

      <RightHeader>
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
