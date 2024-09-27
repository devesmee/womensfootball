import { FlatList, Text, TouchableWithoutFeedback } from 'react-native';
import { sharedStyles } from '../styles/SharedStyles';
import { leagueDetailStyles } from '../styles/LeagueDetailStyles';
import { Season } from '../models';

interface Props {
  seasons: Season[];
  onSeasonClicked: (seasonYears: string, year: number) => void;
}

export default function SeasonsList({ seasons, onSeasonClicked }: Props) {
  return (
    <FlatList
      contentContainerStyle={leagueDetailStyles.flatList}
      data={sortedSeasons()}
      renderItem={({ item }) => (
        <TouchableWithoutFeedback
          onPress={() => onSeasonClicked(getSeasonYears(item), item.year)}
        >
          <Text style={sharedStyles.defaultText}>{getSeasonYears(item)}</Text>
        </TouchableWithoutFeedback>
      )}
      keyExtractor={(season) => season.year.toString()}
    />
  );

  function sortedSeasons() {
    return seasons.sort((a, b) => {
      return b.year - a.year;
    });
  }

  function getSeasonYears(season: Season): string {
    const startDate = new Date(season.start);
    const endDate = new Date(season.end);

    return `${startDate.getFullYear()} - ${endDate.getFullYear()}`;
  }
}
