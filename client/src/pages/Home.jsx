import React from 'react';
import { Create } from './Create';
import { Input } from '../@/components/ui/input';

// Dummy data for posts
const dummyPosts = [
  {
    id: 1,
    link: 'https://example.com',
    image: 'https://example.com/image1.jpg',
    song: 'Song 1',
    singer: 'Singer 1',
    genre: 'Genre 1'
  },
  {
    id: 2,
    link: 'https://example.com',
    image: 'https://example.com/image2.jpg',
    song: 'Song 2',
    singer: 'Singer 2',
    genre: 'Genre 2'
  },

];

const Post = ({ link, image, song, singer, genre, onClick, id }) => (
  <div className='flex flex-col border w-fit gap-x-3 p-3 rounded-2xl z-0'>
    <div>
      <img src={image} alt="" className='bg-slate-300 h-44 rounded-2xl object-contain' />
    </div>

    <div className='flex items-center justify-between pt-3'>
      <div className='flex-col'>
        <p className='text-[15px]'>{song}</p>
        <div>
          <p className='text-[12px]'>{singer}</p>
          <p className='text-[12px]'>{genre}</p>
        </div>
      </div>
      <button onClick={onClick} className='bg-purple-200 px-3 py-2 rounded-lg text-[12px]'>delete</button>
    </div>
  </div>
);

const Home = () => {
  const Navbar = () => {
    return (
      <div className='w-full flex justify-center items-center p-2 gap-x-6 text-[15px] fixed bg-purple-50'>
        <Create />
        <Input value={''} onChange={''} placeholder="Search..." />
      </div>
    );
  };

  return (
    <div className='w-full h-fit p-1'>
      <Navbar />
      <div className='w-full h-full pt-20 flex flex-wrap justify-center gap-y-3 gap-x-3'>
        {dummyPosts.map(post => (
          <Post
            key={post.id}
            link={post.link}
            image={post.image}
            song={post.song}
            singer={post.singer}
            genre={post.genre}
            onClick={() => { }}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
