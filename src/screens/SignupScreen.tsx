import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Keyboard, StatusBar } from 'react-native';
import { useState } from 'react';


export default function RegisterScreen() {
  const navigation = useNavigation<any>();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  Keyboard.addListener('keyboardDidShow', () => {
    setKeyboardVisible(true);
  });

  Keyboard.addListener('keyboardDidHide', () => {
    setKeyboardVisible(false);    
  });

  return (
    <View  style={tw`bg-white h-full w-full`} >
        <StatusBar barStyle={'dark-content'} backgroundColor={'#f1f1f1'} />
        <Image style={tw`h-160 w-full absolute`} source={require('../assets/images/background.png')} />

        {/* lights */}
        <View style={tw`flex-row justify-around w-full absolute`}>
          <Animated.Image entering={FadeInUp.delay(200).duration(1500).springify().damping(2)} style={tw`h-[46.4] w-[18.7]`} source={require('../assets/images/light.png')} />
          <Animated.Image entering={FadeInUp.delay(400).duration(1500).springify().damping(2)} style={tw`h-[35] w-[14.1]`} source={require('../assets/images/light.png')} />
        </View>

        {/* title and form */}
        <View style={tw`h-full w-full flex justify-around pt-50 pb-10`}>
          {/* title */}
          <View style={tw` flex items-center`}>
            <Animated.Text entering={FadeInUp.duration(1000).springify()} style={tw`text-white font-bold tracking-wider text-4xl `}>S'inscrire</Animated.Text>
          </View>

          {/* form */}
          <View style={[tw`flex items-center mx-4 gap-y-4 mt-20`, isKeyboardVisible && styles.keyboardContainer]}>
          {isKeyboardVisible && <Text style={tw`text-3xl font-bold text-center text-gray-800 pb-3`}>S'inscrire</Text>}

            <Animated.View entering={FadeInDown.duration(1000).springify()} style={tw`bg-black/5 p-1.5 rounded-2xl w-full`}>
              <TextInput style={tw`pl-2`} placeholder='Nom complet' placeholderTextColor={'gray'} importantForAutofill='no'/>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={tw`bg-black/5 p-1.5 rounded-2xl w-full`}>
              <TextInput style={tw`pl-2`} placeholder='Adresse email' placeholderTextColor={'gray'} importantForAutofill='no'/>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={tw`bg-black/5 p-1.5 rounded-2xl w-full`}>
              <TextInput style={tw`pl-2`} placeholder='Mot de passe' placeholderTextColor={'gray'} secureTextEntry importantForAutofill='no'/>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={tw`bg-black/5 p-1.5 rounded-2xl w-full mb-3`}>
              <TextInput style={tw`pl-2`} placeholder='Confirmer le mot de passe' placeholderTextColor={'gray'} secureTextEntry importantForAutofill='no'/>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={tw`w-full`}>
              <TouchableOpacity style={tw`w-full bg-sky-400 p-3 rounded-2xl mb-3`}>
                <Text style={tw`text-xl font-bold text-white text-center`}>S'inscrire</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} style={tw`flex-row justify-center`}>
              <Text>Avez-vous deja un compte ? </Text>
              <TouchableOpacity onPress={() => navigation.push('Login')}>
                <Text style={tw`text-sky-600`}>Se connecter</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>

        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  keyboardContainer:  {
    width: '100%', 
    position: 'absolute', 
    backgroundColor: '#fff', 
    top: 22,
    padding: 15,
    marginLeft: 0,
    paddingTop: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  }
});