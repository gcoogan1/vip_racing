import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../button/button";
import {
  CardContainer,
  ImageContainer,
  ImageWrapper,
  Subtitle,
  TextContainer,
  TextContent,
  TextInfo,
  Title,
  TitleContainer,
  TitleImg,
} from "./vipLeaguesCard.styles";

type VipLeaguesCardProps = {
  cardImage: string;
  imgAlt: string;
  titleImg: string;
  title: string;
  subtitle: string;
  description: string;
  buttonLabel: string;
  route?: string;
  buttonIcon?: React.ReactNode;
};

const VipLeaguesCard = ({ cardImage, imgAlt, titleImg, title, subtitle, description, buttonLabel, buttonIcon }: VipLeaguesCardProps) => {
  // const navigate = useNavigate();

  // const handleNavigation = (path: string | undefined) => {
  //   if (path) {
  //     navigate(path);
  //   } else {
  //     console.error("Route is undefined");
  //   }
  // }

  const handleLeaguesClick = () => {
    const url = "https://motorsportleagues.com/";
    return window.open(url, "_blank", "noopener,noreferrer");
  }
  
  return (
    <CardContainer>
      <ImageWrapper>
        <ImageContainer src={cardImage} alt={imgAlt} loading="lazy" />
      </ImageWrapper>
      <TextContainer>
        <TextContent>
          <TitleContainer>
            <TitleImg>{titleImg}</TitleImg>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </TitleContainer>
          <TextInfo>
            {description}
          </TextInfo>
        </TextContent>
        <div>
          <Button label={buttonLabel} onClick={handleLeaguesClick} icon={buttonIcon} />
        </div>
      </TextContainer>
    </CardContainer>
  );
};

export default React.memo(VipLeaguesCard);
