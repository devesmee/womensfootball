import { Topscorer } from '../../models';
import { FlatList, View } from 'react-native';
import TopscorerRow from './TopscorerRow';
import { leagueDetailStyles } from '../../styles/LeagueDetailStyles';
import { topscorerListStyles } from '../../styles/TopscorerListStyles';
import TopscorerSeparator from './TopscorerSeparator';

interface Props {
  topscorers: Topscorer[];
}

export default function TopscorersList({ topscorers }: Props) {
  return (
    <FlatList
        contentContainerStyle={topscorerListStyles.list}
        data={sortedTopscorers()}
        renderItem={({ item }) => (
            <TopscorerRow topscorer={item} />
        )}
    />
  );

  function sortedTopscorers(): Topscorer[] {
    return topscorers.sort((a, b) => {
      return b.statistics[0].goals.total - a.statistics[0].goals.total;
    });
  }
}
