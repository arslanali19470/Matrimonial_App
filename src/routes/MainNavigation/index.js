import { createStackNavigator } from '@react-navigation/stack';
import OnBoard_1 from '../../screens/OnBoard/OnBoard_1';
import OnBoard_2 from '../../screens/OnBoard/OnBoard_2';
import OnBoard_3 from '../../screens/OnBoard/OnBoard_3';

const Stack = createStackNavigator();

const MianNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="OnBoard_1">
            <Stack.Screen name="OnBoard_1" component={OnBoard_1} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="OnBoard_2" component={OnBoard_2}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="OnBoard_3" component={OnBoard_3}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    )
}

export default MianNavigation