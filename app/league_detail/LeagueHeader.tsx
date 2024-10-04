import { Image, Text, View } from 'react-native';
import { sharedStyles } from '../styles/SharedStyles';
import { leagueDetailStyles } from '../styles/LeagueDetailStyles';

interface Props {
  name: string;
  logo: string;
  country: string;
}

export default function LeagueHeader({ name, logo, country }: Props) {
  return (
    <View style={leagueDetailStyles.headerRow}>
      <Image style={leagueDetailStyles.logo} source={{ uri: logo }} />
      <View style={leagueDetailStyles.headerColumn}>
        <Text style={sharedStyles.defaultTitle}>{name}</Text>
        <Text style={sharedStyles.defaultText}>{country}</Text>
      </View>
    </View>
  );
}
