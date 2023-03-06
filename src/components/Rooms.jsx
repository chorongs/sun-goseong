import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getRooms } from '../api/firebase';
import RoomCard from './RoomCard';

export default function Rooms() {
  const { isLoading, error, data: rooms } = useQuery(['rooms'], getRooms);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4'>
        {rooms && rooms.map((room) => <RoomCard key={room.id} room={room} />)}
      </ul>
    </>
  );
}
