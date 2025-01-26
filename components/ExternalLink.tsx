import { Link } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import { type ComponentProps } from "react";
import { Platform, Pressable, Text, PressableProps } from "react-native";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  children: React.ReactNode;
};

export function ExternalLink({ href, children, style, ...rest }: Props) {
  if (Platform.OS !== "web") {
    const pressableProps: PressableProps = {
      onPress: async () => {
        await openBrowserAsync(href);
      },
    };

    return (
      <Pressable {...pressableProps}>
        <Text {...rest}>{children}</Text>
      </Pressable>
    );
  }

  return (
    <Link target="_blank" {...rest} href={href as any}>
      {children}
    </Link>
  );
}
