import { Image, Text, View } from 'react-native';
import { Team } from '../../models';
import { leagueDetailStyles } from '../../styles/LeagueDetailStyles';

interface Props {
  team: Team;
}

export default function TeamTableColumn({ team }: Props) {
  return (
    <View
      style={leagueDetailStyles.tableTeamColumn}
    >
      <Image src={team.logo} style={leagueDetailStyles.tableTeamLogo}></Image>
      <Text style={leagueDetailStyles.tableRowText}>{team.name}</Text>
    </View>
  );
}
