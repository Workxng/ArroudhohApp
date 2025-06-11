import Entypo from '@expo/vector-icons/Entypo';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {

  const icons = {
    Home: (props)=> <Entypo name="home" size={24} color={greyColor} {...props} />,
    Explore: (props)=> <Entypo name="compass" size={24} color={greyColor} {...props} />,
  }

  const primaryColor = '#3c946c';
  const greyColor = '#d2dcd5';

  return (
    <View style={styles.container}>
      <View style={styles.tabbar}>
        {state.routes.map((route, index) => {
          if(['_sitemap', '+not-found'].includes(route.name)) return null;

          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          
          const label = options.tabBarLabel || options.title || route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={[
                styles.tabItem,
                isFocused && styles.tabItemFocused
              ]}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
            >
              {
                icons[route.name] ({
                  color: isFocused? primaryColor : greyColor,
                })
              }
              <Text style={[
                styles.tabText,
                { color: isFocused ? primaryColor : greyColor, fontWeight: isFocused ? 'bold' : 'normal'}
              ]}>
                {typeof label === 'function' ? label({ focused: isFocused }) : label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 35,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tabbar: {
    width: '90%', // Adjust width as needed
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5, // For Android
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  tabItemFocused: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)', // Light blue background for focused tab
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
  }
});