import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../../screens/OnBoarding';
import RequestScreen from '../../screens/RequestScreen';
import MatchScreen from '../../screens/MatchScreen';
import MessageScreen from '../../screens/MessageScreen';
import ChatScreen from '../../screens/ChatScreen';

const Stack = createStackNavigator();

const MianNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="OnBoarding">

            <Stack.Screen name="OnBoarding" component={OnBoarding}
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
        </Stack.Navigator>
    )
}

export default MianNavigation