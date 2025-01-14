'use client';
import '../global.scss';
import '../styles/generateItem.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect } from 'react';

type Item = {
  id: number;
  title: string;
  type: string;
  description: string | undefined;
  imageLink: string;
  price: number;
};

type Props = { items: Item[] };

export default function GenerateItem({ items }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const wandAndStaffs = items.filter(
    (ws) => ws.type === 'Wand' || ws.type === 'Staff',
  );

  const wandAndStaffWithAmount = wandAndStaffs.map((item) => {
    const itemWithAmount = { ...item, amount: 0 };
    return itemWithAmount;
  });

  return (
    <>
      {wandAndStaffWithAmount.map((item) => {
        return (
          <Fragment key={item.id}>
            <Link
              className="itemLinkBegone"
              href={`/wands&staffs/${item.title.toLocaleLowerCase()}`}
            >
              <div className="itemContainer">
                <Image
                  alt={item.title}
                  src={item.imageLink}
                  width="200"
                  height="250"
                />
                <h1 className="itemTitle">
                  {item.title.toUpperCase().replace(/_/g, ' ')}
                </h1>
                <div className="itemType">{item.type}</div>
                <div className="itemPrice">{item.price} G</div>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </>
  );
}
