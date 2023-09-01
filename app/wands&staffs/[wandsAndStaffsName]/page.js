import '../../global.scss';
import '../../styles/generateItem.scss';
import { notFound } from 'next/navigation';
import { getAllItems } from '../../database/items';
import WandAndStaff from './wandAndStaff';

export default async function WandAndStaffPage({ params }) {
  const items = await getAllItems();

  const wandAndStaff = items.find((data) => {
    return data.title.toLowerCase() === params.wandsAndStaffsName;
  });
  if (!wandAndStaff) {
    notFound();
  }

  return <WandAndStaff data={wandAndStaff} />;
}
