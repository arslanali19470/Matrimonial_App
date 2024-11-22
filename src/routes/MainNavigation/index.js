import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../../screens/OnBoarding';
import RequestScreen from '../../screens/RequestScreen';
import MatchScreen from '../../screens/MatchScreen';
import MessageScreen from '../../screens/MessageScreen';
import ChatScreen from '../../screens/ChatScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import Home from '../../screens/Home';
import ProfileView from '../../screens/ProfileView';
import ThemeScreen from '../../screens/ThemeScreen';
import TermsScreen from '../../screens/TermsScreen';
import LoginScreen from '../../screens/LoginScreen';
import EditProfile from '../../screens/EditProfile';

const Stack = createStackNavigator();

const MianNavigation = () => {
    return (
        <>
            <Stack.Navigator initialRouteName="LoginScreen">

                <Stack.Screen name="OnBoarding" component={OnBoarding}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="Home" component={Home}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="ProfileView" component={ProfileView}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="RequestScreen" component={RequestScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="MatchScreen" component={MatchScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="MessageScreen" component={MessageScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="ChatScreen" component={ChatScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen}
                    options={{
                        headerShown: false,
                    }} />

                <Stack.Screen name="ThemeScreen" component={ThemeScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="TermsScreen" component={TermsScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="EditProfile" component={EditProfile}
                    options={{
                        headerShown: false,
                    }} />
            </Stack.Navigator>
        </>
    )
}

export default MianNavigation