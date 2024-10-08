import { registerRootComponent } from 'expo';
import LeaguesOverview from './leagues_overview/LeaguesOverview';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LeagueDetail from './league_detail/LeagueDetail';
import { StatusBar } from 'react-native';

export type RootStackParamList = {
  LeaguesOverview: undefined;
  LeagueDetail: { leagueName: string };
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#190D3B" />
      <Stack.Navigator
        screenOptions={{
          headerTitle: '',
          headerTintColor: '#FFFFFF',
          headerStyle: {
            backgroundColor: '#190D3B',
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="LeaguesOverview" component={LeaguesOverview} />
        <Stack.Screen name="LeagueDetail" component={LeagueDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
