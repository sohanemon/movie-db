'use client';
import { Movie } from '@/global.types';
import useMovieStore from '@/lib/store/movie-store';
import { cn } from '@/lib/utils';
import { PlayCircle, PlusCircle } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MovieCard(props: Movie) {
  const { setSelectedMovie, selectedMovie } = useMovieStore();
  // const { push } = useRouter();
  function handleSelect() {
    setSelectedMovie(props);
    // push('#selectedMovie');
  }

  return (
    <div
      role='button'
      onClick={handleSelect}
      className={cn('p-3 ring-accent bg-secondary rounded-xl', {
        'ring-2': selectedMovie?.index! === props.index!,
      })}
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
