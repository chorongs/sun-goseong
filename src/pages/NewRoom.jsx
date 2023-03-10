import React, { useState } from 'react';
import { addNewRoom } from '../api/firebase';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';

export default function NewRoom() {
  const [room, setRoom] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setRoom((room) => ({ ...room, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        console.log(url);
        addNewRoom(room, url) //
          .then(() => {
            setSuccess('등록이 완료되었습니다.');
            setTimeout(() => {
              setSuccess(null);
            }, 5000);
          });
      })
      .finally(() => setIsUploading(false));
  };
  return (
    <section className='w-full text-center'>
      <h2 className='text-2xl font-bold my-4'>새로운 객실 등록</h2>
      {success && <p className='my-2'>✅{success}</p>}
      {file && (
        <img
          className='w-96 mx-auto mb-2'
          src={URL.createObjectURL(file)}
          alt='local file'
        />
      )}
      <form className='flex flex-col px-12' onSubmit={handleSubmit}>
        <input
          type='file'
          accept='image/*'
          name='file'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='title'
          value={room.title ?? ''}
          placeholder='방이름'
          required
          onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          value={room.price ?? ''}
          placeholder='가격'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={room.category ?? ''}
          placeholder='카테고리'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={room.description ?? ''}
          placeholder='방 설명'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='options'
          value={room.options ?? ''}
          placeholder='옵션들(콤마(,)로 구분)'
          required
          onChange={handleChange}
        />
        <Button
          text={isUploading ? '업로드중...' : '등록하기'}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
