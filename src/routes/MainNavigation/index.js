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
import ProfileForm_1 from '../../screens/ProfileForm_1';
import ProfileForm_2 from '../../screens/ProfileForm_2';
import ProfileForm_3 from '../../screens/ProfileForm_3';
import ProfileForm_4 from '../../screens/ProfileForm_4';
import LookingFor_1 from '../../screens/LookingFor_1';
import LookingFor_2 from '../../screens/LookingFor_2';
import LookingFor_3 from '../../screens/LookingFor_3';
import PrefrenceScreen from '../../screens/PrefrenceScreen';
import AddProfileIMG from '../../screens/AddProfileIMG';

const Stack = createStackNavigator();

const MianNavigation = () => {
    return (
        <>
            <Stack.Navigator initialRouteName="AddProfileIMG">

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
                <Stack.Screen name="ProfileForm_1" component={ProfileForm_1}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="ProfileForm_2" component={ProfileForm_2}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="ProfileForm_3" component={ProfileForm_3}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="ProfileForm_4" component={ProfileForm_4}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="LookingFor_1" component={LookingFor_1}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="LookingFor_2" component={LookingFor_2}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="LookingFor_3" component={LookingFor_3}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="PrefrenceScreen" component={PrefrenceScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="AddProfileIMG" component={AddProfileIMG}
                    options={{
                        headerShown: false,
                    }} />
            </Stack.Navigator>
        </>
    )
}

export default MianNavigation