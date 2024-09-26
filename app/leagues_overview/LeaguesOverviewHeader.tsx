import { Text, View } from 'react-native';
import { sharedStyles } from '../styles/SharedStyles';
import { leagueOverviewStyles } from '../styles/LeagueOverviewStyles';

export default function LeaguesOverviewHeader() {
    return (
        <View style={leagueOverviewStyles.headerRow}>
            <Text style={sharedStyles.titleText}>Women's Football Leagues</Text>
        </View>
    );
  }