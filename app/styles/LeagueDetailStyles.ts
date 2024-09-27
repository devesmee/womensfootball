import { StyleSheet } from 'react-native';

export const leagueDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#190D3B',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerImageContainer: {
    flexDirection: 'row',
    height: 175,
    justifyContent: 'flex-start',
    zIndex: 0,
  },
  headerImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  headerContentBackground: {
    backgroundColor: '#000000',
    opacity: 0.5,
    zIndex: 2,
  },
  headerContentContainer: {
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    marginTop: -100,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  flatList: {
    gap: 20,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
