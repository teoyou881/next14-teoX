'use client';

import style from './trendSection.module.css';

import { usePathname } from 'next/navigation';
import Trend from './Trend';


export default function TrendSection() {

  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>What's happening</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
