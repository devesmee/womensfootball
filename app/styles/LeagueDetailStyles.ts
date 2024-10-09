import { StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
// TODO: checken welke styles niet gebruikt worden
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
  segmentedButtons: {
    marginTop: 20,
    alignSelf: 'center'
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
    alignSelf: 'stretch'
  },
  standingsView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  topscorersContainer: {
    flex: 1,
    marginVertical: 20
  }
});
