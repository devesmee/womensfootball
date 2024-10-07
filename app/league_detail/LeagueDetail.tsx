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
  STANDINGS_PATH,
} from '../constants/Constants';
import LoadingSpinner from '../reusable_components/LoadingSpinner';
import LeagueHeader from './LeagueHeader';
import { leagueDetailStyles } from '../styles/LeagueDetailStyles';
import {
  ApiResponse,
  LeagueDetails,
  Season,
  Standing,
  TeamStanding,
} from '../models';
import { Dropdown } from 'react-native-element-dropdown';
import { LeagueDetailsJSON } from '../models/LeagueDetails';
import StandingsList from './standings/StandingsList';

type Props = NativeStackScreenProps<RootStackParamList, 'LeagueDetail'>;

export default function LeagueDetail({ route }: Props) {
  const { leagueName } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [leagueDetails, setLeagueDetails] = useState<LeagueDetails>();
  const [selectedSeason, setSelectedSeason] = useState<Season | undefined>();
  const [standings, setStandings] = useState<TeamStanding[]>();

  useEffect(() => {
    fetchLeague();
  }, []);

  useEffect(() => {
    fetchStandings();
  }, [selectedSeason]);

  const fetchLeague = async () => {
    setHasError(false);
    setIsLoading(true);

    try {
      const response = await axios.get<ApiResponse<LeagueDetailsJSON>>(
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

      const firstElement = response.data.response.at(0);
      if (response.data.response.length !== 0 && firstElement !== undefined) {
        const leagueDetails = new LeagueDetails(firstElement);
        setLeagueDetails(leagueDetails);
        setSelectedSeason(leagueDetails.seasons[0]);
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

  const fetchStandings = async () => {
    setHasError(false);
    setIsLoading(true);

    try {
      const response = await axios.get<ApiResponse<Standing>>(
        API_BASE_URL + STANDINGS_PATH,
        {
          headers: {
            [API_KEY_HEADER]: process.env.EXPO_PUBLIC_API_KEY,
          },
          params: {
            league: leagueDetails?.league.id,
            season: selectedSeason?.year,
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
    <View style={leagueDetailStyles.container}>
      {leagueDetails !== undefined && (
        <View>
          <LeagueHeader
            name={leagueDetails.league.name}
            logo={leagueDetails.league.logo}
            country={leagueDetails.country.name}
          />
          <View style={leagueDetailStyles.seasonRow}>
            <Text style={leagueDetailStyles.headingText}>Season</Text>
            <Dropdown
              style={leagueDetailStyles.dropdownStyle}
              mode="auto"
              containerStyle={leagueDetailStyles.dropdownContainer}
              itemTextStyle={leagueDetailStyles.dropdownItemTextStyle}
              selectedTextStyle={leagueDetailStyles.dropdownItemTextStyle}
              activeColor="#3e2c70"
              iconColor="#FFFFFF"
              data={leagueDetails.seasons}
              labelField="seasonYears"
              valueField="year"
              value={selectedSeason}
              onChange={(selected) => setSelectedSeason(selected)}
            />
          </View>
        </View>
      )}
      <View style={leagueDetailStyles.standingsContainer}>
        {isLoading && <LoadingSpinner />}
        {standings !== undefined && (
          <View style={leagueDetailStyles.standingsView}>
            <StandingsList standings={standings} />
          </View>
        )}
        {hasError && (
          <Text
            style={[sharedStyles.defaultText, leagueDetailStyles.errorText]}
          >
            Something went wrong, please try again later
          </Text>
        )}
      </View>
    </View>
  );
}
