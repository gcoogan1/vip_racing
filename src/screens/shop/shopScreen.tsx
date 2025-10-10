import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Button from "../../components/button/button";
import ArrowRight from "../../assets/icon/ArrowRight.svg?react";
import {
  SectionContainer,
  SectionContent,
  TitleContainer,
  Title,
  Subtitle,
} from "./shopScreen.styles";


const ShopScreen = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <>
    <Navbar />
    <SectionContainer>
      <SectionContent>
        <TitleContainer>
          <Title>Coming Soon</Title>
          <Subtitle>
            This page is currently under construction, please check back soon
            for updates.
          </Subtitle>
        </TitleContainer>
        <Button
          onClick={handleButtonClick}
          label="Back To Home"
          icon={<ArrowRight width={16} height={16} />}
        />
      </SectionContent>
    </SectionContainer>
    </>
  );
};

export default ShopScreen;
