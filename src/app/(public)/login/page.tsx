'use client';

import { login } from '@/actions/login';
import { Button, Checkbox, Heading, Text, TextInput, useTheme } from '@unimake-ui/react';
import { LockKeyhole, LucideLogIn, Mail } from 'lucide-react';
import { Form, Header, Main, RememberMeBox } from './styles';

export default function Home() {
  const theme = useTheme();

  return (
    <Main>
      <Form as="form" action={login}>
        <Header>
          <LucideLogIn size={64} color={theme.colors.unimake500} />
          <div>
            <Heading $size="lg" $weight="bold">
              Ignite Lab
            </Heading>
            <Text $variant="lighter">Faça login e comece a usar!</Text>
          </div>
        </Header>

        <label htmlFor="email">
          <Text $size="sm">Endereço de e-mail</Text>
          <TextInput $size="lg" id="email" $startIcon={<Mail />} />
        </label>

        <label htmlFor="pass">
          <Text $size="sm">Sua Senha</Text>
          <TextInput id="pass" type="password" $startIcon={<LockKeyhole />} />
        </label>

        <RememberMeBox htmlFor="remember">
          <Checkbox value="remember-me" id="remember" />
          <Text $variant="lighter" $size="sm">
            Lembrar de mim por 30 dias
          </Text>
        </RememberMeBox>

        <Button type="submit">Entrar na plataforma</Button>
      </Form>
    </Main>
  );
}
