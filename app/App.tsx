import { registerRootComponent } from 'expo';
import LeagueOverview from './league_overview/LeagueOverview';
import { SafeAreaView, Text } from 'react-native';
import { sharedStyles } from './styles/SharedStyles';

export default function App() {
  return (
    <SafeAreaView style={sharedStyles.safeAreaView}>
      <Text>This is an app</Text>
    </SafeAreaView>
  );
}

registerRootComponent(App);
