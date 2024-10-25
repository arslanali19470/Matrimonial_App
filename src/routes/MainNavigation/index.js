import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../../screens/OnBoard';

const Stack = createStackNavigator();

const MianNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="OnBoarding">

            <Stack.Screen name="OnBoarding" component={OnBoarding}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    )
}

export default MianNavigation