import React, { useState } from 'react';

export default function NewRoom() {
  const [room, setRoom] = useState({});
  const [file, setFile] = useState();

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
    // 제품의 사진을 Cloudinary에 업로드 하고 URL을 획득
    // Firebase에 새로운 제품을 추가합니다.
  };
  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt='local file' />}
      <form onSubmit={handleSubmit}>
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
      </form>
    </section>
  );
}
