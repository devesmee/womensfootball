import { Image, Text, View } from 'react-native';
import { Team } from '../../models';
import { leagueDetailStyles } from '../../styles/LeagueDetailStyles';

interface Props {
  team: Team;
}

export default function TeamTableColumn({ team }: Props) {
  return (
    <View
      style={{ flex: 5, flexDirection: 'row', alignItems: 'center', gap: 8 }}
    >
      <Image src={team.logo} style={{ height: 20, width: 20 }}></Image>
      <Text style={leagueDetailStyles.tableRowText}>{team.name}</Text>
    </View>
  );
}
