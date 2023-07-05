import {
  ConnectWallet,
  localWallet,
  metamaskWallet,
  rainbowWallet,
  ThirdwebProvider,
  Web3Button,
  coinbaseWallet,
  
  WalletAddress,
  useAddress
  
} from '@thirdweb-dev/react-native';
import { useNavigation } from '@react-navigation/native';
import Tokens from './Tokenscreen'
import { ArrowDownIcon, ChevronRightIcon } from "react-native-heroicons/outline";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Dimensions
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React, { useEffect } from 'react';
import { Wallet } from 'ethers';

const Homescreen = () => {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;
  const halfscreen = width / 2;
  const address = useAddress();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleVerifyPress = () => {
    console.log('Verify button pressed');
    // Add your logic here to handle the verify button press
  };
 



  return (
    <ThirdwebProvider
      activeChain="polygon"
      supportedWallets={[metamaskWallet()]}
    >
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <SafeAreaView style={{ flex: 1 }}>
          <ConnectWallet buttonTitle="Connect Wallet" />
          
          <View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 40, marginTop: 10 }}>
              SWAP
            </Text>
            <View style={styles.inputContainer}>
              <TextInput 
                placeholderTextColor={"black"}
                style={styles.input} />
              <TouchableOpacity  onPress={() => navigation.navigate("Tokenscreen")} style={styles.button}>
                <Text style={styles.buttonText}>ETH</Text>
                <ChevronRightIcon style={{ color: "white", marginLeft: 7 }}/>
                
              </TouchableOpacity>
            </View>
            <View>  
              <ArrowDownIcon style={{ color: 'white', marginLeft: halfscreen, marginTop: 5 }}/>
            </View>
            <View style={styles.inputContainer} >
              <TextInput 
                style={styles.input} />
              <TouchableOpacity style={styles.spow}>
                <Text style={styles.buttonText}>Choose a token</Text>
                <ChevronRightIcon style={{ color: "white", marginLeft: 7 }}/>
                {address && (
            <Text style={{ color: 'white' }}>{address}</Text>
          )}
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        
      </View>
    </ThirdwebProvider>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 140,
    
    borderWidth: 2,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 20,
    paddingVertical: 80,
    backgroundColor: '#141a2a',
  },
  button: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -20 }],
    flexDirection: "row",
    backgroundColor: '#2a3249',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    zIndex: 2,
  },
  spow: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -20 }],
    flexDirection: "row",
   
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginRight: 50,
    borderRadius: 25,
    zIndex: 2,
    color: "pink",
    backgroundColor: '#FF1493',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonTexta: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: "pink"
  },
});

export default Homescreen;
