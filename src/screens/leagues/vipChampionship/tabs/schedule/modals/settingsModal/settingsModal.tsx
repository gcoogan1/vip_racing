import { useSelector } from "react-redux";
import CarCutout from "../../../../../../../assets/carCutout.png"
import {
  ModalContent,
  TitleContainer,
  ModalTitle,
  ModalSubtitle,
  ModalSubtitleColor,
  ContentSection,
  SubtitleContainer,
  SettingsTable,
  SettingsTableHeader,
  SettingsTableTitle,
  SettingsDetail,
  SettingsDetailTitle,
  SettingsDetailText,
  SettingsTableContent,
  TableContainerRow,
  SmallSettingsTableContent,
  CarSettingsDetail,
  CarSettingsImage,
} from "./settingsModal.styles";

import { selectSessionDetailsById } from "../../../../../../../store/selectors/sessionSelectors";

type SettingsModalProps = {
  sessionId: number;
};

const SettingsModal = ({ sessionId }: SettingsModalProps) => {


  const settings = useSelector(selectSessionDetailsById(sessionId));

  return (
    <>
      <ModalContent>
        <TitleContainer>
          <SubtitleContainer>
            <ModalSubtitleColor>{settings?.raceDayName}- {settings?.sessionName}</ModalSubtitleColor>
            <ModalSubtitle>SATURDAY, 28 Jan 2026 · 9:00PM EST</ModalSubtitle>
          </SubtitleContainer>
          <ModalTitle>Nurburgring GP</ModalTitle>
        </TitleContainer>
        <ContentSection>
          <TableContainerRow>
            <SettingsTable isSmall>
              <SettingsTableHeader>
                <SettingsTableTitle>Session</SettingsTableTitle>
              </SettingsTableHeader>
              <SmallSettingsTableContent>
                <SettingsDetail>
                  <SettingsDetailTitle>Track</SettingsDetailTitle>
                  <SettingsDetailText>Practice 1</SettingsDetailText>
                </SettingsDetail>
                <SettingsDetail>
                  <SettingsDetailTitle>Track</SettingsDetailTitle>
                  <SettingsDetailText>Practice 1</SettingsDetailText>
                </SettingsDetail>
              </SmallSettingsTableContent>
            </SettingsTable>
            <SettingsTable isSmall isCar>
              <SettingsTableHeader>
                <SettingsTableTitle>Session</SettingsTableTitle>
              </SettingsTableHeader>
              <SmallSettingsTableContent>
                <CarSettingsDetail>
                  <SettingsDetailTitle>Car</SettingsDetailTitle>
                  <SettingsDetailText>Nissan GT-R NISMO GT3 '18</SettingsDetailText>
                </CarSettingsDetail>
                  <CarSettingsImage src={CarCutout} alt="Car Image" />
              </SmallSettingsTableContent>
            </SettingsTable>
          </TableContainerRow>
          <SettingsTable>
            <SettingsTableHeader>
              <SettingsTableTitle>Session</SettingsTableTitle>
            </SettingsTableHeader>
            <SettingsTableContent>
              <SettingsDetail>
                <SettingsDetailTitle>Track</SettingsDetailTitle>
                <SettingsDetailText>Practice 1</SettingsDetailText>
              </SettingsDetail>
              <SettingsDetail>
                <SettingsDetailTitle>Track</SettingsDetailTitle>
                <SettingsDetailText>Practice 1</SettingsDetailText>
              </SettingsDetail>
              <SettingsDetail>
                <SettingsDetailTitle>Track</SettingsDetailTitle>
                <SettingsDetailText>Practice 1</SettingsDetailText>
              </SettingsDetail>
              <SettingsDetail>
                <SettingsDetailTitle>Track</SettingsDetailTitle>
                <SettingsDetailText>Practice 1</SettingsDetailText>
              </SettingsDetail>
              <SettingsDetail>
                <SettingsDetailTitle>Track</SettingsDetailTitle>
                <SettingsDetailText>Practice 1</SettingsDetailText>
              </SettingsDetail>
              <SettingsDetail>
                <SettingsDetailTitle>Track</SettingsDetailTitle>
                <SettingsDetailText>Practice 1</SettingsDetailText>
              </SettingsDetail>
              <SettingsDetail>
                <SettingsDetailTitle>Track</SettingsDetailTitle>
                <SettingsDetailText>Practice 1</SettingsDetailText>
              </SettingsDetail>
            </SettingsTableContent>
          </SettingsTable>
        </ContentSection>
      </ModalContent>
    </>
  );
};

export default SettingsModal;
