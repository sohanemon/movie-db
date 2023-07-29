import Image from 'next/image';

export default function User() {
  return (
    <section className='flex flex-col items-center gap-2 py-5'>
      <Image
        src={`/assets/images/user.png`}
        alt='user'
        width={100}
        className='rounded-full'
        height={100}
      />
      <p className='text-xl font-semibold '>Eric Hoffman</p>
    </section>
  );
}

