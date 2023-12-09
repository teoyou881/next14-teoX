'use client';

import Main from '@/app/(beforeLogin)/_component/Main';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  router.replace('/i/flow/login');
  return (
    <Main />
  );
}
