import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeScreen = require("./screens/HomeScreen");
const DetailsScreen = require("./screens/DetailsScreen");

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator
        
        screenOptions={{
          headerStyle:{
            backgroundColor:"#eee8a6"
          }
        }}
      >
        <Menu.Screen name="Inicio" component={HomeScreen}/>
        <Menu.Screen name="Crypto Market" component={DetailsScreen}/>
      </Menu.Navigator>
    </NavigationContainer>
  );
}
