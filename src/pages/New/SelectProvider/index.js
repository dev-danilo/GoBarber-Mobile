import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import api from '~/services/api';

import {Container, Title, ProviderList, Provider, Avatar, Name} from './styles';

export default function SelectProvider({navigation}) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');

      setProviders(response.data);
    }

    loadProviders();
  });

  return (
    <Background>
      <Container>
        <Title>Selecione o prestador</Title>
        <ProviderList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({item: provider}) => (
            <Provider
              onPress={() => {
                navigation.navigate('SelectDateTime');
              }}>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url.replace('localhost', '192.168.0.108')
                    : `https://api.adorable.io/avatar/120/${provider.name}.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}
SelectProvider.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
