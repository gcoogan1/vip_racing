import { CardContainer, ImageContainer, ImageWrapper, Info, TextContainer, Title } from "./ourTeamCard.styles";

type OurTeamCardProps = {
  side: "left" | "right";
  title: string;
  info: string;
  imageSrc: string;
}

const OurTeamCard = ({ side, title, info, imageSrc }: OurTeamCardProps) => {
  return (
    <CardContainer $from={side}>
      {side === "left" ? (
        <>
          <ImageWrapper $from={side}>
            <ImageContainer src={imageSrc} alt="Racing Cars in Forest" />
          </ImageWrapper>
          <TextContainer>
            <Title>{title}</Title>
            <Info>{info}</Info>
          </TextContainer>
        </>
      ) : (
        <>
          <TextContainer>
            <Title>{title}</Title>
            <Info>{info}</Info>
          </TextContainer>
          <ImageWrapper $from={side}>
            <ImageContainer src={imageSrc} alt="Racing Cars in Forest" />
          </ImageWrapper>
        </>
      )}
    </CardContainer>
  )
}

export default OurTeamCard;