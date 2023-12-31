import React, { ReactNode } from 'react';
import style from '@/app/(afterLogin)/layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import tLogo from '@/../public/tLogo.png';
import NavMenu from '@/app/(afterLogin)/_component/NavMenu';
import LogOutButton from '@/app/(afterLogin)/_component/LogOutButton';
import TrendSection from '@/app/(afterLogin)/_component/TrendSection';
import FollowRecommend from '@/app/(afterLogin)/_component/FollowRecommend';
import RightSearchZone from '@/app/(afterLogin)/_component/RightSearchZone';

type Props = { children: ReactNode, modal: ReactNode }
export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href='/home'>
              <div className={style.logoPill}>
                <Image src={tLogo} alt='t.com logo' width={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href='/compose/tweet' className={style.postButton}>Post</Link>
            </nav>
            <LogOutButton />
          </div>
        </section>
      </header>
      <header className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={style.followRecommend}>
              <h3>Who to follow</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </header>
      {modal}
    </div>
  );
}
