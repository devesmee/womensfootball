import { StyleSheet } from 'react-native';

export const seasonOverviewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#190D3B',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  standingsView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  tableContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#3e2c70',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  tableHeaderRow: {
    backgroundColor: '#f1f8ff',
    borderRadius: 10,
  },
  tableHeaderText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRowText: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  smallTableColumn: {
    flex: 1,
  },
  smallTableColumnCentered: {
    flex: 1,
    justifyContent: 'center',
  },
});
