import { Image, Text, View } from 'react-native';
import { seasonOverviewStyles } from '../styles/SeasonOverviewStyles';
import { Team } from '../models';

interface Props {
  team: Team;
}

export default function TeamTableColumn({ team }: Props) {
  return (
    <View
      style={{ flex: 5, flexDirection: 'row', alignItems: 'center', gap: 8 }}
    >
      <Image src={team.logo} style={{ height: 20, width: 20 }}></Image>
      <Text style={seasonOverviewStyles.tableRowText}>{team.name}</Text>
    </View>
  );
}
