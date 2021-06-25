import Image from "next/image";
import Dp from "../../public/images/Spotify-1624553216310.png";
import {
  Main,
  Heading,
  SubHeading,
  StoryDesc,
  ImgWrapper,
} from "./Event.Details.Style";

export default function EventDetails() {
  return (
    <Main>
      <Heading>
        This Long-Awaited Technology May Finally Change the World
      </Heading>
      <SubHeading>
        Solid-state batteries are poised to emerge in the coming years
      </SubHeading>

      <ImgWrapper>
        <Image src={Dp} alt='Picture of the author' />
      </ImgWrapper>

      <StoryDesc>
        After conducting the immunisation programme, Manti has to travel 25
        kilometres to the Chetma Health Centre from Mahuadanr, where she lives
        with her husband, Sunil Oraon. Sunil lost his job during the lockdown,
        which makes Manti the sole breadwinner in the family. Apart from
        visiting villages six days a week, she has the responsibility of taking
        care of the child and feed the family. Manti said she visits Tisiya,
        Goira, and Sugabandh villages at least once every month, and has to
        cross river Burra at three different places. Her husband helps her cover
        a part of the journey due to the unavailability of public transport
        caused by the lockdown. Amit Khalkho, a medical officer at Chetma health
        sub-centre, said: “Manti travelling the entire distance along with her
        daughter on her back is really commendable.” The way Manti has taken the
        responsibility of not only her family but all the other children in a
        region, which lacks proper healthcare facilities, fills us with hope and
        admiration.
      </StoryDesc>

      <StoryDesc>
        After conducting the immunisation programme, Manti has to travel 25
        kilometres to the Chetma Health Centre from Mahuadanr, where she lives
        with her husband, Sunil Oraon. Sunil lost his job during the lockdown,
        which makes Manti the sole breadwinner in the family. Apart from
        visiting villages six days a week, she has the responsibility of taking
        care of the child and feed the family. Manti said she visits Tisiya,
        Goira, and Sugabandh villages at least once every month, and has to
        cross river Burra at three different places. Her husband helps her cover
        a part of the journey due to the unavailability of public transport
        caused by the lockdown. Amit Khalkho, a medical officer at Chetma health
        sub-centre, said: “Manti travelling the entire distance along with her
        daughter on her back is really commendable.” The way Manti has taken the
        responsibility of not only her family but all the other children in a
        region, which lacks proper healthcare facilities, fills us with hope and
        admiration.
      </StoryDesc>

      <StoryDesc>
        After conducting the immunisation programme, Manti has to travel 25
        kilometres to the Chetma Health Centre from Mahuadanr, where she lives
        with her husband, Sunil Oraon. Sunil lost his job during the lockdown,
        which makes Manti the sole breadwinner in the family. Apart from
        visiting villages six days a week, she has the responsibility of taking
        care of the child and feed the family. Manti said she visits Tisiya,
        Goira, and Sugabandh villages at least once every month, and has to
        cross river Burra at three different places. Her husband helps her cover
        a part of the journey due to the unavailability of public transport
        caused by the lockdown. Amit Khalkho, a medical officer at Chetma health
        sub-centre, said: “Manti travelling the entire distance along with her
        daughter on her back is really commendable.” The way Manti has taken the
        responsibility of not only her family but all the other children in a
        region, which lacks proper healthcare facilities, fills us with hope and
        admiration.
      </StoryDesc>
    </Main>
  );
}
