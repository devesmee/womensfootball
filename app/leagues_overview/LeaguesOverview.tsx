import { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { League } from '../models';
import LeaguesOverviewPlatformView from './LeaguesOverviewPlatformView';

type Props = NativeStackScreenProps<RootStackParamList, 'LeaguesOverview'>;

export default function LeaguesOverview({ navigation }: Props) {
  const [leagues, setLeagues] = useState<League[]>([]);

  useEffect(() => {
    fetchLeagues();
  }, []);

  const fetchLeagues = async () => {
    /* eslint-disable @typescript-eslint/no-require-imports */
    const leaguesHardcoded: League[] = require('../../assets/Leagues.json');
    /* eslint-enable @typescript-eslint/no-require-imports */
    setLeagues(leaguesHardcoded);
  };

  return (
    <LeaguesOverviewPlatformView
      leagues={leagues}
      goToLeagueDetailView={goToLeagueDetail}
    />
  );

  function goToLeagueDetail(name: string) {
    navigation.navigate('LeagueDetail', { leagueName: name });
  }
}
