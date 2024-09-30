import { View } from 'react-native';
import { seasonOverviewStyles } from '../styles/SeasonOverviewStyles';
import { TeamStanding } from '../models';
import { Row, Rows, Table } from 'react-native-reanimated-table';

interface Props {
  standings: TeamStanding[];
}

export default function StandingsList({ standings }: Props) {
  const tableHead = ['#', "Team", "MP", "GD", "PTS"];
  const tableData = standingsToArray()


  return (
    <View style={seasonOverviewStyles.tableContainer}>
      <Table>
        <Row data={tableHead} style={seasonOverviewStyles.tableHeaderRow} textStyle={seasonOverviewStyles.tableHeaderText}/>
        <Rows data={tableData} style={seasonOverviewStyles.tableRow} textStyle={seasonOverviewStyles.tableText}/>
      </Table>
    </View>
  );

  function standingsToArray() {
    return standings.sort((a, b) => {
      return a.rank - b.rank;
    }).map(standing => [standing.rank, standing.team.name, standing.all.played, standing.goalsDiff, standing.points]);
  }
}
