import { TableContainer, TitleContainer, TableTitle, TableSubtitle, TableHeader, Table, TableRow, TableCell } from "./sportModeTable.styles"

type SportModeProps = {
  raceName: string;
  circuit: string;
  stats: {
    rank: number | string;
    driver: string;
    time: string;
  }[];
}

const SportModeTable = ({ raceName, circuit, stats }: SportModeProps) => {
  return (
    <TableContainer>
      <TitleContainer>
        <TableTitle>{raceName}</TableTitle>
        <TableSubtitle>{circuit}</TableSubtitle>
      </TitleContainer>
      <Table>
        <TableHeader>Rank</TableHeader>
        <TableHeader>Driver</TableHeader>
        <TableHeader>Time</TableHeader>
        {stats.map((race) => (
          <TableRow key={race.driver}>
            <TableCell>{race.rank}</TableCell>
            <TableCell>{race.driver}</TableCell>
            <TableCell>{race.time}</TableCell>
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  )
}

export default SportModeTable