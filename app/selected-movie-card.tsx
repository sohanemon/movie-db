'use client';

import useMovieStore from '@/lib/store/movie-store';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function SelectedMovieCard() {
  const { selectedMovie } = useMovieStore();
  const itemRef = useRef<HTMLDivElement>(null);

  if (selectedMovie)
    return (
      <motion.div
        key={'item'}
        initial={{ height: 0 }}
        animate={{ height: 350 }}
        transition={{ type: 'keyframes' }}
        ref={itemRef}
        className={cn(
          'grid col-span-full place-items-center ',
          `row-start-${Math.ceil(selectedMovie?.index! / 5)}`
        )}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iste
        facere consequatur repudiandae eius magni in inventore nesciunt quas
        perspiciatis iusto, placeat vero enim sequi corrupti sint, quisquam,
        suscipit tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Officiis iste facere consequatur repudiandae eius magni in
        inventore nesciunt quas perspiciatis iusto, placeat vero enim sequi
        corrupti sint, quisquam, suscipit tenetur.
      </motion.div>
    );
}
