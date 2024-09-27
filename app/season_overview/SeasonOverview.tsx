import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { sharedStyles } from '../styles/SharedStyles';
import axios from 'axios';
import {
  API_BASE_URL,
  API_KEY_HEADER,
  STANDINGS_PATH,
} from '../constants/Constants';
import LoadingSpinner from '../reusable_components/LoadingSpinner';
import { seasonOverviewStyles } from '../styles/SeasonOverviewStyles';
import StandingsList from './StandingsList';
import { ApiResponse, Standing, TeamStanding } from '../models';

type Props = NativeStackScreenProps<RootStackParamList, 'SeasonOverview'>;

// TODO: also show top scorers, top assists and top cards using a tab bar at the top
// TODO: make standings UI neater
export default function SeasonOverview({ route }: Props) {
  const { leagueId, seasonYears, year } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [standings, setStandings] = useState<TeamStanding[]>();

  useEffect(() => {
    fetchStandings();
  }, []);

  const fetchStandings = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get<ApiResponse<Standing>>(
        API_BASE_URL + STANDINGS_PATH,
        {
          headers: {
            [API_KEY_HEADER]: process.env.EXPO_PUBLIC_API_KEY,
          },
          params: {
            league: leagueId,
            season: year,
          },
        }
      );

      if (response.data.response.length !== 0) {
        setStandings(response.data.response.at(0)?.league.standings.at(0));
        setHasError(false);
      } else {
        console.log(
          'Something went wrong when fetching the standings: ',
          response.data.errors
        );
        setHasError(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.log('Something went wrong when fetching the standings: ', error);
      setIsLoading(false);
      setHasError(true);
    }
  };

  return (
    <View style={seasonOverviewStyles.container}>
      {isLoading && <LoadingSpinner />}
      {standings !== undefined && (
        <View>
          <Text style={sharedStyles.defaultTitle}>{seasonYears}</Text>
          <StandingsList standings={standings} />
        </View>
      )}
      {hasError && (
        <Text style={sharedStyles.defaultText}>
          Something went wrong, please try again later
        </Text>
      )}
    </View>
  );
}
