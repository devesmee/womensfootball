import { StyleSheet } from 'react-native';

export const leagueDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#190D3B',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginRight: 5,
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  seasonRow: {
    flexDirection: 'row',
    paddingTop: 20,
    gap: 20,
  },
  dropdownStyle: {
    width: 150,
  },
  dropdownContainer: {
    backgroundColor: '#190D3B',
  },
  dropdownItemTextStyle: {
    color: '#FFFFFF',
  },
  flatList: {
    gap: 20,
    marginTop: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  standingsContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  standingsView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  scrollViewContainer: {
    marginVertical: 20,
    paddingBottom: 67,
  },
  tableContainer: {
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
  errorText: {
    marginTop: 20,
  },
});
