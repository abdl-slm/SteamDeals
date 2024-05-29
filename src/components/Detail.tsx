import {Text, View} from 'react-native';
import { useSelector } from 'react-redux';
import { Deal } from '../model/deals';

export default function Detail({navigation}) {
  const deal: Deal = useSelector(state => state.singleDealReducer.deal);

  return <View>
    <Text>
        {deal.title}
    </Text>
    <Text>
        {deal.dealID}
    </Text>
    <Text>
        {deal.salePrice}
    </Text>
  </View>;
}
