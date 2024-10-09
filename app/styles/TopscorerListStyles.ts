import { StyleSheet } from 'react-native';

export const topscorerListStyles = StyleSheet.create({
  list: {
    backgroundColor: '#3E2C70',
    padding: 10,
    borderRadius: 10,
    gap: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  photoNameRow: {
    flexDirection: 'row',
    width: '50%',
    gap: 10,
  },
  goalsRow: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-end',
  },
  playerPhoto: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  playerNameTeamColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  teamRow: {
    flexDirection: 'row',
    gap: 5,
  },
  teamLogo: {
    height: 15,
    width: 15,
  },
  teamName: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
