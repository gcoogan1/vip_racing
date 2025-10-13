import { RankContainer } from './rank.styles'

type RankProps = {
  rank: number;
}

const Rank = ({ rank }: RankProps) => {

  const rankBadgeColor = () => {
    if (rank === 1) return "linear-gradient(270deg, #D0BA03 0%, rgba(208, 186, 3, 0) 100%)";  // --> 1st place
    if (rank === 2) return "linear-gradient(270deg, #7A7675 0%, rgba(122, 118, 117, 0) 100%)"; // --> 2nd place
    if (rank === 3) return "linear-gradient(270deg, #3C2617 0%, rgba(60, 38, 23, 0) 100%)"; // --> 3rd place
    return "transparent"; // Default color for other ranks
  }

  return (
    <RankContainer style={{ background: rankBadgeColor(), boxShadow: rank === 1 ? "8px 0px 16px 0px rgba(208, 186, 3, 0.3)" : "none" }}>
      {rank}
    </RankContainer>
  )
}

export default Rank