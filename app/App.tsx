import { registerRootComponent } from 'expo';
import LeaguesOverview from './leagues_overview/LeaguesOverview';
import { SafeAreaView } from 'react-native';
import { sharedStyles } from './styles/SharedStyles';

export default function App() {
  return (
    <SafeAreaView style={sharedStyles.safeAreaView}>
        <LeaguesOverview />
    </SafeAreaView>
  );
}

registerRootComponent(App);
