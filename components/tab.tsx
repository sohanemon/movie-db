'use client';
import { cn } from '@/lib/utils';
import { ReactSVG } from 'react-svg';
export const Tab = ({ label, active }: { label: string; active?: boolean }) => {
  return (
    <div
      className={cn('flex items-center gap-3.5 cursor-pointer', {
        'text-accent': active,
      })}
    >
      <ReactSVG src={`/assets/images/${label.toLowerCase()}.svg`} width={24} />
      <p className='text-[15px] font-semibold '>{label}</p>
    </div>
  );
};
