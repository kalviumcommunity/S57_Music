import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Create } from './Create';
import { Input } from '../@/components/ui/input';

const Post = ({ link, image, song, singer, genre, onClick, id }: any) => (
  <div className='flex flex-col border w-fit gap-x-3 p-3 rounded-2xl  z-0'>
    <Link to={link}>
      <img src={image} alt="" className='bg-slate-300 h-44  rounded-2xl object-contain ' />
    </Link>

    <div className='flex items-center justify-between pt-3'>
      <div className='flex-col'>
        <p className='text-[15px]'>{song}</p>
        <div>
          <p className='text-[12px]'>{singer}</p>
          <p className='text-[12px]'>{genre}</p>
        </div>
      </div>
      <button onClick={onClick} className='bg-purple-200 px-3 py-2 rounded-lg text-[12px]'>delete</button>
      {/* <Update id={id} /> */}
    </div>
  </div>
);

const Home = () => {
  const [data, setData] = useState([]);

  const [searchInput, setSearchInput] = useState('');



  const Navbar = () => {
    return (
      <div className='w-full flex justify-center items-center p-2 gap-x-6 text-[15px] fixed bg-purple-50'>
        <Create />
        <Input value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder="Search..." />
      </div>
    );
  };

  return (
    <div className='w-full h-fit p-1'>
      <Navbar />
      <div className='w-full h-full pt-20 flex flex-wrap justify-center gap-y-3 gap-x-3'>
      </div>
    </div>
  );
};

export default Home;
