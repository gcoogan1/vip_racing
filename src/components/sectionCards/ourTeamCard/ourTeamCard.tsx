import React from "react";
import { CardContainer, ImageContainer, ImageWrapper, Info, TextContainer, Title } from "./ourTeamCard.styles";

type OurTeamCardProps = {
  side: "left" | "right";
  title: string;
  info: string;
  imageSrc: string;
  imgAlt: string;
}

const OurTeamCard = ({ side, title, info, imageSrc, imgAlt }: OurTeamCardProps) => {
  return (
    <CardContainer $from={side}>
      {side === "left" ? (
        <>
          <ImageWrapper $from={side}>
            <ImageContainer src={imageSrc} alt={imgAlt} loading="lazy" />
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
            <ImageContainer src={imageSrc} alt={imgAlt} loading="lazy" />
          </ImageWrapper>
        </>
      )}
    </CardContainer>
  )
}

export default React.memo(OurTeamCard);