import { Image, Text, View } from 'react-native';
import { sharedStyles } from '../styles/SharedStyles';
import { leagueDetailStyles } from '../styles/LeagueDetailStyles';

interface Props {
  name: string;
  logo: string;
}

export default function LeagueHeader({ name, logo }: Props) {
  return (
    <View>
      <View style={leagueDetailStyles.headerImageContainer}>
        <Image
          style={leagueDetailStyles.headerImage}
          /* eslint-disable @typescript-eslint/no-require-imports */
          source={require('../../assets/header.jpg')}
          /* eslint-enable @typescript-eslint/no-require-imports */
        />
      </View>
      <View style={leagueDetailStyles.headerContentContainer}>
        <View style={leagueDetailStyles.headerContentBackground} />
        <Image style={leagueDetailStyles.logo} source={{ uri: logo }} />
        <Text style={sharedStyles.defaultTitle}>{name}</Text>
      </View>
    </View>
  );
}
