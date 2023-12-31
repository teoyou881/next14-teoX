'use client';

import style from '../search.module.css';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Tab() {
  const [current, setCurrent] = useState('forYou');
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickTop = () => {
    setCurrent('top');
    router.replace(`/search?q=${searchParams.get('q')}`);
  };
  const onClickLatest = () => {
    setCurrent('latest');
    // router.replace(`/search?${searchParams.toString()}&f=live`);
    router.replace(`/search?q=${searchParams.get('q')}&f=live`);
  };
  const onClickPeople = () => {
    setCurrent('people');
    // router.replace(`/search?${searchParams.toString()}&f=user`);
    router.replace(`/search?q=${searchParams.get('q')}&f=user`);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickTop}>
          Top
          <div className={style.tabIndicator} hidden={current !== 'top'}></div>
        </div>
        <div onClick={onClickLatest}>
          latest
          <div className={style.tabIndicator} hidden={current !== 'latest'}></div>
        </div>
        <div onClick={onClickPeople}>
          News
          <div className={style.tabIndicator} hidden={current !== 'people'}></div>
        </div>
      </div>
    </div>
  );
}
