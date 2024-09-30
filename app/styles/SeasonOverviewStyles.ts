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
    alignSelf: 'stretch'
  },
  tableContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#3e2c70',
    padding: 10
  },
  tableHeaderRow: {
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  tableHeaderText: {
    fontSize: 14,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  tableRow: {
    marginTop: 10
  },
  tableText: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center'
  }
});
