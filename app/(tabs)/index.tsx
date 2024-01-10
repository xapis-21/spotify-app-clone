import { View, Text,Pressable, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import RecentlyPlayedTab from '../../components/RecentlyPlayedTab';

const HomePage = () => {
  const recentplaylists = [
    {
      image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO3GSvAY-default.jpg",
      name: "This is NF",
    },
    {
      image: "https://i.scdn.co/image/ab67616d0000b2735e77f11aaf9962252f988f43",
      name: "I'll take a cup of coffee for your head",
    },
    {
      image:
        "https://seed-mix-image.spotifycdn.com/v6/img/pop/4AK6F7OLvEQ5QYCBNiQWHq/en/default",
      name: "Pop Mix",
    },
    {
      image:
        "https://labelworx.com/images/case-studies/future-house-music/playlist/spotify_dance_electronic_mix.jpg",
      name: "Dance/Electronic Mix",
    },
    {
      image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO3GSvAY-default.jpg",
      name: "Comfort zone",
    },
    {
      image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO3GSvAY-default.jpg",
      name: "Viral African Hits",
    },
    {
      image:
        "https://seed-mix-image.spotifycdn.com/v6/img/desc/Aesthetic%20Rap/en/default",
      name: "Aesthetic Rap Mix",
    },
    {
      image:
        "https://seed-mix-image.spotifycdn.com/v6/img/desc/Country%20Rock/en/default",
      name: "Country Rock Mix",
    },
  ];
  return (
    <SafeAreaView className="flex-1 bg-app-dark">
      <ScrollView className='px-2'>
        {/* Recently played */}
        <View className='flex flex-wrap h-[330px]'>

          {recentplaylists?.map(({name,image})=>(
              <RecentlyPlayedTab name={name} image={image}/>
          ))}
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomePage