import style from './home.module.css';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import React from 'react';

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab></Tab>
        <PostForm></PostForm>
      </TabProvider>
    </main>
  );
}
