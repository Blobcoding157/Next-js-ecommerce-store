import '../../global.scss';
import '../generateItem.scss';
import { notFound } from 'next/navigation';
import { items } from '../../database/items.mjs';
import WandAndStaff from './wandAndStaff';

export default function WandAndStaffPage({ params }) {
  const wandAndStaff = items.find((data) => {
    return data.title.toLowerCase() === params.wandsAndStaffsName;
  });
  if (!wandAndStaff) {
    notFound();
  }

  return <WandAndStaff data={wandAndStaff} />;
}
