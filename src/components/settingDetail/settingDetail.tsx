import { BottomText, SettingDetailContainer, TopText } from './settingDetail.styles'

type SettingDetailProps = {
  setting: string;
  value: string;
}

const SettingDetail = ({ setting, value }: SettingDetailProps) => {
  return (
    <SettingDetailContainer>
      <TopText>{setting}</TopText>
      <BottomText>{value}</BottomText>
    </SettingDetailContainer>
  )
}

export default SettingDetail