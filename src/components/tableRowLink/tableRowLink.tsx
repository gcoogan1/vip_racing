import Rank from "./rank/rank"
import { LinkContainer, PlayerCell, PointsCell, DriverTeamCell, CrewCell, TimeCell, UsernameCell } from "./tableRowLink.styles"

type TableRowLinkProps = {
  rank?: number,
  participant: string,
  participantCrew?: string,
  driverTeam?: string,
  time?: string,
  points: number,
  onClick?: () => void,
}

const TableRowLink = ({ rank, participant, participantCrew, driverTeam, time, points, onClick }: TableRowLinkProps) => {

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <LinkContainer to="" onClick={handleClick}>
      {rank && <Rank rank={rank} />}
      <PlayerCell>
        <UsernameCell>{participant}</UsernameCell>
        <CrewCell>{participantCrew}</CrewCell>
      </PlayerCell>
      {driverTeam && <DriverTeamCell>{driverTeam}</DriverTeamCell>}
      {time && <TimeCell>{time}</TimeCell>}
      <PointsCell>{points}</PointsCell>
    </LinkContainer>
  )
}

export default TableRowLink