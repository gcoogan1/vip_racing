import { useSelector } from "react-redux";
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
import { Races } from "../../../../../../../util/data/temp/vipMonthlyRaceSettings";
import { raceSettingsSchema } from "../../../../../../../types/raceSettingTypes";
import { formatRaceDate } from "../../../../../../../util/helper/helperFunctions";

type SettingsModalProps = {
  sessionId: number;
};

const SettingsModal = ({ sessionId }: SettingsModalProps) => {
  const settings = useSelector(selectSessionDetailsById(sessionId));
  const raceSettings =
    settings?.sessionId &&
    Races.find((race) => race.id === settings.sessionId)?.data;

  const mappedSettings = raceSettings
    ? raceSettingsSchema.map((section) => {
        const sectionData =
          raceSettings[section.section as keyof typeof raceSettings];
        return {
          sectionLabel: section.label,
          fields: section.fields.map((field) => ({
            label: field.label,
            value: sectionData[field.key as keyof typeof sectionData] || "--",
          })),
        };
      })
    : [];

  const raceDate = settings?.startTime
    ? formatRaceDate(settings.startTime)
    : "--";

  return (
    <>
      <ModalContent>
        <TitleContainer>
          <SubtitleContainer>
            <ModalSubtitleColor>
              {settings?.splitName} - {settings?.sessionName}
            </ModalSubtitleColor>
            <ModalSubtitle>{raceDate}</ModalSubtitle>
          </SubtitleContainer>
          <ModalTitle>{settings?.track}</ModalTitle>
        </TitleContainer>
        <ContentSection>
          <TableContainerRow>
            <SettingsTable isSmall>
              <SettingsTableHeader>
                <SettingsTableTitle>Track Settings</SettingsTableTitle>
              </SettingsTableHeader>
              <SmallSettingsTableContent>
                <SettingsDetail>
                  <SettingsDetailTitle>Track</SettingsDetailTitle>
                  <SettingsDetailText>{settings?.track}</SettingsDetailText>
                </SettingsDetail>
                <SettingsDetail>
                  <SettingsDetailTitle>No. of Laps</SettingsDetailTitle>
                  <SettingsDetailText>{settings?.numLaps}</SettingsDetailText>
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
                  <SettingsDetailText>{settings?.car}</SettingsDetailText>
                  {settings?.secondCar && (
                    <SettingsDetailText>
                      {settings.secondCar}
                    </SettingsDetailText>
                  )}
                </CarSettingsDetail>
                <CarSettingsImage
                  src={settings?.carImageUrlNoBg}
                  alt="Car Image"
                  $double={!!settings?.secondCar}
                />
              </SmallSettingsTableContent>
            </SettingsTable>
          </TableContainerRow>
          {mappedSettings.map((setting, index) => (
            <SettingsTable key={index}>
              <SettingsTableHeader>
                <SettingsTableTitle>{setting.sectionLabel}</SettingsTableTitle>
              </SettingsTableHeader>
              <SettingsTableContent>
                {setting.fields.map((field, fieldIndex) => (
                  <SettingsDetail key={fieldIndex}>
                    <SettingsDetailTitle>{field.label}</SettingsDetailTitle>
                    <SettingsDetailText>{field.value}</SettingsDetailText>
                  </SettingsDetail>
                ))}
              </SettingsTableContent>
            </SettingsTable>
          ))}
        </ContentSection>
      </ModalContent>
    </>
  );
};

export default SettingsModal;
