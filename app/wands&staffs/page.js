import './page.scss';
import { cookies } from 'next/headers';
import Image from 'next/image';
import GenerateItem from './generateItem';

export default function WandsAndStaffsPage() {
  return (
    <>
      <div className="wandHeader">
        <Image
          className="wandHeaderImage"
          alt="wand header"
          src="/wands/wand_header.jpg"
          width={2560}
          height={1707}
        />
      </div>
      <div className="items">
        <GenerateItem />
      </div>
    </>
  );
}
