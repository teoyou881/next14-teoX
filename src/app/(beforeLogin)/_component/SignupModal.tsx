'use client';

import style from './signup.module.css';
import { useRouter } from 'next/navigation';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import BackButton from '@/app/(beforeLogin)/_component/BackButtorn';

export default function SignupModal() {
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };

  const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };
  const onChangeNickname: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNickname(e.target.value);
  };
  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };
  const onChangeImage: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.files && setImageFile(e.target.files[0]);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <BackButton />
            <div>Create your account</div>
          </div>
          <form>
            <div className={style.modalBody}>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor='id'>아이디</label>
                <input id='id' name='id' className={style.input} type='text' placeholder=''
                       value={id} onChange={onChangeId} required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor='name'>닉네임</label>
                <input id='name' name='name' className={style.input} type='text' placeholder=''
                       value={nickname} onChange={onChangeNickname} required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor='password'>비밀번호</label>
                <input id='password' name='password' className={style.input} type='password' placeholder=''
                       value={password} onChange={onChangePassword} required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor='image'>프로필</label>
                <input id='image' name='image' required className={style.input} type='file' accept='image/*'
                       onChange={onChangeImage}
                />
              </div>
            </div>
            <div className={style.modalFooter}>
              <button type='submit' className={style.actionButton}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>);
}
