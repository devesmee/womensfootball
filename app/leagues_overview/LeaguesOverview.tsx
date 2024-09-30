import { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { League } from '../models';
import {
  LeafletView,
  MapMarker,
  WebViewLeafletEvents,
  WebviewLeafletMessage,
} from 'react-native-leaflet-view';

type Props = NativeStackScreenProps<RootStackParamList, 'LeaguesOverview'>;

export default function LeaguesOverview({ navigation }: Props) {
  const [leagues, setLeagues] = useState<League[]>();

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
    <LeafletView
      zoom={2}
      mapMarkers={getMapMarkers()}
      onMessageReceived={onMapMessageReceived}
    />
  );

  function getMapMarkers(): MapMarker[] {
    const mapMarkers: MapMarker[] =
      leagues?.map((league) => ({
        id: league.name,
        position: league.position,
        icon: '⚽️',
      })) ?? [];

    return mapMarkers;
  }

  function onMapMessageReceived(message: WebviewLeafletMessage) {
    if (message.event === WebViewLeafletEvents.ON_MAP_MARKER_CLICKED) {
      goToLeagueDetail(message.payload?.mapMarkerID ?? '');
    }
  }

  function goToLeagueDetail(name: string) {
    navigation.navigate('LeagueDetail', { leagueName: name });
  }
}
