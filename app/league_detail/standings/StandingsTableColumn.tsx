import { leagueDetailStyles } from '../../styles/LeagueDetailStyles';
import { DataTable } from 'react-native-paper';
import { standingsTableStyles } from '../../styles/StandingsTableStyles';

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
          ? standingsTableStyles.tableHeaderText
          : standingsTableStyles.tableRowText
      }
      style={
        isCentered
          ? standingsTableStyles.smallTableColumnCentered
          : standingsTableStyles.smallTableColumn
      }
    >
      {text}
    </DataTable.Cell>
  );
}
