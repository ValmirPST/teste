import { Text } from '@unimake-ui/react';
import Link from 'next/link';

export default function Page() {
  return (
    <Text as={Link} href={'/login'}>
      Login
    </Text>
  );
}
