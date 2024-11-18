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

export default function GenerateBroom({ items }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brooms = items.filter((broom) => broom.type === 'Broom');

  const broomsWithAmount = brooms.map((broom) => {
    const itemWithAmount = { ...broom, amount: 0 };
    return itemWithAmount;
  });

  const robesToMap = broomsWithAmount ? broomsWithAmount : brooms;

  return (
    <>
      {robesToMap.map((broom) => {
        return (
          <Fragment key={broom.id}>
            <Link
              className="itemLinkBegone"
              href={`/brooms/${broom.title.toLocaleLowerCase()}`}
            >
              <div className="itemContainer">
                <Image
                  alt={broom.title}
                  src={broom.imageLink}
                  width="200"
                  height="250"
                />
                <h1 className="itemTitle">
                  {broom.title.toUpperCase().replace(/_/g, ' ')}
                </h1>
                <div className="itemType">{broom.type}</div>

                <div className="itemPrice">{broom.price} G</div>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </>
  );
}
