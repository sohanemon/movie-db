import { Tab } from './tab';
import Separator from './ui/separator';
import User from './user';

export default function Sidebar() {
  return (
    <aside className='sticky top-0 min-w-[250px] h-full min-h-screen bg-primary'>
      <User />
      <Separator />
      <div className='p-5 space-y-5'>
        {data.slice(0, 5).map((_, idx) => (
          <Tab key={_} label={_} active={!idx} />
        ))}
      </div>
      <Separator />
      <div className='p-5 space-y-5'>
        {data.slice(5, 7).map((_, idx) => (
          <Tab key={_} label={_} />
        ))}
      </div>
      <Separator />
      <div className='p-5 space-y-5'>
        {data.slice(7).map((_, idx) => (
          <Tab key={_} label={_} />
        ))}
      </div>
    </aside>
  );
}

const data = [
  'Discover',
  'Playlist',
  'Movie',
  'TV Shows',
  'My List',
  'Watch Later',
  'Recommended',
  'Settings',
  'Logout',
];
