import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { login } from '../api/firebase';

export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-black-300 p-2'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>Sun_Goseong</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/rooms'>Room</Link>
        <Link to='/carts'>Cart</Link>
        <Link to='rooms/new' className='text-2xl'>
          <BsFillPencilFill />
        </Link>
        <button onClick={login}>Login</button>
      </nav>
    </header>
  );
}
