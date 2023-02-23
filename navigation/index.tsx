import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors, { BottomHeadersColours } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../views/ModalScreen';
import NotFoundScreen from '../views/NotFoundScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from '../views/HomeScreen';
import Authorization from '../auth';
import FavouritesScreen from '../views/Favourites';
import TrendingScreen from '../views/Trending';
import ProfileScreen from '../views/Profile';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import ModalById from '../views/components/Home/ModalById';
import Toggle from '../components/toggle/Toggle';
import { useTheme } from '../context/context';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const [user, setUser] = React.useState(null);
  const auth = getAuth();


  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      {!user ? (
        <>
          <Authorization />
        </>
      ) : (
        <>
          <HomeNavigator />
        </>
      )}
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Authorization"
        component={BottomTabNavigator}
        options={{ title: 'Home' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="ModalById" component={ModalById} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { theme } = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) =>
        ({
          tabBarIcon: ({ color, size }: any) => {
            let iconName: any;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Trending') {
              iconName = 'fire';
            } else if (route.name === 'Favourites') {
              iconName = 'heart';
            } else if (route.name === 'Profile') {
              iconName = 'cog';
            }
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor:
              route.name === 'Home'
                ? BottomHeadersColours.home
                : route.name === 'Trending'
                ? BottomHeadersColours.trending
                : route.name === 'Favourites'
                ? BottomHeadersColours.favourites
                : BottomHeadersColours.profile,
          },
        } as any)
      }
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          headerTintColor: theme === 'light' ? Colors.dark.text : Colors.light.text,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="cart-plus"
                size={25}
                color={Colors.dark.text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          headerLeft: () => <Toggle />,
          tabBarActiveTintColor: BottomHeadersColours.home,
          headerStyle: {
            backgroundColor: BottomHeadersColours.home,
          },
        })}
      />
      <BottomTab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          title: 'Favourites',
          headerTintColor: theme === 'light' ? Colors.dark.text : Colors.light.text,
          tabBarActiveTintColor: BottomHeadersColours.favourites,
          headerStyle: {
            backgroundColor: BottomHeadersColours.favourites,
          },
        }}
      />
      <BottomTab.Screen
        name="Trending"
        component={TrendingScreen}
        options={{
          title: 'Trending',
          headerTintColor: theme === 'light' ? Colors.dark.text : Colors.light.text,
          tabBarActiveTintColor: BottomHeadersColours.trending,
          headerStyle: {
            backgroundColor: BottomHeadersColours.trending,
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerTintColor: theme === 'light' ? Colors.dark.text : Colors.light.text,
          tabBarActiveTintColor: BottomHeadersColours.profile,
          headerStyle: {
            backgroundColor: BottomHeadersColours.profile,
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
