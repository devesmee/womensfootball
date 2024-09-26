import { FlatList, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useEffect, useState } from "react";
import { sharedStyles } from '../styles/SharedStyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import LoadingSpinner from '../reusable_components/LoadingSpinner';

type Props = NativeStackScreenProps<
RootStackParamList,
'LeaguesOverview'>;

// TODO: refactor this to using an interactive map with pins on every country that has an available women's football league
export default function LeaguesOverview({ navigation }: Props) {
    const [isLoading, setIsLoading] = useState(false);
    const [leagues, setLeagues] = useState<League[]>();

    useEffect(() => {
        fetchLeagues();
    }, [])

    const fetchLeagues = async () => {
        setIsLoading(true);

        const leaguesHardcoded: League[]= require('../../assets/Leagues.json');
        setIsLoading(false);
        setLeagues(leaguesHardcoded);
    }

    return (
      <View style={sharedStyles.container}>
        {isLoading && <LoadingSpinner/>}
        {leagues !== undefined && <FlatList
        contentContainerStyle={sharedStyles.flatList}
        data={leagues}
        renderItem={({item}) => (
            <TouchableWithoutFeedback
                onPress={() => goToLeagueDetail(item.name)}
            >
                <Text style={sharedStyles.defaultText}>{item.name}</Text>
            </TouchableWithoutFeedback>
        )
    }
        keyExtractor={league => league.name}
      />}
      </View>
    );

    function goToLeagueDetail(name: string) {
        navigation.navigate('LeagueDetail', { leagueName: name });
    }
  }