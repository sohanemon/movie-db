'use client';

import useMovieStore from '@/lib/store/movie-store';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export default function SelectedMovieCard() {
  const { selectedMovie } = useMovieStore();

  if (selectedMovie)
    return (
      <motion.section
        id='selectedCard'
        key={selectedMovie?.Title}
        initial={{ height: 0 }}
        animate={{ height: 450 }}
        className={cn(
          'grid items-center col-span-full',
          `row-start-${Math.ceil(selectedMovie?.index! / 5)}`
        )}
      >
        <AnimatePresence>
          <motion.div
            initial={{ height: 0, opacity: 0.5 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ type: 'keyframes', delay: 0.6 }}
            className={cn('flex  bg-secondary rounded-xl overflow-clip')}
          >
            <Image
              src={selectedMovie?.Poster!}
              className='h-[390px] object-cover'
              alt=''
              width={320}
              height={500}
            />
            {/* right side */}
            <div className='space-y-3 p-9'>
              <p className='text-3xl font-bold '>{selectedMovie?.Title}</p>
              {/* rating */}
              <section className='inline-flex items-center gap-3'>
                <div className='h-2 rounded-full w-28 bg-primary'>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${parseFloat(selectedMovie?.imdbRating!) * 10}%`,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 1.1,
                    }}
                    className='h-2 bg-accent rounded-[5px]'
                  />
                </div>{' '}
                <p className='font-semibold text-white '>
                  {selectedMovie?.imdbRating}/10
                </p>
              </section>
              {/* stats */}
              <div className='grid grid-cols-2 gap-2 font-semibold'>
                {stats.map((_) => (
                  <>
                    <p>{_}</p>
                    {/* @ts-ignore */}
                    <p>{selectedMovie?.[_]}</p>
                  </>
                ))}
              </div>
              <p className='text-sm text-white line-clamp-2 '>
                {selectedMovie?.Plot}
              </p>
              <div className='pt-3 space-x-4'>
                <button className='font-bold h-10 bg-accent hover:bg-accent/80 rounded-[5px] text-primary w-36'>
                  Play Movie
                </button>
                <button className='font-bold h-10 rounded-[5px] text-accent bg-transparent w-36 border border-accent hover:bg-transparent/10'>
                  Watch Trailer
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.section>
    );
}

const stats = ['Year', 'Runtime', 'Director', 'Language'];
