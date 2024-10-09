import { leagueDetailStyles } from '../../styles/LeagueDetailStyles';
import { TeamStanding } from '../../models';
import { DataTable } from 'react-native-paper';
import TeamTableColumn from './TeamTableColumn';
import { ScrollView } from 'react-native';
import StandingsTableColumn from './StandingsTableColumn';
import { standingsTableStyles } from '../../styles/StandingsTableStyles';

interface Props {
  standings: TeamStanding[];
}

export default function StandingsTable({ standings }: Props) {
  return (
    <ScrollView style={standingsTableStyles.scrollViewContainer}>
      <DataTable style={standingsTableStyles.tableContainer}>
        <DataTable.Header style={standingsTableStyles.tableHeaderRow}>
          <StandingsTableColumn
            text="#"
            isCentered={false}
            isTableHeader={true}
          />
          <DataTable.Title
            textStyle={standingsTableStyles.tableHeaderText}
            style={standingsTableStyles.tableTeamHeader}
          >
            Team
          </DataTable.Title>
          <StandingsTableColumn
            text="MP"
            isCentered={false}
            isTableHeader={true}
          />
          <StandingsTableColumn
            text="GD"
            isCentered={false}
            isTableHeader={true}
          />
          <StandingsTableColumn
            text="PTS"
            isCentered={false}
            isTableHeader={true}
          />
        </DataTable.Header>

        {sortedStandings().map((item) => (
          <DataTable.Row key={item.rank}>
            <StandingsTableColumn
              text={item.rank}
              isCentered={false}
              isTableHeader={false}
            />
            <TeamTableColumn team={item.team} />
            <StandingsTableColumn
              text={item.all.played}
              isCentered={true}
              isTableHeader={false}
            />
            <StandingsTableColumn
              text={item.goalsDiff}
              isCentered={true}
              isTableHeader={false}
            />
            <StandingsTableColumn
              text={item.points}
              isCentered={true}
              isTableHeader={false}
            />
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );

  function sortedStandings() {
    return standings.sort((a, b) => {
      return a.rank - b.rank;
    });
  }
}
