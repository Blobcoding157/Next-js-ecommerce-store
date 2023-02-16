import '../wands&staffs/page.scss';
import '../global.scss';
import Image from 'next/image';
import GenerateBroom from './generateBroom';

export default function BroomsPage() {
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
        <GenerateBroom />
      </div>
    </>
  );
}
