import '../styles/wands-and-staffs-page.scss';
import '../global.scss';
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
