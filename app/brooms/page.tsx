import '../styles/wands-and-staffs-page.scss';
import '../global.scss';
import Image from 'next/image';
import { getAllItems } from '../database/items';
import GenerateBroom from './generateBroom';

export default async function BroomsPage() {
  const items = await getAllItems();
  return (
    <>
      <div className="wandHeader">
        <Image
          className="wandHeaderImage"
          alt="broom header"
          src="/brooms/broom-header.jpg"
          width={1370}
          height={594}
        />
      </div>
      <div className="items">
        <GenerateBroom items={items} />
      </div>
    </>
  );
}
