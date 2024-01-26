import { View, Text,Image } from 'react-native'
import { router } from 'expo-router';
import { styles } from '../style/style';
import { TouchableOpacity } from 'react-native-gesture-handler';

type PlaylistCardProps = {
    desc: string;
    image: string;
    id: string;
}

export default function PlaylistCard({desc,image,id}:PlaylistCardProps) {
  return (
    <TouchableOpacity onPress={()=>router.push(`/playlist/${id}`)}>
      <View className="w-full max-w-[156] ">
        <Image source={{ uri: image }} className="h-40 w-40" />
        <Text
          style={styles.gothamRegular}
          className="text-gray-300 text-[14px] mt-2 text-ellipsis ..."
          numberOfLines={2}
        >
          {desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
}