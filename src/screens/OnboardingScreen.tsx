import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';

const OnboardingScreen = () => {
  const [statusBarStyle, setStatusBarStyle] = useState<'dark-content' | 'light-content'>('light-content');
  const [statusBarBackground, setStatusBarBackground] = useState('#a78bfa');

  const navigation = useNavigation<any>();

  const handlePageChange = (index: number) => {
    switch (index) {
      case 0:
        setStatusBarStyle('light-content');
        setStatusBarBackground('#a78bfa');
        break;
      case 1:
        setStatusBarStyle('dark-content');
        setStatusBarBackground('#fef3c7');
        break;
      case 2:
        setStatusBarStyle('dark-content');
        setStatusBarBackground('#a7f3d0');
        break;
      default:
        setStatusBarStyle('dark-content');
        setStatusBarBackground('#fff');
        break;
    }
  };

  const handleDone = async () => {

    navigation.navigate('Home');
    await setItem('onboarded', '1');
  };

  const doneButton = ({ ...props }) => {

        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text style={styles.doneButtonText}>Commencer !</Text>
            </TouchableOpacity>
        )
    };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarBackground} />
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        controlStatusBar={false}
        bottomBarHighlight={false}
        bottomBarHeight={80}
        DoneButtonComponent={doneButton}
        pageIndexCallback={handlePageChange}
        skipLabel={'Sauter'}
        nextLabel={'Suivant'}
        onDone={handleDone}
        onSkip={handleDone}
        pages={[
          {
            backgroundColor: '#a78bfa',
            image: (
              <LottieView style={styles.lottie} source={require('../assets/animations/wow.json')} autoPlay loop />
            ),
            title: 'Mon bulletin',
            subtitle: 'Bienvenue a vous, mon bulletin est une application simple et facile a utiliser pour calculer votre moyenne le simplement et rapidement possible !',
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <LottieView style={styles.lottie} source={require('../assets/animations/fruit.json')} autoPlay loop />
            ),
            title: 'Paramettre et profil',
            subtitle: 'Heureux de vous avoir parmis nous, paramettrer et personnaliser votre application selon votre gout',
          },
          {
            backgroundColor: '#a7f3d0',
            image: (
              <LottieView style={styles.lottie} source={require('../assets/animations/arc.json')} autoPlay loop />
            ),
            title: 'Commencer dès maintenant',
            subtitle: 'Creer un nouveau bulletin de notes et personnaliser la de votre facon, Let\'s go !',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    lottie: {
        width: 300,
        height: 400,
    },
    doneButton: {
        width: 220,
        position: 'relative',
        left: '-43%',
        borderColor: 'green',
        borderWidth: 1.5,
        backgroundColor: '#00b16a',
        padding: 18,
        marginBottom: 15,
        borderRadius: 15
    },
    doneButtonText: {
        fontSize: 16,
        textAlign: 'center',
    }
});

export default OnboardingScreen;
