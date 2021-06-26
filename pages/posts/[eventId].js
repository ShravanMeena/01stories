import Image from "next/image";
import Dp from "../../public/images/Spotify-1624553216310.png";
import {
  Main,
  Heading,
  SubHeading,
  StoryDesc,
  ImgWrapper,
} from "./Event.Details.Style";
import { getEventById } from "../../data/dummyData";
import { useRouter } from "next/dist/client/router";

export default function EventDetails() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return (
      <Main>
        <Heading>No Event Found</Heading>
        <SubHeading>Please go back and click another post</SubHeading>
      </Main>
    );
  }
  return (
    <Main>
      <Heading>{event.title}</Heading>
      <SubHeading>{event.title}</SubHeading>

      <ImgWrapper>
        <Image src={Dp} alt='Picture of the author' />
      </ImgWrapper>

      <StoryDesc>{event.description}</StoryDesc>
      <StoryDesc>{event.description}</StoryDesc>
      <StoryDesc>{event.description}</StoryDesc>
      <StoryDesc>{event.description}</StoryDesc>
    </Main>
  );
}
