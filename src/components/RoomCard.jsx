import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoomCard({
  room,
  room: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/rooms/${id}`, { state: { room } });
      }}
      className='rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-100'
    >
      <img className='w-full' src={image} alt={title} />
      <div className='mt-2 px-2 text-lg flex justify-between items-center'>
        <h3 className='truncate'>{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p className='mb-2 px-2 text-gray-600'>{category}</p>
    </li>
  );
}
