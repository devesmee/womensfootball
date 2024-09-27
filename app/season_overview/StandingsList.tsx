import { FlatList, Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { sharedStyles } from '../styles/SharedStyles';
import { leagueDetailStyles } from '../styles/LeagueDetailStyles';
import { seasonOverviewStyles } from '../styles/SeasonOverviewStyles';

interface Props {
    standings: TeamStanding[];
}

export default function StandingsList({ standings }: Props) {
    return <FlatList
        contentContainerStyle={seasonOverviewStyles.flatList}
        data={sortedStandings()}
        renderItem={({item}) => (
            <View style={seasonOverviewStyles.standingRow}>
                <Text style={sharedStyles.defaultText}>{item.rank}.</Text>
                <Text style={sharedStyles.defaultText}>{item.team.name}</Text>
            </View>
        )
    }
        keyExtractor={standing => standing.rank.toString()}
      /> 
    

    function sortedStandings() {
        return standings.sort((a, b) => { return a.rank - b.rank; })
    }
}