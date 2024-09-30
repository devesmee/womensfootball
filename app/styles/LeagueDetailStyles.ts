import { StyleSheet } from 'react-native';

export const leagueDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#190D3B',
    alignItems: 'flex-start',
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
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  flatList: {
    gap: 20,
    marginTop: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    paddingTop: 20,
  },
});
