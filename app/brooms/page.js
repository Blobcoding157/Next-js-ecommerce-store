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
          alt="broom header"
          src="/brooms/broom-header.jpg"
          width={1370}
          height={594}
        />
      </div>
      <div className="items">
        <GenerateBroom />
      </div>
    </>
  );
}
