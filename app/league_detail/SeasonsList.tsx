import { FlatList, Image, Text, View } from 'react-native';
import { sharedStyles } from '../styles/SharedStyles';
import { leagueDetailStyles } from '../styles/LeagueDetailStyles';

interface Props {
    seasons: Season[];
}

export default function SeasonsList({ seasons }: Props) {
    return <FlatList
        contentContainerStyle={leagueDetailStyles.flatList}
        data={sortedSeasons()}
        renderItem={({item}) => (
            <Text style={sharedStyles.defaultText}>{getSeasonYears(item)}</Text>
        )
    }
        keyExtractor={season => season.year.toString()}
      /> 
    

    function sortedSeasons() {
        return seasons.sort((a, b) => { return b.year - a.year; })
    }

    function getSeasonYears(season: Season): string {
        const startDate = new Date(season.start);
        const endDate = new Date(season.end);

        return `${startDate.getFullYear()} - ${endDate.getFullYear()}`;
    }
}