'use client';
import { ReactSVG } from 'react-svg';
import { MoreVertical, Sun, X } from 'lucide-react';
import useSearchStore from '@/lib/store/search-store';
import { AnimatePresence, motion } from 'framer-motion';
import { serialize } from 'v8';

export default function TopBar() {
  const { searching, setSearching } = useSearchStore();
  return (
    <section className='flex mb-12'>
      <div className='flex grow'>
        <AnimatePresence>
          {searching && (
            <motion.div
              key={'search'}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '40%', opacity: 1 }}
              transition={{ damping: 10 }}
              exit={{ width: 0, opacity: 0 }}
              className='flex items-center  rounded-lg px-3.5 bg-primary'
            >
              <ReactSVG
                src={`/assets/images/search.svg`}
                width={24}
                height={24}
              />
              <input
                type='text'
                className='pl-3 h-14 grow'
                placeholder='search'
              />
              <X role='button' onClick={() => setSearching(false)} />
            </motion.div>
          )}
          {!searching && (
            <motion.div
              animate={{ opacity: [0, 1], transition: { delay: 0.4 } }}
            >
              <ReactSVG
                onClick={() => setSearching(true)}
                role='button'
                className='flex h-14 px-3.5 place-items-center'
                src={`/assets/images/search.svg`}
                width={24}
                height={24}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='flex items-center gap-2'>
        <Sun role='button' />
        <MoreVertical role='button' />
      </div>
    </section>
  );
}
