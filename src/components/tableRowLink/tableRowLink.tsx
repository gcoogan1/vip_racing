import Rank from "./rank/rank"
import { LinkContainer, PlayerCell, PointsCell, RacingCarCell, TeamCell, TimeCell, UsernameCell } from "./tableRowLink.styles"

type TableRowLinkProps = {
  rank: number,
  username: string,
  team: string,
  racingCar: string,
  time: string,
  points: number
}

const TableRowLink = ({ rank, username, team, racingCar, time, points }: TableRowLinkProps) => {
  return (
    <LinkContainer to={`/${username}`}>
      <Rank rank={rank} />
      <PlayerCell>
        <UsernameCell>{username}</UsernameCell>
        <TeamCell>{team}</TeamCell>
      </PlayerCell>
      <RacingCarCell>{racingCar}</RacingCarCell>
      <TimeCell>{time}</TimeCell>
      <PointsCell>{points}</PointsCell>
    </LinkContainer>
  )
}

export default TableRowLink