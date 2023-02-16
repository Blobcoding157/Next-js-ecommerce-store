import '../../global.scss';
import '../../wands&staffs/generateItem.scss';
import { notFound } from 'next/navigation';
import { getAllItems } from '../../database/items';
import WandAndStaff from './brooms';

export default async function BroomsPage({ params }) {
  const items = await getAllItems();

  const brooms = items.find((data) => {
    return data.title.toLowerCase() === params.brooms;
  });
  if (!brooms) {
    notFound();
  }

  return <WandAndStaff data={brooms} />;
}
