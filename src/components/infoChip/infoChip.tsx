import { Description, InfoChipContainer, NumberContainer, Subtitle, Title } from './infoChip.styles';

type InfoChipProps = {
  rounds: number;
  description: string;
}

const InfoChip = ({ rounds, description }: InfoChipProps) => {
  return (
    <InfoChipContainer>
      <NumberContainer>
        <Title>{rounds}</Title>
        <Subtitle>ROUNDS</Subtitle>
      </NumberContainer>
      <Description>{description}</Description>
    </InfoChipContainer>
  )
}

export default InfoChip