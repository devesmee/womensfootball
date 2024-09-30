import { seasonOverviewStyles } from '../styles/SeasonOverviewStyles';
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
          ? seasonOverviewStyles.tableHeaderText
          : seasonOverviewStyles.tableRowText
      }
      style={
        isCentered
          ? seasonOverviewStyles.smallTableColumnCentered
          : seasonOverviewStyles.smallTableColumn
      }
    >
      {text}
    </DataTable.Cell>
  );
}
