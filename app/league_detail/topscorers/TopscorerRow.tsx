import { Topscorer } from '../../models';
import { Image, Text, View } from 'react-native';
import { sharedStyles } from '../../styles/SharedStyles';
import { topscorerListStyles } from '../../styles/TopscorerListStyles';

interface Props {
  topscorer: Topscorer;
}

export default function TopscorerRow({ topscorer }: Props) {
  return (
    <View style={topscorerListStyles.row}>
      <View style={topscorerListStyles.photoNameRow}>
        <Image
          src={topscorer.player.photo}
          style={topscorerListStyles.playerPhoto}
        />

        <View style={topscorerListStyles.playerNameTeamColumn}>
          <Text style={sharedStyles.defaultText}>{topscorer.player.name}</Text>
          <View style={topscorerListStyles.teamRow}>
            <Image
              src={topscorer.statistics[0].team.logo}
              style={topscorerListStyles.teamLogo}
            />
            <Text style={topscorerListStyles.teamName}>
              {topscorer.statistics[0].team.name}
            </Text>
          </View>
        </View>
      </View>
      <View style={topscorerListStyles.goalsRow}>
        <Text style={sharedStyles.defaultText}>
          {topscorer.statistics[0].goals.total} goals
        </Text>
      </View>
    </View>
  );
}
