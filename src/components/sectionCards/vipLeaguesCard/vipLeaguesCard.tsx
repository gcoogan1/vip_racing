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

const VipLeaguesCard = ({ cardImage, imgAlt, titleImg, title, subtitle, description, buttonLabel, route, buttonIcon }: VipLeaguesCardProps) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <ImageContainer src={cardImage} alt={imgAlt} />
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
          <Button label={buttonLabel} onClick={() => console.log(`Navigating to ${route}`)} icon={buttonIcon} />
        </div>
      </TextContainer>
    </CardContainer>
  );
};

export default VipLeaguesCard;
