import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { sharedStyles } from '../../styles/SharedStyles';
import axios from 'axios';
import {
  API_BASE_URL,
  API_KEY_HEADER,
  STANDINGS_PATH,
} from '../../constants/Constants';
import LoadingSpinner from '../../reusable_components/LoadingSpinner';
import { leagueDetailStyles } from '../../styles/LeagueDetailStyles';
import { ApiResponse, Standing, TeamStanding } from '../../models';
import React from 'react';
import StandingsTable from './StandingsTable';

interface Props {
  leagueId?: number;
  year?: number;
  isVisible: boolean;
}

function StandingsContainer({ leagueId, year, isVisible }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [standings, setStandings] = useState<TeamStanding[] | undefined>(
    undefined
  );

  useEffect(() => {
    fetchStandings();
  }, [year]);

  const fetchStandings = async () => {
    setHasError(false);
    setIsLoading(true);
    setStandings(undefined);

    if (leagueId !== undefined && year !== undefined) {
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
        console.log(
          'Something went wrong when fetching the standings: ',
          error
        );
        setIsLoading(false);
        setHasError(true);
      }
    }
  };

  return isVisible ? (
    <View style={leagueDetailStyles.standingsContainer}>
      {isLoading && <LoadingSpinner />}
      {standings !== undefined && (
        <View style={leagueDetailStyles.standingsView}>
          <StandingsTable standings={standings} />
        </View>
      )}
      {hasError && (
        <Text style={[sharedStyles.defaultText, sharedStyles.errorText]}>
          Something went wrong, please try again later
        </Text>
      )}
    </View>
  ) : null;
}

export default React.memo(StandingsContainer, (prevProps, nextProps) => {
  return (
    prevProps.leagueId === nextProps.leagueId &&
    prevProps.year === nextProps.year &&
    prevProps.isVisible === nextProps.isVisible
  );
});
