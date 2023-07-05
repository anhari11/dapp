import React, { useEffect } from 'react';
import { requireNativeComponent, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ConnectWallet, localWallet, metamaskWallet, rainbowWallet, ThirdwebProvider } from '@thirdweb-dev/react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Tokens from './Tokenscreen';
import ListTokens from './ListTokens';
import Tokenss from './Tokens';


import Homescreen from './Homescreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();




export default function App() {
  return (
   
    <NavigationContainer>
      
      
 
        
        <Stack.Navigator>
         
        <Stack.Screen name="e" component={Homescreen} />
        <Stack.Screen name="Tokenscreen" component={Tokens} />
        <Stack.Screen name="ListTokens" component={ListTokens} />
        <Stack.Screen name="SpowTokens" component={Tokenss} />

       
      </Stack.Navigator>
    
   
    
    
    </NavigationContainer>
    
  );
}
