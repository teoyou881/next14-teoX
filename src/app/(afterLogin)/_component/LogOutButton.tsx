'use client';

import style from './logOutButton.module.css';

export default function LogOutButton() {
  const me = {
    id: 'test',
    nickname: 'test',
    image: '/tLogo.png',
  };
  const onLogout = () => {};
  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div> {me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
