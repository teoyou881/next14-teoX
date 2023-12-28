import SearchForm from '@/app/(afterLogin)/_component/SearchForm';
import React from 'react';
import Trend from '@/app/(afterLogin)/_component/Trend';
import style from './explore.module.css';

export default function Page() {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>For you</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </main>
  );
}
