'use client';

import style from '@/app/(beforeLogin)/_component/Login.module.css';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import BackButton from '@/app/(beforeLogin)/_component/BackButtorn';

export default function LoginModal() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await signIn('credentials', {
        username: id,
        password,
        redirect: false,
      });
      if (!response?.ok) {
        setMessage('Username and password don\'t match.');
      } else {
        router.replace('/home');
      }
    } catch (err) {
      console.error(err);
      setMessage('Username and password don\'t match.');
    }
  };
  const onClickClose = () => {
    router.back();
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <BackButton />
          <div>Sign in to T</div>
        </div>
        <form onSubmit={onSubmit}>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor='id'>
                Id
              </label>
              <input id='id' className={style.input} value={id} onChange={onChangeId} type='text' placeholder='' />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor='password'>
                Password
              </label>
              <input
                id='password'
                className={style.input}
                value={password}
                onChange={onChangePassword}
                type='password'
                placeholder=''
              />
            </div>
          </div>
          <div className={style.message}>{message}</div>
          <div className={style.modalFooter}>
            <button className={style.actionButton} disabled={!id && !password}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
