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

export default function GenerateRobe({ items }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const robes = items.filter((robe) => robe.type === 'Robe');

  const robesWithAmount = robes.map((robe) => {
    const itemWithAmount = { ...robe, amount: 0 };
    return itemWithAmount;
  });

  const robesToMap = robesWithAmount ? robesWithAmount : robes;

  return (
    <>
      {robesToMap.map((robe) => {
        return (
          <Fragment key={robe.id}>
            <Link
              className="itemLinkBegone"
              href={`/robes/${robe.title.toLocaleLowerCase()}`}
            >
              <div className="itemContainer">
                <Image
                  alt={robe.title}
                  src={robe.imageLink}
                  width="200"
                  height="250"
                />
                <h1 className="itemTitle">
                  {robe.title.toUpperCase().replace(/_/g, ' ')}
                </h1>
                <div className="itemType">{robe.type}</div>

                <div className="itemPrice">{robe.price} G</div>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </>
  );
}
