import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { sharedStyles } from '../styles/SharedStyles';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import {
  API_BASE_URL,
  API_KEY_HEADER,
  LEAGUES_PATH,
} from '../constants/Constants';
import LoadingSpinner from '../reusable_components/LoadingSpinner';
import LeagueHeader from './LeagueHeader';
import { leagueDetailStyles } from '../styles/LeagueDetailStyles';
import SeasonsList from './SeasonsList';
import { ApiResponse, LeagueDetails } from '../models';

type Props = NativeStackScreenProps<RootStackParamList, 'LeagueDetail'>;

// TODO: improve UI
export default function LeagueDetail({ route, navigation }: Props) {
  const { leagueName } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [leagueDetail, setLeagueDetail] = useState<LeagueDetails>();

  useEffect(() => {
    fetchLeague();
  }, []);

  const fetchLeague = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get<ApiResponse<LeagueDetails>>(
        API_BASE_URL + LEAGUES_PATH,
        {
          headers: {
            [API_KEY_HEADER]: process.env.EXPO_PUBLIC_API_KEY,
          },
          params: {
            name: leagueName,
          },
        }
      );

      if (response.data.response.length !== 0) {
        setLeagueDetail(response.data.response.at(0));
        setHasError(false);
      } else {
        console.log(
          'Something went wrong when fetching the league details: ',
          response.data.errors
        );
        setHasError(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(
        'Something went wrong when fetching the league details: ',
        error
      );
      setIsLoading(false);
      setHasError(true);
    }
  };
  return (
    <View style={leagueDetailStyles.container}>
      {isLoading && <LoadingSpinner />}
      {leagueDetail !== undefined && (
        <View>
          <LeagueHeader
            name={leagueDetail.league.name}
            logo={leagueDetail.league.logo}
          />
          <SeasonsList
            seasons={leagueDetail.seasons}
            onSeasonClicked={goToSeasonOverview}
          />
        </View>
      )}
      {hasError && (
        <Text style={sharedStyles.defaultText}>
          Something went wrong, please try again later
        </Text>
      )}
    </View>
  );

  function goToSeasonOverview(seasonYears: string, year: number) {
    navigation.navigate('SeasonOverview', {
      leagueId: leagueDetail?.league.id ?? 0,
      seasonYears,
      year,
    });
  }
}
