import { Pressable, Text, View } from 'react-native'

interface ButtonProps{
    icon?: JSX.Element | null;
    title: string;
    style: string;
    handlePress: () => void;
}

export default function Button({icon,title,handlePress, style}:ButtonProps) {
  return (
    <Pressable
      className={`${
        icon ? "bg-transparent border border-white/50 " : "grid place-items-start"
      } rounded-full py-4 mt-2 ${style}`}
      onPress={handlePress}
    >
      <View
        className={`${
          icon ? "justify-start" : "justify-center"
        } flex flex-row gap-4 items-center px-8 `}
      >
        {icon && icon}
        <Text
          className={`${
            icon ? "text-white" : ""
          } text-xl font-gotham font-bold ${style}`}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
}