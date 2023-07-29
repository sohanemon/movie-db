'use client';

import useMovieStore from '@/lib/store/movie-store';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function SelectedMovieCard() {
  const { selectedMovie } = useMovieStore();
  const itemRef = useRef<HTMLDivElement>(null);

  if (selectedMovie)
    return (
      <motion.div
        key={'item'}
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        transition={{ type: 'keyframes' }}
        ref={itemRef}
        className={cn(
          'flex col-span-full bg-secondary rounded-xl overflow-clip',
          `row-start-${Math.ceil(selectedMovie?.index! / 5)}`
        )}
      >
        <Image
          src={selectedMovie.Poster}
          className='h-[390px] object-cover'
          alt=''
          width={320}
          height={500}
        />
        <div className='p-9'>
          <p className='text-3xl font-bold '>{selectedMovie.Title}</p>
          {/* rating */}
          <div className='w-[111px] h-2 bg-primary rounded-full'>
            <motion.div
              animate={{ width: [0, 30] }}
              className='w-[89px] h-2 bg-accent rounded-[5px]'
            />
          </div>
        </div>
      </motion.div>
    );
}
