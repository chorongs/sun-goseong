import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { getCart } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: rooms } = useQuery(['carts'], () => getCart(uid));

  return (
    <div className='relative'>
      <AiOutlineShoppingCart className='text-4xl' />
      {rooms && (
        <p className='w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-1 -right-2'>
          {rooms.length}
        </p>
      )}
    </div>
  );
}
