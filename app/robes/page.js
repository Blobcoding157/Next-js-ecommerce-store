import '../styles/wands-and-staffs-page.scss';
import '../global.scss';
import Image from 'next/image';
import GenerateRobe from './generateRobe';

export default function RobesPage() {
  return (
    <>
      <div className="wandHeader">
        <Image
          className="wandHeaderImage"
          alt="wand header"
          src="/robes/robes-header.jpg"
          width={1370}
          height={594}
        />
      </div>
      <div className="items">
        <GenerateRobe />
      </div>
    </>
  );
}
