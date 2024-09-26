import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useEffect, useState } from "react";
import { sharedStyles } from '../styles/SharedStyles';
import LeaguesOverviewHeader from './LeaguesOverviewHeader';

// TODO: refactor this to using an interactive map with pins on every country that has an available women's football league
export default function LeaguesOverview() {
    const [isLoading, setIsLoading] = useState(false);
    const [leagues, setLeagues] = useState<League[]>();

    useEffect(() => {
        fetchSeasons();
    }, [])

    const fetchSeasons = async () => {
        setIsLoading(true);

        const leaguesHardcoded: League[]= require('../../assets/Leagues.json');
        setIsLoading(false);
        setLeagues(leaguesHardcoded);
    }

    return (
      <View style={sharedStyles.container}>
        {isLoading && <ActivityIndicator style={sharedStyles.loadingSpinner}/>}
        <LeaguesOverviewHeader />
        {leagues !== undefined && <FlatList
        contentContainerStyle={sharedStyles.flatList}
        data={leagues}
        renderItem={({item}) => (<Text style={sharedStyles.defaultText}>{item.name}</Text>)}
        keyExtractor={league => league.name}
      />}
      </View>
    );
  }