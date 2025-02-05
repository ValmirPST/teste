'use server';

import { cookies } from 'next/headers';

export async function login(formData: FormData) {
  await new Promise(res => setTimeout(res, 1000));

  const data = Object.fromEntries(formData);
  console.log(data);

  (await cookies()).set('token', 'token', {
    maxAge: 60 * 5, // 5 minutos
  });
}

export async function logout() {
  await new Promise(res => setTimeout(res, 1000));

  (await cookies()).delete('token');
}
