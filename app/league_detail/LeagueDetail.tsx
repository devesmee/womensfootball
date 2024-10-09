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
import { ApiResponse, LeagueDetails, Season, SeasonDetails } from '../models';
import { Dropdown } from 'react-native-element-dropdown';
import { LeagueDetailsJSON } from '../models/LeagueDetails';
import { SegmentedButtons } from 'react-native-paper';
import StandingsContainer from './standings/StandingsContainer';
import TopscorersContainer from './topscorers/TopscorersContainer';

type Props = NativeStackScreenProps<RootStackParamList, 'LeagueDetail'>;

export default function LeagueDetail({ route }: Props) {
  const { leagueName } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [leagueDetails, setLeagueDetails] = useState<LeagueDetails>();
  const [selectedSeasonDetails, setSelectedSeasonDetails] = useState(
    SeasonDetails.table
  );
  const [selectedSeason, setSelectedSeason] = useState<Season | undefined>();

  useEffect(() => {
    fetchLeague();
  }, []);

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

  return (
    <View style={leagueDetailStyles.container}>
      {isLoading && <LoadingSpinner />}
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
          <SegmentedButtons
            style={leagueDetailStyles.segmentedButtons}
            value={selectedSeasonDetails}
            onValueChange={(selected) =>
              setSelectedSeasonDetails(selected as SeasonDetails)
            }
            buttons={[
              {
                value: SeasonDetails.table,
                label: SeasonDetails.table,
                checkedColor: '#190D3B',
                uncheckedColor: '#FFFFFF',
              },
              {
                value: SeasonDetails.topscorers,
                label: SeasonDetails.topscorers,
                checkedColor: '#190D3B',
                uncheckedColor: '#FFFFFF',
              },
            ]}
          />
        </View>
      )}
      {hasError && (
        <Text style={[sharedStyles.defaultText, sharedStyles.errorText]}>
          Something went wrong, please try again later
        </Text>
      )}
      <StandingsContainer
        leagueId={leagueDetails?.league.id}
        year={selectedSeason?.year}
        isVisible={selectedSeasonDetails === SeasonDetails.table}
      />
      <TopscorersContainer
        leagueId={leagueDetails?.league.id}
        year={selectedSeason?.year}
        isVisible={selectedSeasonDetails === SeasonDetails.topscorers}
      />
    </View>
  );
}
