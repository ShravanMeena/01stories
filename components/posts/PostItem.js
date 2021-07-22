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

export default function PostItem(props) {
  const { title, description, id } = props;
  return (
    <Link href={`/posts/${id}`}>
      <Card>
        <CardColumn>
          <Heading>{title}</Heading>
          <SubHeading>{description}</SubHeading>
          <Button>
            <a>Read more</a>
          </Button>
        </CardColumn>

        <CardColumn>
          <ImgWrapper>
            <Image src={Dp} alt='Picture of the author' />
          </ImgWrapper>
        </CardColumn>
      </Card>
    </Link>
  );
}
