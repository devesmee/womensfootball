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
                <Image style={leagueDetailStyles.headerImage} source={require('../../assets/header.jpg')} />
            </View>
            <View style={leagueDetailStyles.headerContentContainer}>
                <View style={leagueDetailStyles.headerContentBackground} />
                <Image style={leagueDetailStyles.logo} source={{uri: logo}} />
                <Text style={sharedStyles.titleText}>{name}</Text>
            </View>
        </View>
    );
}