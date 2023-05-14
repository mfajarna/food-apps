import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../../pages/SplashScreen/SplashScreen";
import AuthScreen from "../../pages/AuthScreen/AuthScreen";
import SigninScreen from "../../pages/SigninScreen/SigninScreen";
import SignupScreen from "../../pages/SignupScreen/SignupScreen";
import DashboardScreen from "../../pages/DashboardScreen/DashboardScreen";
import MakananScreen from "../../pages/MakananScreen/MakananScreen";
import MinumanScreen from "../../pages/MinumanScreen/MinumanScreen";
import CartScreen from "../../pages/CartScreen/CartScreen";


export type RootStackParamsList = {
    SplashScreen: undefined,
    AuthScreen: undefined,
    SigninScreen: undefined,
    SignupScreen: undefined,
    DashboardScreen: undefined,
    MakananScreen: undefined,
    MinumanScreen: undefined,
    CartScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

const Route = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="AuthScreen"
                    component={AuthScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="SigninScreen"
                    component={SigninScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="SignupScreen"
                    component={SignupScreen}
                    options={{
                        headerShown: false
                    }}
                />


                <Stack.Screen
                    name="DashboardScreen"
                    component={DashboardScreen}
                    options={{
                        headerShown: false
                    }}
                />  

                <Stack.Screen
                    name="MakananScreen"
                    component={MakananScreen}
                    options={{
                        headerShown: false
                    }}
                />  

                <Stack.Screen
                    name="MinumanScreen"
                    component={MinumanScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="CartScreen"
                    component={CartScreen}
                    options={{
                        headerShown: false
                    }}
                />      
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Route;