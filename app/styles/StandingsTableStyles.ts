import { StyleSheet } from 'react-native';

export const standingsTableStyles = StyleSheet.create({
  scrollViewContainer: {
    marginVertical: 20,
    paddingBottom: 67,
  },
  tableContainer: {
    backgroundColor: '#3E2C70',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  tableHeaderRow: {
    backgroundColor: '#F1F8FF',
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
  tableTeamHeader: {
    flex: 5,
  },
  tableTeamLogo: {
    height: 20,
    width: 20,
  },
  tableTeamColumn: {
    flex: 4.2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  smallTableColumn: {
    flex: 1,
  },
  smallTableColumnCentered: {
    flex: 1,
    justifyContent: 'center',
  },
});
