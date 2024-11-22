import { League } from '../models';
import {
  LeafletView,
  MapMarker,
  WebViewLeafletEvents,
  WebviewLeafletMessage,
} from 'react-native-leaflet-view';

type Props = {
  leagues: League[];
  goToLeagueDetailView: (leagueName: string) => void;
};

export default function LeaguesOverviewPlatformView({
  leagues,
  goToLeagueDetailView,
}: Props) {
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
      goToLeagueDetailView(message.payload?.mapMarkerID ?? '');
    }
  }
}
