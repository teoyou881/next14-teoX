import Link from 'next/link';
import style from './trend.module.css';

export default function Trend() {
  return (
    <Link href={'/search?q=trend'} className={'container'}>
      <div className={style.count}></div>
      <div className={style.title}>trend</div>
      <div className={style.count}>trend posts</div>
    </Link>
  );

}
