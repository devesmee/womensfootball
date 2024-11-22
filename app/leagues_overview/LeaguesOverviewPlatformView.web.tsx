import { League } from '../models';
import { FlatList, Text, TouchableWithoutFeedback } from 'react-native';

type Props = {
  leagues: League[];
  goToLeagueDetailView: (leagueName: string) => void;
};

export default function LeaguesOverviewPlatformView({
  leagues,
  goToLeagueDetailView,
}: Props) {
  return (
    <FlatList
      data={leagues}
      renderItem={({ item }) => (
        <TouchableWithoutFeedback
          onPress={() => goToLeagueDetailView(item.name)}
        >
          <Text>{item.name}</Text>
        </TouchableWithoutFeedback>
      )}
    />
  );
}
