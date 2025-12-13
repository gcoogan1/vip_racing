import { Description, InfoChipContainer, NumberContainer, Subtitle, Title } from './infoChip.styles';

type InfoChipProps = {
  rounds: number;
  category: string;
  description: string;
}

const InfoChip = ({ rounds, category, description }: InfoChipProps) => {
  return (
    <InfoChipContainer>
      <NumberContainer>
        <Title>{rounds}</Title>
        <Subtitle>{category}</Subtitle>
      </NumberContainer>
      <Description>{description}</Description>
    </InfoChipContainer>
  )
}

export default InfoChip