import Button from "../../button/button";
import ArrowRight from "../../../assets/icon/ArrowRight.svg?react";
import {
  ButtonContainer,
  RegistrationContainer,
  Subtitle,
  SubtitleSpan,
  TextContainer,
  Title,
} from "./registration.styles";

const Registration = () => {
  return (
    <RegistrationContainer>
      <TextContainer>
        <Title>Limited Spots Available</Title>
        <Subtitle>2026 Season <SubtitleSpan>Registration Now Open!</SubtitleSpan></Subtitle>
      </TextContainer>
      <ButtonContainer>
        <Button
        onClick={() => {}}
        label="Join Now"
        icon={<ArrowRight />}
        variant="CTA"
      />
      </ButtonContainer>
    </RegistrationContainer>
  );
};

export default Registration;
