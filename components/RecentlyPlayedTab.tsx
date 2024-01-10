import { View, Text,TouchableOpacity,Image } from 'react-native'
import { styles } from '../style/style';

type RecentlyPlayedTabProps = {
    name: string;
    image: string;
}

export default function RecentlyPlayedTab({name,image}:RecentlyPlayedTabProps) {
  return (
    <TouchableOpacity className='mb-4 mx-2 rounded-md overflow-hidden'>
      <View className="flex flex-row h-14 space-x-4 items-center bg-gray-500/20 pr-4">
        <Image source={{ uri: image }} className="h-14 w-14" />
        <Text style={styles.gothamRegular} className=" font-bold text-md text-white" numberOfLines={2}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}