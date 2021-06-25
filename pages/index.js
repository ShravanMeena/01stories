import {
  Main,
  Container,
  Row,
  Column,
  Card,
  CardColumn,
  Heading,
  SubHeading,
  ImgWrapper,
  Topic,
  Tag,
  Text,
  TrendingRow,
  TrendColumn,
  TrendHeading,
  TrendSubHeading,
  NumberText,
  Button,
  Header,
  HeaderHeading,
  SpanText,
  RightHeader,
  Icon,
} from "./Home.style";
import Image from "next/image";
import Link from "next/link";
import Dp from "../public/images/Spotify-1624553216310.png";
import { FaRegBookmark, FaSearch, FaRegBell, FaBookOpen } from "react-icons/fa";

export default function Home() {
  return (
    <Main>
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
      <TrendingRow>
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <TrendColumn key={item}>
              <TrendHeading>
                <NumberText>0{item}</NumberText> Why I’m Leaving Mumford & Sons
              </TrendHeading>
              <TrendSubHeading>Why I’m Leaving Mumford & Sons</TrendSubHeading>
            </TrendColumn>
          );
        })}
      </TrendingRow>
      <Container>
        <Row>
          <Column>
            {[1, 2, 3, 4].map((item) => {
              return (
                <Card key={item}>
                  <CardColumn>
                    <Heading>
                      This Long-Awaited Technology May Finally Change the World
                    </Heading>
                    <SubHeading>
                      Next allows you to do server-side data-fetching, but what
                      happens when that data needs to change on the client? This
                      brief tutorial shows how to re-fetch the props without
                      doing a full server reload.
                    </SubHeading>
                    <Button>
                      <Link href='/events/id'>
                        <a>Read more</a>
                      </Link>
                    </Button>
                  </CardColumn>
                  <CardColumn>
                    <ImgWrapper>
                      <Image src={Dp} alt='Picture of the author' />
                    </ImgWrapper>
                  </CardColumn>
                </Card>
              );
            })}
          </Column>
          <Column>
            <SubHeading>RECOMMENDED TOPICS</SubHeading>
            {/*recommended topic */}
            <Topic>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((tag) => {
                return (
                  <Tag key={tag}>
                    <Text>Startups</Text>
                  </Tag>
                );
              })}
            </Topic>
          </Column>
        </Row>
      </Container>
    </Main>
  );
}
