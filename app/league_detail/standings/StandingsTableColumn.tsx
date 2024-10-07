import { leagueDetailStyles } from '../../styles/LeagueDetailStyles';
import { DataTable } from 'react-native-paper';

interface Props {
  text: React.ReactNode;
  isCentered: boolean;
  isTableHeader: boolean;
}

export default function StandingsTableColumn({
  text,
  isCentered,
  isTableHeader,
}: Props) {
  return (
    <DataTable.Cell
      textStyle={
        isTableHeader
          ? leagueDetailStyles.tableHeaderText
          : leagueDetailStyles.tableRowText
      }
      style={
        isCentered
          ? leagueDetailStyles.smallTableColumnCentered
          : leagueDetailStyles.smallTableColumn
      }
    >
      {text}
    </DataTable.Cell>
  );
}
