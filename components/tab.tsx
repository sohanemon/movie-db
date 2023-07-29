'use client';
import { ReactSVG } from 'react-svg';
export const Tab = ({ label }: { label: string; active?: boolean }) => {
  return (
    <div className='flex items-center gap-3.5'>
      <ReactSVG src={`/assets/images/${label.toLowerCase()}.svg`} width={24} />
      <p className='text-[15px] font-semibold '>{label}</p>
    </div>
  );
};
