import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Repository from '~/components/Repository';

import {
  Container, Title, Form, Input, Submit, List,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input autoCapitilize={false} autoCorrect={false} placeholder="Procurar repositório..." />
        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'easy-curriculum',
            description: 'ReactJS form library to create uncontrolled form structures with nested fields, validations and much more!',
            stars: 1042,
            forks: 133,
          },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Repository data={item} />
        )}
      />
    </Container>
  );
}
