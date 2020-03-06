import React from 'react';
import {View, Button} from 'react-native';
// import { Container } from './styles';
import PropTypes from 'prop-types';
import Background from '~/components/Background';

export default function SignUp({navigation}) {
  return (
    <Background>
      <View>
        <Button
          title="Navigate to SignIn"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </Background>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
