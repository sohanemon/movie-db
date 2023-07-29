import { Tab } from './tab';
import Separator from './ui/separator';
import User from './user';

export default function Sidebar() {
  return (
    <aside className='w-64 h-full min-h-screen bg-primary'>
      <User />
      <Separator />
      {data.map((_) => (
        <Tab key={_} label={_} />
      ))}
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
