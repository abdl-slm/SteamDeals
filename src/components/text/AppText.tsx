import {Text, View} from 'react-native';

type AppTextProps = {
    text?: string;
  };

export function AppText({text}: AppTextProps) {

  return <View>
    <Text>
        {text}
    </Text>
  </View>;
}