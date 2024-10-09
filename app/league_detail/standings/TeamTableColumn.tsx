import { Image, Text, View } from 'react-native';
import { Team } from '../../models';
import { standingsTableStyles } from '../../styles/StandingsTableStyles';

interface Props {
  team: Team;
}

export default function TeamTableColumn({ team }: Props) {
  return (
    <View style={standingsTableStyles.tableTeamColumn}>
      <Image src={team.logo} style={standingsTableStyles.tableTeamLogo}></Image>
      <Text style={standingsTableStyles.tableRowText}>{team.name}</Text>
    </View>
  );
}
