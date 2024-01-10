import { Text, View, SafeAreaView, Image} from "react-native";
import Button from "../../components/Button";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { styles } from "../../style/style";

export default function SignUpScreen() {
  return (
    <SafeAreaView className="flex-1 bg-app-dark">
      <View className="flex flex-col justify-end h-screen pb-8">
        <View className="flex items-center py-8 mb-8">
          <Image
            source={require("../../assets/images/logo.png")}
            resizeMode="cover"
          />
          <Text
            style={styles.gothamRegular}
            className="font-bold text-3xl text-white"
          >
            Millions of songs
          </Text>
          <Text
            style={styles.gothamRegular}
            className="font-gotham font-bold text-3xl text-white"
          >
            Free on Spotify
          </Text>
        </View>
        <View className="flex flex-col px-4">
          <Button
            title="Sign Up"
            handlePress={() => {}}
            style={"bg-app-green"}
          />
          <Button
            title="Continue with phone number"
            handlePress={() => {}}
            icon={<Feather name="smartphone" size={24} color="white" />}
            style=""
          />
          <Button
            title="Continue with Google"
            handlePress={() => {}}
            icon={<FontAwesome name="google" size={24} color="white" />}
            style=""
          />
          <Button
            title="Continue with Facebook"
            handlePress={() => {}}
            icon={<FontAwesome name="facebook" size={24} color="white" />}
            style=""
          />
          <Button title="Log in" handlePress={() => {}} style="text-white" />
        </View>
      </View>
    </SafeAreaView>
  );
}


