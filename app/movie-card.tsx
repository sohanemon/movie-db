'use client';
import { Movie } from '@/global.types';
import useMovieStore from '@/lib/store/movie-store';
import { PlayCircle, PlusCircle } from 'lucide-react';
import Image from 'next/image';

export default function MovieCard(props: Movie) {
  const { setSelectedMovie } = useMovieStore();
  return (
    <div
      role='button'
      onClick={() => setSelectedMovie(props)}
      className='p-3 bg-secondary rounded-xl'
    >
      <Image
        src={props.Poster}
        alt=''
        className='object-cover rounded-lg h-60'
        width={400}
        height={600}
      />
      <p className='text-gray-300 text-[15px]  font-semibold pt-3 pb-2'>
        {props.Title}
      </p>
      <div className='flex gap-4'>
        <PlayCircle />
        <PlusCircle />
      </div>
    </div>
  );
}
