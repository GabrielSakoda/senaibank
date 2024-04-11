import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './pages/Home'
import Dinheiro from './pages/Dinheiro'
import Loja from './pages/Loja'
import { CustomTabBar } from './components/CustomTabBar'
const Tab = createBottomTabNavigator();
export function Routes(){
    return(
        <Tab.Navigator 
            screenOptions={{
            headerShow:false,
            tabBarHideOnKeyboard:true,
            tabBarActiveTintColor:"#121212",
            tabBarStyle:{
                borderTopWidth: 0,
                backgroundColor: "#FFF" }
            }}
            tabBar={(props) => <CustomTabBar {...props}/>}>
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: "compare-arrows"}}/>
            <Tab.Screen name="Dinheiro" component={Dinheiro} options={{tabBarIcon: "attach-money"}}/>
            <Tab.Screen name="Loja" component={Loja} options={{tabBarIcon: "storefront"}}/>
        </Tab.Navigator>
    )
}