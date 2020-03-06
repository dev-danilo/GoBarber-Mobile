import React from 'react';
import {View, Text, Button} from 'react-native';
// import { Container } from './styles';
import PropTypes from 'prop-types';
import Background from '~/components/Background';

export default function SignIn({navigation}) {
  return (
    <Background>
      <View>
        <Text>TESTANDO</Text>

        <Button
          title="Navigate to SignUp"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
