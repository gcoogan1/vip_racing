import React from "react";
import { CardContainer, ImageContainer, ImageWrapper, Info, TextContainer, Title } from "./featureCard.styles";

type FeatureCardProps = {
  side: "left" | "right";
  title: string;
  info: string;
  imageSrc: string;
  imgAlt: string;
}

const FeatureCard = ({ side, title, info, imageSrc, imgAlt }: FeatureCardProps) => {
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

export default React.memo(FeatureCard);