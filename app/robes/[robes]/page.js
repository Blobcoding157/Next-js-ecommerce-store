import '../../global.scss';
import '../../styles/generateItem.scss';
import { notFound } from 'next/navigation';
import { getAllItems } from '../../database/items';
import WandAndStaff from './robes';

export default async function RobesPage({ params }) {
  const items = await getAllItems();

  const robes = items.find((data) => {
    return data.title.toLowerCase() === params.robes;
  });
  if (!robes) {
    notFound();
  }

  return <WandAndStaff data={robes} />;
}
