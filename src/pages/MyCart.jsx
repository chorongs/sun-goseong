import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import CartItem from '../components/CartItem';
import { BsFillPCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';

const SERVICE = 10000;
export default function MyCart() {
  const { uid } = useAuthContext;
  const { isLoading, data: rooms } = useQuery(['carts'], getCart(uid));

  if (isLoading) return <p>Loading...</p>;

  const hasRooms = rooms && rooms.length > 0;
  const totalPrice =
    rooms &&
    rooms.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  return (
    <section>
      <p>내 장바구니</p>
      {!hasRooms && <p>장바구니에 객실이 없습니다. 확인 부탁드립니다!</p>}
      {hasRooms && (
        <>
          <ul>
            {rooms &&
              rooms.map((room) => (
                <CartItem key={room.id} room={room} uid={uid} />
              ))}
          </ul>
          <div>
            <PriceCard text='객실 총액' price={totalPrice} />
            <BsFillPCircleFill />
            <PriceCard text='서비스 수수료' price={SERVICE} />
            <FaEquals />
            <PriceCard text='총금액' price={totalPrice + SERVICE} />
          </div>
        </>
      )}
    </section>
  );
}
