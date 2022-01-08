import * as React from 'react';
import { Button, Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Login from './src/pages/Login';
import CardDetails from './src/pages/CardDetails';
import DataTimePicker from './src/components/DataTimePicker';
import Card from './src/components/Card';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Message from './src/pages/Message';
import SearchMap from './src/pages/SearchMap';
import { SafeAreaView } from 'react-native-safe-area-context';
import MessageDetails from './src/pages/MessageDetails';
import ChartAll from './src/components/ChartAll';
import Add from './src/pages/Add';

function LoginScreen() {
  return (
    <Login />
  );
}
function CardScreen() {
  return (
    <CardDetails />
  );
}
function DataTimePickerScreen() {
  return (
    <DataTimePicker />
  );
}
function MessageScreen({ navigation }) {
  return (
    <Message onPress={() => navigation.navigate('MessageDetails')} />
  );
}
function MessageDetailsScreen({ navigation }) {
  return (
    <MessageDetails />
  );
}
function SearchScreen() {
  return (
    <SafeAreaView>
      <SearchMap />
    </SafeAreaView>

  );
}
function ChartScreen() {
  return (
    <View>
      <ChartAll />
    </View>

  );
}
function AddScreen() {
  return (
    <Add />

  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView>
        <Card onPress={() => navigation.navigate('Card')} />
        <Card onPress={() => navigation.navigate('Card')} />
        <Card onPress={() => navigation.navigate('Card')} />
        <Card onPress={() => navigation.navigate('Card')} />
        <Card onPress={() => navigation.navigate('Card')} />
        <Card onPress={() => navigation.navigate('Card')} />
      </ScrollView>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View>
      <ScrollView >
        <View style={styles.SettingsScreen}>
          <TouchableOpacity style={styles.packet} onPress={() => navigation.navigate('Login')}>
            <Text>Go to Login</Text>
            <SimpleLineIcons name="login" size={30} style={styles.icons} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.packet} onPress={() => navigation.navigate('DataTime')}>
            <Text>Goto Data picker</Text>
            <FontAwesome name="calendar-times-o" size={24} style={styles.icons} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.SettingsScreen}>
          <TouchableOpacity style={styles.packet} onPress={() => navigation.navigate('ChartAll')}>
            <Text>Go to  Chart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.packet} onPress={() => navigation.navigate('DataTime')}>
            <Text>Go to  Data picker</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SettingsScreen}>
          <TouchableOpacity style={styles.packet} onPress={() => navigation.navigate('DataTime')}>
            <Text>Go to  Data picker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.packet} onPress={() => navigation.navigate('DataTime')}>
            <Text>Go to  Data picker</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SettingsScreen}>
          <TouchableOpacity style={styles.packet} onPress={() => navigation.navigate('DataTime')}>
            <Text>Go to  Data picker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.packet} onPress={() => navigation.navigate('DataTime')}>
            <Text>Go to  Data picker</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>


  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerStyle: {
          backgroundColor: 'rgb(76, 51, 152)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <HomeStack.Screen name="Login" component={LoginScreen} />
      <HomeStack.Screen name="Card" component={CardScreen}
        options={{
          headerStyle: {
            backgroundColor: 'rgb(76, 51, 152)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      <HomeStack.Screen name="Card1" component={MessageDetailsScreen} />
    </HomeStack.Navigator>
  );
}
const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={AddScreen} options={{
        headerStyle: {
          backgroundColor: 'rgb(76, 51, 152)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
    </SearchStack.Navigator>
  );
}
const MessageStack = createNativeStackNavigator();

function MessageStackScreen() {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen name="Messages" component={MessageScreen} options={{
        headerStyle: {
          backgroundColor: 'rgb(76, 51, 152)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <MessageStack.Screen name='MessageDetails' component={MessageDetailsScreen} options={{
        headerStyle: {
          backgroundColor: 'rgb(76, 51, 152)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
    </MessageStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Login" component={LoginScreen} />
      <SettingsStack.Screen name="Card" component={CardScreen} />
      <SettingsStack.Screen name="DataTime" component={DataTimePickerScreen} />
      <SettingsStack.Screen name="Search" component={SearchScreen} />
      <SettingsStack.Screen name="Message" component={MessageScreen} />
      <SettingsStack.Screen name="ChartAll" component={ChartScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={'black'} style={styles.icons} size={30} />
            ),
          }} />
        <Tab.Screen name="Search" component={SearchStackScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-search" size={34} style={styles.icons} color="black" />
            ),
          }} />
        <Tab.Screen name=" " component={SettingsStackScreen}
          options={{

            tabBarIcon: ({ color, size }) => (
              <View style={styles.iconsAdd}>
                <Ionicons name="add-outline" size={60} color="'rgb(219, 219, 255)'" />
              </View>

            ),
          }} />
        <Tab.Screen name="Messages" component={MessageStackScreen}
          options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="message1" size={30} style={styles.icons} color="black" />
            ),
          }} />
        <Tab.Screen name="Settings" component={SettingsStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="profile" size={30} style={styles.icons} color="black" />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  packet: {
    width: '45%',
    height: 85,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginVertical: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    padding: 25,
    flexDirection: 'row',
  },
  SettingsScreen: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsAdd: {
    position: 'relative',
    height: '195%',
    backgroundColor: 'rgb(76, 51, 152)',
    borderRadius: 95,
    paddingLeft: 7,
    paddingRight: 4,
    paddingVertical: 2,
    alignItems: 'center',
    margin: 4,
  },
  icons: {
    marginHorizontal: 10,
    marginVertical: 3,
  },
});
