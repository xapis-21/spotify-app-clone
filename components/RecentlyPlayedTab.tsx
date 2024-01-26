import { View, Text,TouchableOpacity,Image } from 'react-native'
import { styles } from '../style/style';
import { router } from 'expo-router';

type RecentlyPlayedTabProps = {
    name: string;
    image: string;
}

export default function RecentlyPlayedTab({name,image}:RecentlyPlayedTabProps) {
  return (
    <TouchableOpacity onPress={()=>{router.push("/signup/")}} className="mb-2 mx-1 rounded-md overflow-hidden w-full max-w-[180] ">
      <View className="flex flex-row h-14 space-x-2 items-center bg-gray-500/20 pr-4">
        <Image source={{ uri: image }} className="h-14 w-14" />
        <Text
          style={styles.gothamRegular}
          className=" font-bold text-md text-white text-ellipsis ... max-w-[100px]"
          numberOfLines={2}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}