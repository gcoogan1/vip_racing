import { Description, InfoChipContainer, NumberContainer, Subtitle, Title } from './InfoChip.styles';

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