import { View, Text,FlatList } from 'react-native'

import PlaylistCard from "../components/PlaylistCard";
import { styles } from '../style/style';

type PlaylistsProps = {
    data: any[];
    title: string;
}

export default function Playlists({data, title}:PlaylistsProps) {
  return (
    <View className="w-full pl-2 py-8">
      <Text style={styles.gothamBold} className='text-white text-xl mb-4'>{title}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <PlaylistCard
            desc={item.description}
            image={item.images[0][0].url}
            id={item.id}
            // activeTab={activeTab}
            // onHandlePress={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ columnGap: 20 }}
      />
    </View>
  );
}