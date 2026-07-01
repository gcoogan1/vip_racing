import React from "react";
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

const VipLeaguesCard = ({
  cardImage,
  imgAlt,
  titleImg,
  title,
  subtitle,
  description,
  buttonLabel,
  buttonIcon,
  route,
}: VipLeaguesCardProps) => {
  // const navigate = useNavigate();

  // const handleNavigation = (path: string | undefined) => {
  //   if (path) {
  //     navigate(path);
  //   } else {
  //     console.error("Route is undefined");
  //   }
  // }

  const handleLeaguesClick = () => {
    if (route && route === "/leagues/vip-gt3") {
      return window.open(
        `https://motorsportleagues.com/league/45c95fc0-5a0e-4706-99e1-970173ab6353`,
        "_blank",
        "noopener,noreferrer",
      );
    } else if (route && route === "/leagues/vip-monthly-lobby") {
      return window.open(
        `https://motorsportleagues.com/league/4c3c1283-cc49-432d-8c53-869470ddced0`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      const url = "https://motorsportleagues.com/";
      return window.open(url, "_blank", "noopener,noreferrer");
    }
  };

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
          <TextInfo>{description}</TextInfo>
        </TextContent>
        <div>
          <Button
            label={buttonLabel}
            onClick={handleLeaguesClick}
            icon={buttonIcon}
          />
        </div>
      </TextContainer>
    </CardContainer>
  );
};

export default React.memo(VipLeaguesCard);
