import React from "react";
import {
  Card,
  CardColumn,
  Heading,
  SubHeading,
  ImgWrapper,
  Button,
} from "../../pages/Home.style";
import Image from "next/image";
import Link from "next/link";
import Dp from "../../public/images/Spotify-1624553216310.png";
export default function EventItems(props) {
  const { title, description, id } = props;
  return (
    <Card>
      <CardColumn>
        <Heading>{title}</Heading>
        <SubHeading>{description}</SubHeading>
        <Button>
          <Link href={`/events/${id}`}>
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
}
