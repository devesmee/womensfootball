import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { sharedStyles } from '../../styles/SharedStyles';
import axios from 'axios';
import {
  API_BASE_URL,
  API_KEY_HEADER,
  TOPSCORERS_PATH,
} from '../../constants/Constants';
import LoadingSpinner from '../../reusable_components/LoadingSpinner';
import { leagueDetailStyles } from '../../styles/LeagueDetailStyles';
import { ApiResponse, Topscorer } from '../../models';
import React from 'react';
import TopscorersList from './TopscorersList';

interface Props {
  leagueId?: number;
  year?: number;
  isVisible: boolean;
}

function TopscorersContainer({ leagueId, year, isVisible }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [topscorers, setTopscorers] = useState<Topscorer[] | undefined>(
    undefined
  );

  useEffect(() => {
    fetchTopscorers();
  }, [year]);

  const fetchTopscorers = async () => {
    setHasError(false);
    setIsLoading(true);
    setTopscorers(undefined);

    if (leagueId !== undefined && year !== undefined) {
      try {
        const response = await axios.get<ApiResponse<Topscorer>>(
          API_BASE_URL + TOPSCORERS_PATH,
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
          setTopscorers(response.data.response);
          setHasError(false);
        } else {
          console.log(
            'Something went wrong when fetching the topscorers: ',
            response.data.errors
          );
          setHasError(true);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(
          'Something went wrong when fetching the topscorers: ',
          error
        );
        setIsLoading(false);
        setHasError(true);
      }
    }
  };

  return isVisible ? (
    <View style={leagueDetailStyles.topscorersContainer}>
      {isLoading && <LoadingSpinner />}
      {topscorers !== undefined && <TopscorersList topscorers={topscorers} />}
      {hasError && (
        <Text style={[sharedStyles.defaultText, sharedStyles.errorText]}>
          Something went wrong, please try again later
        </Text>
      )}
    </View>
  ) : null;
}

export default React.memo(TopscorersContainer, (prevProps, nextProps) => {
  return (
    prevProps.leagueId === nextProps.leagueId &&
    prevProps.year === nextProps.year &&
    prevProps.isVisible === nextProps.isVisible
  );
});
