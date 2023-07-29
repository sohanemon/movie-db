'use client';

import useMovieStore from '@/lib/store/movie-store';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function SelectedMovieCard() {
  const { selectedMovie } = useMovieStore();

  const itemRef = useRef<HTMLDivElement>(null);
  function handleClick() {
    console.log(itemRef.current?.className);
  }

  return (
    <section className='h-96 col-span-full'>
      <motion.div
        key={'item'}
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        ref={itemRef}
        onClick={handleClick}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iste
        facere consequatur repudiandae eius magni in inventore nesciunt quas
        perspiciatis iusto, placeat vero enim sequi corrupti sint, quisquam,
        suscipit tenetur.
      </motion.div>
    </section>
  );
}
