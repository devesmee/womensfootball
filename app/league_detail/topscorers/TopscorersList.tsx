import { Topscorer } from '../../models';
import { FlatList } from 'react-native';
import TopscorerRow from './TopscorerRow';
import { topscorerListStyles } from '../../styles/TopscorerListStyles';

interface Props {
  topscorers: Topscorer[];
}

export default function TopscorersList({ topscorers }: Props) {
  return (
    <FlatList
      contentContainerStyle={topscorerListStyles.list}
      data={sortedTopscorers()}
      renderItem={({ item }) => <TopscorerRow topscorer={item} />}
    />
  );

  function sortedTopscorers(): Topscorer[] {
    return topscorers.sort((a, b) => {
      return b.statistics[0].goals.total - a.statistics[0].goals.total;
    });
  }
}
