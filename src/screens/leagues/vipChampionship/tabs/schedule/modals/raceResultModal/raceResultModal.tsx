import { useSelector } from "react-redux";
import { selectSessionDetailsById } from "../../../../../../../store/selectors/sessionSelectors";

type RaceResultModalProps = {
  sessionId: number;
  onClose: () => void;
}

const RaceResultModal = ({ sessionId, onClose }: RaceResultModalProps) => {

  const sessionResults = useSelector(selectSessionDetailsById(sessionId));
  console.log("Results in modal:", sessionResults);
  return (
    <div>raceResultModal</div>
  )
}

export default RaceResultModal