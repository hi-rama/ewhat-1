import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HOME from "./pages/Home";
import FirstSetting from "./pages/FirstSetting";
import InputSubject from "./pages/InputSubject";


const Stack = createStackNavigator();

const StackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName = "Home">
            <Stack.Screen name = "FirstSetting" component = {FirstSetting}/>
            <Stack.Screen name = "Home" component = {HOME}/>
            <Stack.Screen name = "InputSubject" component = {InputSubject}/>
            
        </Stack.Navigator>
    );
};

export default StackNavigation;
