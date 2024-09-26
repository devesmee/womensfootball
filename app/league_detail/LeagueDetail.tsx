import { ActivityIndicator, FlatList, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useEffect, useState } from "react";
import { sharedStyles } from '../styles/SharedStyles';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import { API_BASE_URL, API_KEY_HEADER, LEAGUES_PATH } from '../constants/Constants';
import LoadingSpinner from '../reusable_components/LoadingSpinner';

type Props = NativeStackScreenProps<
RootStackParamList,
'LeagueDetail'>;

export default function LeagueDetail({ route, navigation }: Props) {
    const { leagueName } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [leagueDetail, setLeagueDetail] = useState<LeagueDetail>();

    useEffect(() => {
        fetchLeague();
    }, [])

    const fetchLeague = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get<ApiResponse<LeagueDetail>>(API_BASE_URL + LEAGUES_PATH,
                {
                    headers: {
                        [API_KEY_HEADER]: process.env.EXPO_PUBLIC_API_KEY
                    },
                    params: {
                        name: leagueName
                    }
                }
            );

            if (response.data.response.length !== 0) {
                setLeagueDetail(response.data.response.at(0));
                setHasError(false);
            } else {
                console.log('Something went wrong when fetching the league details: ', response.data.errors);
                setHasError(true);
            }
            setIsLoading(false);
        } catch (error) {
            console.log('Something went wrong when fetching the league details: ', error);
            setIsLoading(false);
            setHasError(true);
        }
    }

    return (
      <View style={sharedStyles.container}>
        {isLoading && <LoadingSpinner/>}
        {leagueDetail !== undefined && <Text style={sharedStyles.defaultText}>{leagueDetail.country.name}</Text>}
        {hasError && <Text style={sharedStyles.defaultText}>Something went wrong, please try again later</Text>}
      </View>
    );
  }