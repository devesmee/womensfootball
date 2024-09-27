import { FlatList, Text, View } from 'react-native';
import { sharedStyles } from '../styles/SharedStyles';
import { seasonOverviewStyles } from '../styles/SeasonOverviewStyles';
import { TeamStanding } from '../models';

interface Props {
  standings: TeamStanding[];
}

export default function StandingsList({ standings }: Props) {
  return (
    <FlatList
      contentContainerStyle={seasonOverviewStyles.flatList}
      data={sortedStandings()}
      renderItem={({ item }) => (
        <View style={seasonOverviewStyles.standingRow}>
          <Text style={sharedStyles.defaultText}>{item.rank}.</Text>
          <Text style={sharedStyles.defaultText}>{item.team.name}</Text>
        </View>
      )}
      keyExtractor={(standing) => standing.rank.toString()}
    />
  );

  function sortedStandings() {
    return standings.sort((a, b) => {
      return a.rank - b.rank;
    });
  }
}
